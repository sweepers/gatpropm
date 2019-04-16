const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const { fmImagesToRelative } = require('gatsby-remark-relative-images')

const firebase = require("firebase-admin")
const crypto = require("crypto")
exports.sourceNodes = (
  { boundActionCreators },
  { credential, databaseURL, types, quiet = false },
  done
) => {
  const { createNode } = boundActionCreators

  firebase.initializeApp({
    credential: firebase.credential.cert(credential),
    databaseURL: databaseURL
  })

  const db = firebase.database()

  const start = Date.now()

  types.forEach(
    ({ query = ref => ref, map = node => node, type, path }) => {
      if (!quiet) {
        console.log(`\n[Firebase Source] Fetching data for ${type}...`)
      }

      query(db.ref(path)).once("value", snapshot => {
        if (!quiet) {
          console.log(
            `\n[Firebase Source] Data for ${type} loaded in`,
            Date.now() - start,
            "ms"
          )
        }

        const val = snapshot.val()

        Object.keys(val).forEach(key => {
          const node = map(Object.assign({}, val[key]))

          const contentDigest = crypto
            .createHash(`md5`)
            .update(JSON.stringify(node))
            .digest(`hex`)

          createNode(
            Object.assign(node, {
              id: key,
              parent: "root",
              children: [],
              internal: {
                type: type,
                contentDigest: contentDigest
              }
            })
          )
        })
        done()
      })
    },
    error => {
      throw new Error(error)
    }
  )
}



exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              tags
              templateKey
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const posts = result.data.allMarkdownRemark.edges

    posts.forEach(edge => {
      const id = edge.node.id
      createPage({
        path: edge.node.fields.slug,
        tags: edge.node.frontmatter.tags,
        component: path.resolve(
          `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
        ),
        // additional data can be passed via context
        context: {
          id,
        },
      })
    })

    // Tag pages:
    let tags = []
    // Iterate through each post, putting all found tags into `tags`
    posts.forEach(edge => {
      if (_.get(edge, `node.frontmatter.tags`)) {
        tags = tags.concat(edge.node.frontmatter.tags)
      }
    })
    // Eliminate duplicate tags
    tags = _.uniq(tags)

    // Make tag pages
    tags.forEach(tag => {
      const tagPath = `/tags/${_.kebabCase(tag)}/`

      createPage({
        path: tagPath,
        component: path.resolve(`src/templates/tags.js`),
        context: {
          tag,
        },
      })
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  fmImagesToRelative(node) // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
