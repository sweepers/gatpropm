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
import img_abt from '../img/about-author.png'

import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import team_1 from '../img/team/team1.jpg'
import team_2 from '../img/team/team2.jpg'
import team_3 from '../img/team/team3.jpg'
import blog_1 from '../img/blog/h-blog1.jpg'
import blog_2 from '../img/blog/h-blog2.jpg'
import blog_3 from '../img/blog/h-blog3.jpg'
import img_service_4 from '../img/service/service4.jpg'
import img_service_5 from '../img/service/service5.jpg'
import img_service_6 from '../img/service/service6.jpg'
import img_service_7 from '../img/service/service7.jpg'
export const IndexPageTemplate = ({
  image,
  image_about,
  title,
  heading,
  about,
  services,
  banner,
  //subheading,
  mainpitch,
  main,
  blog,
 // description,
  intro,
}) => (
  
  <div>

    <section class="home_banner_area overlay" 
     style={{
      backgroundImage: `url(${
        !!image.childImageSharp ? image.childImageSharp.fluid.src : image
      })`,
      
    }}>
		<div class="banner_inner">
			<div class="container">
				<div class="row fullscreen d-flex align-items-center justify-content-center height-657px">
					<div class="banner_content">
						<h2>
						 { title }
						</h2>
						<p>
						 { heading }
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
    <section class="video-sec-area section_gap_top" id="about">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 video-left overlay" style={{
      backgroundImage: `url(${
        !!image_about.childImageSharp ? image_about.childImageSharp.fluid.src : image_about
      })`,
    
    }}>
            <div class="video-inner justify-content-center align-items-center d-flex">
             
            </div>
          </div>
          <div class="col-lg-6 video-right">
            <h1>{ mainpitch.title }</h1>
            <p>{ mainpitch.description }</p>
           

            <div class="right-bottom-area">
              <div class="author-lacture">
                <p>{ about }</p>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section class="service-area section_gap">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-7">
            <div class="main_title">
              <h1>{ services.title }</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusmod tempor incididunt labore dolore magna
                aliqua enim minim veniam quis nostrud.</p>
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
          <Services gridItems={services.blurbs} />
          
         
          
         
          
          
         
       
         
         
       
         
        </div>
      </div>
    </section>  
    <section class="service-area-2">
      <div class="container">
        <div class="row align-items-center justify-content-center">
          <div class="col-lg-6">
            <div class="service-2-left">
              <div class="get-know">
                <p class="df-color">{ intro.heading }</p>
                { intro.description }
              </div>
             
            </div>
          </div>
          <div class="col-lg-6">
            <div class="service-2-right">
              <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-6">
                  <div class="left-image">
                    <div class="s-img"><img class="img-fluid" src={ !!intro.blurbs[0].image.childImageSharp ? intro.blurbs[0].image.childImageSharp.fluid.src : intro.blurbs[0].image } alt="" /></div>
                    <div class="s-img"><img class="img-fluid" src={ !!intro.blurbs[1].image.childImageSharp ? intro.blurbs[1].image.childImageSharp.fluid.src : intro.blurbs[1].image } alt="" /></div>
                  </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6">
                  <div class="right-image">
                      <div class="s-img"><img class="img-fluid" src={ !!intro.blurbs[2].image.childImageSharp ? intro.blurbs[2].image.childImageSharp.fluid.src : intro.blurbs[2].image } alt="" /></div>
                      <div class="s-img"><img class="img-fluid" src={ !!intro.blurbs[3].image.childImageSharp ? intro.blurbs[3].image.childImageSharp.fluid.src : intro.blurbs[3].image } alt="" /></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>  
    <section class="section_gap team-area">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-7">
            <div class="main_title">
              <h2>{ main.heading } </h2>
              <p>{ main.description }</p>
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
         
          <div class="col-lg-4 col-md-4 col-sm-6">
            <div class="single_member">
              <div class="author">
               <PreviewCompatibleImage imageInfo={main.image1} />
              </div>
              <div class="author_decs">
                <h5>{main.image1.alt }</h5>
                
              </div>
            </div>
          </div>
          
          <div class="col-lg-4 col-md-4 col-sm-6">
            <div class="single_member">
              <div class="author">
                <PreviewCompatibleImage imageInfo={main.image2} />
              </div>
              <div class="author_decs">
                <h5>{main.image2.alt }</h5>
                
              </div>
            </div>
          </div>
          
          <div class="col-lg-4 col-md-4 col-sm-6">
            <div class="single_member">
              <div class="author">
              <PreviewCompatibleImage imageInfo={main.image3} />
              </div>
              <div class="author_decs">
                <h5>{main.image3.alt }</h5>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="cta-area section_gap overlay">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <h1>Get to Know Project Estimate?</h1>
            <p>There is a moment in the life of any aspiring astronomer that it is time to buy that first telescope. It’s
              exciting to think about setting up your own viewing station whether that is on the deck</p>
            <a href="#" class="primary-btn">Get Free Estimate</a>
          </div>
        </div>
      </div>
    </div>
    <section class="section_gap blog_area">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-7">
            <div class="main_title">
              <h2>{ blog.heading }</h2>
              <p>{ blog.description }</p>
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
          
          <div class="col-lg-4 col-md-4 col-sm-6">
            <div class="single-blog">
              <div class="blog-thumb">
               <PreviewCompatibleImage imageInfo={blog.blog1} />
              </div>
              <div class="blog-details">
                
                <h5><a href="#">{blog.blog1.alt }</a></h5>
                <p>{blog.blog1.description }</p>
              </div>
            </div>
          </div>
        
          <div class="col-lg-4 col-md-4 col-sm-6">
            <div class="single-blog">
              <div class="blog-thumb">
              <PreviewCompatibleImage imageInfo={blog.blog2} />
              </div>
              <div class="blog-details">
                
                <h5><a href="#">{blog.blog2.alt }</a></h5>
                <p>{blog.blog2.description }</p>
              </div>
            </div>
          </div>
          
          <div class="col-lg-4 col-md-4 col-sm-6">
            <div class="single-blog">
              <div class="blog-thumb">
              <PreviewCompatibleImage imageInfo={blog.blog3} />
              </div>
              <div class="blog-details">
                
               <h5><a href="#">{blog.blog3.alt }</a></h5>
                <p>{blog.blog3.description }</p>
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
  image_about: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  about: PropTypes.string,
  services: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  banner: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  main: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    image1: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image2: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image3: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  }),
  blog: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    blog1: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    blog2: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    blog3: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
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
        image_about={frontmatter.image_about}
        
        title={frontmatter.title}
        about={frontmatter.about}
        main={frontmatter.main}
        blog={frontmatter.blog}
        services={frontmatter.services}
        banner={frontmatter.banner}
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
        image_about {
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


        main {
          heading
          description
          image1 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }

          image2 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          image3 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }


        blog {
          heading
          description
          blog1 {
            alt
            description
            image {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }

          blog2 {
            alt
            description
            image {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          blog3 {
            alt
            description
            image {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
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
