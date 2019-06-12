import React from 'react'
import Helmet from 'react-helmet'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

import './all.sass'
import '../css/bootstrap.css'
import '../vendors/linericon/style.css'

//import '../css/style.css'
//import '../css/font-awesome.min.css'
import useSiteMetadata from './SiteMetadata'

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata()
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/img/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          href="/img/favicon-32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href="/img/favicon-16x16.png"
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href="/img/safari-pinned-tab.svg"
          color="#ff4400"
        />
       <link rel="stylesheet" href="/css/bootstrap.css" />

	<link rel="stylesheet" href="/css/style.css" type="text/css" media="all" />

	<link href="/css/font-awesome.min.css" rel="stylesheet" />
	<link href="//fonts.googleapis.com/css?family=Source+Sans+Pro:200,200i,300,300i,400,400i,600,600i,700,700i,900,900i&amp;subset=cyrillic,cyrillic-ext,greek,greek-ext,latin-ext,vietnamese"
	 rel="stylesheet" />
	<link href="//fonts.googleapis.com/css?family=Sarabun:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i&amp;subset=latin-ext,thai,vietnamese"
	 rel="stylesheet" />
	<link href="//fonts.googleapis.com/css?family=Courgette&amp;subset=latin-ext" rel="stylesheet" />
       


        <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.5.3/jspdf.min.js"></script>
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta property="og:image" content="/img/og-image.jpg" />
      </Helmet>
      <Navbar />
      <div class="d-flex">
        
        <div id="main-content">
        {children}
        </div>
      </div>
      <Footer />
      <Helmet>
      <script src="/js/jquery-3.2.1.min.js"></script>
	<script src="/js/popper.js"></script>
	<script src="/js/bootstrap.min.js"></script>
	<script src="/js/stellar.js"></script>
	<script src="/js/jquery.magnific-popup.min.js"></script>
	<script src="/vendors/lightbox/simpleLightbox.min.js"></script>
	<script src="/vendors/nice-select/js/jquery.nice-select.min.js"></script>
	<script src="/vendors/owl-carousel/owl.carousel.min.js"></script>
	<script src="/js/jquery.ajaxchimp.min.js"></script>
	<script src="/vendors/counter-up/jquery.waypoints.min.js"></script>
	<script src="/vendors/counter-up/jquery.counterup.js"></script>
	<script src="/js/mail-script.js"></script>
	
	<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCjCGmQ0Uq4exrzdcL6rvxywDDOvfAu6eE"></script>
	<script src="j/s/gmaps.min.js"></script>
	<script src="/js/theme.js"></script>
      </Helmet>
    </div>
  )
}

export default TemplateWrapper
