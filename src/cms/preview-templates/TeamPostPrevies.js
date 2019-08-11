import React from 'react'
import PropTypes from 'prop-types'
import { TeamPostTemplate } from '../../templates/team-post'

const TeamPostPreview = ({ entry, widgetFor }) => (
  <TeamPostTemplate
    description={entry.getIn(['data', 'description'])}
    tags={entry.getIn(['data', 'tags'])}
    title={entry.getIn(['data', 'title'])}
  />
)

TeamPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default TeamPostPreview
