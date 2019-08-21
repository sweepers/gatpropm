import React from 'react'
import { navigate } from 'gatsby-link'
import { Redirect } from '@reach/router'

import Layout from '../../components/Layout'
//typeof window !== 'undefined' && window
var localStorage = require('localStorage');
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
   
   //window.location.reload('/application_form/login/')
      
  }

  fetchData() {

    localStorage.removeItem('current_user').then(() => navigate('https://gatpropm.netlify.com/'))
    .catch(error => alert(error))
   
  }

  
  componentDidMount(){
    this.fetchData();
  }
  render() {
    
  
    return (
      <Layout>
        
      </Layout>
    )
  }
}
