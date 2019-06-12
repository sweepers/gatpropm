import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import faature_1 from '../img/features/1.png'
import faature_2 from '../img/features/2.png'
import faature_3 from '../img/features/3.png'
import faature_4 from '../img/features/4.png'
import img_abt from '../img/about-author.png'
import img_service1 from '../img/service/service_1.jpg'
import img_service2 from '../img/service/service_2.jpg'
import img_service3 from '../img/service/service_3.jpg'
import img_service4 from '../img/service/service_4.jpg'
import img_service5 from '../img/service/service_5.jpg'
import img_service6 from '../img/service/service_6.jpg'
export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <div>
    <section class="banner_area ">
        <div class="banner_inner overlay d-flex align-items-center">
            <div class="container">
                <div class="banner_content text-center">
                    <div class="page_link">
                        <a href="index.html">Home</a>
                        <a href="about-us.html">About Us</a>
                    </div>
                    <h2>About Us</h2>
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
            <h1>Get to Know Project Estimate?</h1>
            <p>There is a moment in the life of any aspiring astronomer that it is time to buy that first telescope. It’s
              exciting to think about setting up your own viewing station whether that is on the deck.</p>
            <a href="#" class="primary-btn">Learn More</a>

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

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
