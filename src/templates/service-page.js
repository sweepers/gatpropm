import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'


export const ServicePageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <div>
    <section class="banner_area ">
        <div class="banner_inner overlay d-flex align-items-center">
            <div class="container">
                <div class="banner_content text-center">
                    <div class="page_link">
                        <a href="index.html">Home</a>
                        <a href="about-us.html">Service</a>
                    </div>
                    <h2>Our Service</h2>
                </div>
            </div>
        </div>
    </section>
    
    <section class="about-area"></section>
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <PageContent className="content" content={content} />
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

ServicePageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const ServicePage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <ServicePageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

ServicePage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ServicePage

export const servicePageQuery = graphql`
  query ServicePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
