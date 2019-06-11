import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'



const ServiceGrid = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map(item => (
        <div class="col-md-4 services-w3ls-grid">
            <div class="serv-icon mx-auto">
            <PreviewCompatibleImage imageInfo={item} />
            </div>
            <h4 class="text-wh mt-md-4 mt-3 mb-3">{ item.title }</h4>
            <p>{ item.text }</p>
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
