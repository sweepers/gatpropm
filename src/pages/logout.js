import React from 'react'
import { navigate } from 'gatsby-link'
import Layout from '../../components/Layout'

//import { DatePicker } from '@appbaseio/reactivesearch';
//import * as jsPDF from 'jspdf'



export default class Logout extends React.Component {
  constructor(props) {
    super(props)
    var localStorage = require('localStorage');
    localStorage.removeItem('current_user');
    window.location.href = '/';
  }
  render() {
      return (
        <Layout></Layout>
      )
  }

  

  
}
