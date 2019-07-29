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

    <section class="home_banner_area overlay" 
     style={{
      backgroundImage: `url(${
        !!image.childImageSharp ? image.childImageSharp.fluid.src : image
      })`,
      backgroundPosition: `top left`,
      backgroundAttachment: `fixed`,
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
          <div class="col-lg-6 video-left overlay">
            <div class="video-inner justify-content-center align-items-center d-flex">
              <a id="play-home-video" class="video-play-button" href="">
                <span></span>
              </a>
            </div>
          </div>
          <div class="col-lg-6 video-right">
            <h1>{ mainpitch.title }</h1>
            <p>{ mainpitch.description }</p>
           

            <div class="right-bottom-area">
              <div class="author-lacture">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusmod tempor incididunt labore dolore magna
                  aliqua enim minim veniam quis nostrud. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusmod
                  tempor incididunt labore dolore magna aliqua enim minim veniam quis nostrud. Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit, sed eiusmod tempor incididunt labore dolore magna aliqua enim minim veniam quis
                  nostrud.</p>
                <div class="author-title">
                  <div class="thumb"><img src={img_abt} alt="" /></div>
                  <div class="a-desc">
                    <h6>Marvel Maison</h6>
                    <p>Chief Executive, Amazon</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="about-area">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="about-inner">
              <div class="row">
               
                <div class="col-lg-6 col-md-6">
                  <div class="single-success">
                    <h5>Road to Success</h5>
                    <p>Lorem ipsum dolor sit amet, sed eiusmod tempor incididunt labore dolore magna.</p>
                  </div>
                </div>
                
                <div class="col-lg-6 col-md-6">
                  <div class="single-success">
                    <h5>Road to Success</h5>
                    <p>Lorem ipsum dolor sit amet, sed eiusmod tempor incididunt labore dolore magna.</p>
                  </div>
                </div>
               
                <div class="col-lg-6 col-md-6">
                  <div class="single-success">
                    <h5>Road to Success</h5>
                    <p>Lorem ipsum dolor sit amet, sed eiusmod tempor incididunt labore dolore magna.</p>
                  </div>
                </div>
                
                <div class="col-lg-6 col-md-6">
                  <div class="single-success">
                    <h5>Road to Success</h5>
                    <p>Lorem ipsum dolor sit amet, sed eiusmod tempor incididunt labore dolore magna.</p>
                  </div>
                </div>
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
                <p class="df-color">Get to Know Project Estimate?</p>
                <h1>Get to Know Project Estimate?</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusmod tempor incididunt labore dolore magna
                  aliqua enim minim veniam quis nostrud.</p>
              </div>
              <div class="author-lacture">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusmod tempor incididunt labore dolore magna
                  aliqua enim minim veniam quis nostrud. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusmod
                  tempor incididunt labore dolore magna aliqua enim minim veniam quis nostrud. Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit, sed eiusmod tempor incididunt labore dolore magna aliqua enim minim veniam quis
                  nostrud.</p>
                <div class="author-title">
                  <div class="thumb"><img src={img_abt} alt="" /></div>
                  <div class="a-desc">
                    <h6>Marvel Maison</h6>
                    <p>Chief Executive, Amazon</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="service-2-right">
              <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-6">
                  <div class="left-image">
                    <div class="s-img"><img class="img-fluid" src={img_service_4} alt="" /></div>
                    <div class="s-img"><img class="img-fluid" src={img_service_5} alt="" /></div>
                  </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6">
                  <div class="right-image">
                      <div class="s-img"><img class="img-fluid" src={img_service_6} alt="" /></div>
                      <div class="s-img"><img class="img-fluid" src={img_service_7} alt="" /></div>
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
                <img class="img-fluid" src={team_1} alt="" />
              </div>
              <div class="author_decs">
                <h5>Ethel Davis</h5>
                <p class="profession">Senior Barrister at law</p>
              </div>
            </div>
          </div>
          
          <div class="col-lg-4 col-md-4 col-sm-6">
            <div class="single_member">
              <div class="author">
                <img class="img-fluid" src={team_2} alt="" />
              </div>
              <div class="author_decs">
                <h5>Ethel Davis</h5>
                <p class="profession">Senior Barrister at law</p>
              </div>
            </div>
          </div>
          
          <div class="col-lg-4 col-md-4 col-sm-6">
            <div class="single_member">
              <div class="author">
                <img class="img-fluid" src={team_3} alt="" />
              </div>
              <div class="author_decs">
                <h5>Ethel Davis</h5>
                <p class="profession">Senior Barrister at law</p>
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
              <h2>Latest From Our Blog Posts</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusmod tempor incididunt labore dolore magna
                aliqua enim minim veniam quis nostrud.</p>
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
          
          <div class="col-lg-4 col-md-4 col-sm-6">
            <div class="single-blog">
              <div class="blog-thumb">
                <img class="img-fluid" src={blog_1} alt="" />
              </div>
              <div class="blog-details">
                <div class="blog-meta">
                  <span>25 june, 2018 | By Mark Wiens</span>
                </div>
                <h5><a href="#">Addiction When Gambling <br />
                    Becomes A Problem</a></h5>
                <p>Computers have become ubiquitous in almost every facet of our lives. At work, desk jockeys spend hours in
                  front of their desktops.</p>
              </div>
            </div>
          </div>
        
          <div class="col-lg-4 col-md-4 col-sm-6">
            <div class="single-blog">
              <div class="blog-thumb">
                <img class="img-fluid" src={blog_2} alt="" />
              </div>
              <div class="blog-details">
                <div class="blog-meta">
                  <span>25 june, 2018 | By Mark Wiens</span>
                </div>
                <h5><a href="#">Addiction When Gambling <br />
                    Becomes A Problem</a></h5>
                <p>Computers have become ubiquitous in almost every facet of our lives. At work, desk jockeys spend hours in
                  front of their desktops.</p>
              </div>
            </div>
          </div>
          
          <div class="col-lg-4 col-md-4 col-sm-6">
            <div class="single-blog">
              <div class="blog-thumb">
                <img class="img-fluid" src={blog_3} alt="" />
              </div>
              <div class="blog-details">
                <div class="blog-meta">
                  <span>25 june, 2018 | By Mark Wiens</span>
                </div>
                <h5><a href="#">Addiction When Gambling <br />
                    Becomes A Problem</a></h5>
                <p>Computers have become ubiquitous in almost every facet of our lives. At work, desk jockeys spend hours in
                  front of their desktops.</p>
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


        main{
          heading
          description
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
