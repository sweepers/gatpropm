import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Content, { HTMLContent } from '../components/Content'
import Layout from '../components/Layout'
import Features from '../components/Features'
import Services from '../components/Services'
import BlogRoll from '../components/BlogRoll'
import faature_1 from '../img/features/1.png'
import faature_2 from '../img/features/2.png'
import faature_3 from '../img/features/3.png'
import faature_4 from '../img/features/4.png'
export const IndexPageTemplate = ({
  image,
  title,
  heading,
  about,
  services,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
  
  <div>

    <section class="home_banner_area overlay">
		<div class="banner_inner">
			<div class="container">
				<div class="row fullscreen d-flex align-items-center justify-content-center height-657px">
					<div class="banner_content">
						<h2>
							PROMPT LEGAL SERVICES
						</h2>
						<p>
							PROMPT accompanies clients from their starts to successes. It is our commitment to ensure the clients’ goal can be achieved without legal obstacles.
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>
  <section class="features_area" id="features_counter">
      <div class="container">
        <div class="row counter_wrapper">
        
          <div class="col-lg-3 col-md-6 col-sm-6">
            <div class="single_feature">
              <div class="thumb">
                <img src={faature_1} alt="" />
              </div>
              <div class="info-content">
                <h4><span class="counter">596</span>+</h4>
                <p>Qualified Lawyer</p>

              </div>
            </div>
          </div>
          
          <div class="col-lg-3 col-md-6 col-sm-6">
            <div class="single_feature">
              <div class="thumb">
                <img src={faature_2} alt="" />
              </div>
              <div class="info-content">
                <h4><span class="counter">20650</span>+</h4>
                <p>Solved Cases</p>
              </div>
            </div>
          </div>
         
          <div class="col-lg-3 col-md-6 col-sm-6">
            <div class="single_feature">
              <div class="thumb">
                <img src={faature_3} alt="" />
              </div>
              <div class="info-content">
                <h4><span class="counter">2.5</span>k</h4>
                <p>Trusted Clients</p>
              </div>
            </div>
          </div>
        
          <div class="col-lg-3 col-md-6 col-sm-6">
            <div class="single_feature">
              <div class="thumb">
                <img src={faature_4} alt="" />
              </div>
              <div class="info-content">
                <h4><span class="counter">50</span>+</h4>
                <p>Achievements</p>
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
  about: PropTypes.string,
  services: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
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
        about={frontmatter.about}
        services={frontmatter.services}
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
        about
       

        services {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            title
            text
          }
          title
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }



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
