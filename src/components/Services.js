import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'



const ServiceGrid = ({ gridItems }) => (
  
  <div class="row justify-content-center">
    {gridItems.map(item => (
      <div class="col-lg-4 col-md-4 col-sm-6">
        <div class="single-service">
          <div class="service-thumb">
            <PreviewCompatibleImage imageInfo={item} />
          </div>
          <div class="service-details">
            <h5><a href="#">{ item.title }</a></h5>
            <p>{ item.text }</p>
          </div>
        </div>
      </div>
       
    
    ))}
  </div>
  
)

ServiceGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
}

export default ServiceGrid
