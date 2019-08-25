import React from 'react'
import Helmet from 'react-helmet'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

import './all.sass'
import '../css/bootstrap.css'
import '../vendors/linericon/style.css'
import '../css/font-awesome.min.css'
import '../css/magnific-popup.css'
import '../vendors/owl-carousel/owl.carousel.min.css'
import '../vendors/lightbox/simpleLightbox.css'
import '../vendors/nice-select/css/nice-select.css'
import '../vendors/animate-css/animate.css'
import '../css/style.css'


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

     


        <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.4.1/jspdf.min.js"></script>
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta property="og:image" content="/img/og-image.jpg" />
      </Helmet>
      <Navbar />
      
      
        {children}
       
      <Footer />
      <Helmet>
      <script src="https://res.cloudinary.com/sweepers/raw/upload/v1560349062/js/jquery-3.2.1.min_pov7vj.js"></script>
	<script src="https://res.cloudinary.com/sweepers/raw/upload/v1560349062/js/popper_dluxcd.js"></script>
	<script src="https://res.cloudinary.com/sweepers/raw/upload/v1560349062/js/bootstrap.min_h7sblb.js"></script>
	<script src="https://res.cloudinary.com/sweepers/raw/upload/v1560349063/js/stellar_bsoyoz.js"></script>
	<script src="https://res.cloudinary.com/sweepers/raw/upload/v1560349062/js/jquery.magnific-popup.min_ifvmkw.js"></script>

	<script src="https://res.cloudinary.com/sweepers/raw/upload/v1560349061/js/jquery.ajaxchimp.min_bpgags.js"></script>

	<script src="https://res.cloudinary.com/sweepers/raw/upload/v1560349062/js/mail-script_qnykxm.js"></script>
	
	<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCjCGmQ0Uq4exrzdcL6rvxywDDOvfAu6eE"></script>
	<script src="https://res.cloudinary.com/sweepers/raw/upload/v1560349062/js/gmaps.min_yjttr7.js"></script>
	<script src="https://res.cloudinary.com/sweepers/raw/upload/v1560349062/js/theme_po0qyw.js"></script>
      </Helmet>
    </div>
  )
}

export default TemplateWrapper
