import React from 'react'
import { navigate } from 'gatsby-link'
import Layout from '../../components/Layout'
import firebase from 'firebase'

//import { DatePicker } from '@appbaseio/reactivesearch';
//import * as jsPDF from 'jspdf'

function encode(data) {
  const formData = new FormData()

  for (const key of Object.keys(data)) {
    formData.append(key, data[key])
  }

  return formData
}

export default class Application_form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      wronglogin:false,
      current_user:false,

 
   } 
   var localStorage = require('localStorage');
   localStorage.removeItem('current_user');
        window.location.href = '/';
  }

 

  
  
  render() {
   
    return (
      <Layout>
        
      </Layout>
    )
  }
}
