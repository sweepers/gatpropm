import React from 'react'
import { navigate } from 'gatsby-link'
import Layout from '../../components/Layout'
import firebase from 'firebase';
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
    this.state = {}
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleAttachment = e => {
    this.setState({ [e.target.name]: e.target.files[0] })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error))
  }
  onDownload(){
    const pdf = new jsPDF('p', 'pt', 'A4');
    pdf.text('Hello world',180,105);
    pdf.save("genpdf.pdf");
  }

  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <h1>Login</h1>
            
              <form
                name="login"
                method="post"
                action="/contact/thanks/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
              >
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}





                
                <input type="hidden" name="form-name" value="login" />
                <div className="field">
                  <label className="label" htmlFor={'email'}>
                  Email
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={'text'}
                      name={'email'}
                      onChange={this.handleChange}
                      placeholder={'email'}
                      id={'email'}
                      required={true}
                    />
                  </div>
                  
                </div>
                
                <div className="field">
                  <label className="label" htmlFor={'password'}>
                  Password
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={'password'}
                      name={'password'}
                      onChange={this.handleChange}
                      placeholder={'password'}
                      id={'password'}
                      required={true}
                    />
                  </div>
                  
                </div>



                <div className="field">
                  <button className="button is-link" type="submit">
                    Submit
                  </button>


                 
                </div>
              </form>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
