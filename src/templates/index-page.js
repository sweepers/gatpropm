import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  
  subheading,
  mainpitch,
  description,
  intro,
}) => (
  <div>
    <div id="home">
				
				<div class="banner_w3lspvt">
					<div class="banner-top1"
          style={{
            backgroundImage: `url(${
              !!image.childImageSharp ? image.childImageSharp.fluid.src : image
            })`,
            backgroundPosition: `top left`,
            backgroundAttachment: `fixed`,
          }}
          >
						<div class="container">
							<div class="banner-text text-center">
								
								<h3 class="my-md-4 my-3">{ title }</h3>
							
							</div>
						</div>
					</div>
				</div>
		
			</div>
      <div class="welcome py-5" id="about">
          <div class="container py-xl-5 py-lg-3">
            <div class="row py-xl-4">
              <div class="col-lg-6 welcome-left pr-lg-5">
                <h3>Story About Us</h3>
                <h4 class="mt-2 mb-3">Welcome to our company</h4>
                <h6>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
                  aperiam, eaque ipsa quae ab illo inventore</h6>
                <p class="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse porta erat sit amet eros
                  sagittis, quis
                  hendrerit
                  libero aliquam. Fusce semper augue ac dolor efficitur, a pretium metus pellentesque.</p>
              </div>
              <div class="col-lg-6 welcome-right text-center mt-lg-0 mt-5">
                <div class="row">
                  <div class="col-sm-6">
                    <div class="about-sty ml-sm-3">
                      <span class="fa fa-bar-chart text-wh"></span>
                      <p class="text-li mt-2">Business Strategy</p>
                    </div>
                  </div>
                  <div class="col-sm-6 mt-sm-0 mt-4">
                    <div class="about-sty-2 px-4 py-5">
                      <span class="fa fa-line-chart text-wh"></span>
                      <p class="text-li mt-2">Business Growth</p>
                    </div>
                    <div class="about-sty-2 px-4 py-5 mt-4">
                      <span class="fa fa-usd text-wh"></span>
                      <p class="text-li mt-2">Financial Planning</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="content">
                  <div className="tile">
                    <h1 className="title">{mainpitch.title}</h1>
                  </div>
                  <div className="tile">
                    <h3 className="subtitle">{mainpitch.description}</h3>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                      {heading}
                    </h3>
                    <p>{description}</p>
                  </div>
                </div>
                <Features gridItems={intro.blurbs} />
                <div className="columns">
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/products">
                      See all products
                    </Link>
                  </div>
                </div>
                <div className="column is-12">
                  <h3 className="has-text-weight-semibold is-size-2">
                    Latest stories
                  </h3>
                  <BlogRoll />
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/blog">
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
