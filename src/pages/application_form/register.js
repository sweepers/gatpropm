import React from 'react'
import { navigate } from 'gatsby-link'
import Layout from '../../components/Layout'
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
    
  }

  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <h1>File Upload</h1>
              <form
                name="file-upload"
                method="post"
                action="/contact/thanks/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
              >
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}





                
                <input type="hidden" name="form-name" value="register" />
                <div className="field">
                  <label className="label" htmlFor={'name'}>
                  ชื่อบริษัท
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={'text'}
                      name={'company_name'}
                      onChange={this.handleChange}
                      placeholder={'ภาษาไทย'}
                      id={'company_name'}
                      required={true}
                    />
                  </div>
                  <div className="control">
                    <input
                      className="input"
                      type={'text'}
                      name={'company_nameen'}
                      onChange={this.handleChange}
                      id={'company_nameen'}
                      placeholder={'English'}
                      required={true}
                    />
                  </div>
                </div>
                <div hidden>
                  <label>
                    Don’t fill this out:{' '}
                    <input name="bot-field" onChange={this.handleChange} />
                  </label>
                </div>
                <div className="field">
                  <label className="label" htmlFor={'name'}>
                    รูปภาพ
                  </label>
                  <div className="control">
                    
                  </div>
                </div>
                <div className="field">
                  <div className="file">
                    <label className="file-label">
                      <input
                        className="file-input"
                        type="file"
                        name="attachment"
                        onChange={this.handleAttachment}
                      />
                      <span className="file-cta">
                        <span className="file-label">Choose a file…</span>
                      </span>
                    </label>
                  </div>
                </div>

                <div className="field">
                  <label className="label" htmlFor={'company_type'}>
                  ประเภทกิจการ
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={'text'}
                      name={'company_type'}
                      onChange={this.handleChange}
                     
                      id={'company_type'}
                      required={true}
                    />
                  </div>
                  
                </div>
                <div className="field">
                  <label className="label" htmlFor={'company_number'}>
                  เลขทะเบียนบริษัท
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={'text'}
                      name={'company_number'}
                      onChange={this.handleChange}
                    
                      id={'company_number'}
                      required={true}
                    />
                  </div>
                  
                </div>

                <div className="field">
                  <label className="label" htmlFor={'company_date'}>
                  วันที่จดทะเบียน
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={'text'}
                      name={'company_date'}
                      onChange={this.handleChange}
                    
                      id={'company_date'}
                      required={true}
                    />
                  </div>
                  
                </div>





                <div className="field">
                  <button className="button is-link" type="submit">
                    Send
                  </button>


                  <button type="button"  onClick={() => this.onDownload()} className="btn btn-xs btn-primary">Download</button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
