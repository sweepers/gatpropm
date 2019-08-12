import React from 'react'
import { navigate } from 'gatsby-link'
import Layout from '../../components/Layout'
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";
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
    this.setState({'password':'123456'});
    this.state = {
      startDate: new Date()
    };
    this.handleChange_date = this.handleChange_date.bind(this);
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }
  handleChange_date(date) {
    this.setState({
      startDate: date
    });
  }
  handleAttachment = e => {
    this.setState({ [e.target.name]: e.target.files[0] })
  }

  handleSubmit = e => {
    e.preventDefault()
    
    const form = e.target
    console.log('form',this.state);
    //firebase.database().ref('data_company/').push(form);
    /*fetch('/', {
      method: 'POST',
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error))*/
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
              <h1>ข้อมูลสมาชิก</h1>
              <h4>ส่วนที่ 1 ข้อมูลบริษัท</h4>
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
                  <label className="label" htmlFor={'company_name'}>
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
                  
                </div>
                <div className="field">
                  <label className="label" htmlFor={'company_nameen'}>
                  
                  </label>
                 
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
                  <DatePicker
                  name={"company_date"}
                  selected={this.state.startDate}
                  onChange={this.handleChange}
                />
                  </div>
                  
                </div>

                <h4>สำนักงานที่ตั้ง</h4>
                <div className="field">
                  <label className="label" htmlFor={'house_number'}>
                  บ้านเลขที่
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={'text'}
                      name={'house_number'}
                      onChange={this.handleChange}
                    
                      id={'house_number'}
                      required={true}
                    />
                  </div>
                  
                </div>
                <div className="field">
                  <label className="label" htmlFor={'house_name'}>
                  ชื่ออาคาร
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={'text'}
                      name={'house_name'}
                      onChange={this.handleChange}
                    
                      id={'house_name'}
                      required={true}
                    />
                  </div>
                  
                </div>
                <div className="field">
                  <label className="label" htmlFor={'house_stair'}>
                  ชั้น
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={'text'}
                      name={'house_stair'}
                      onChange={this.handleChange}
                    
                      id={'house_stair'}
                      required={false}
                    />
                  </div>
                  
                </div>
                <div className="field">
                  <label className="label" htmlFor={'road'}>
                  ถนน
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={'text'}
                      name={'road'}
                      onChange={this.handleChange}
                    
                      id={'road'}
                      required={true}
                    />
                  </div>
                  
                </div>
                <div className="field">
                  <label className="label" htmlFor={'distic'}>
                  ตำบล
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={'text'}
                      name={'distic'}
                      onChange={this.handleChange}
                    
                      id={'distic'}
                      required={true}
                    />
                  </div>
                  
                </div>
                <div className="field">
                  <label className="label" htmlFor={'states'}>
                  อำเภอ
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={'text'}
                      name={'states'}
                      onChange={this.handleChange}
                    
                      id={'states'}
                      required={true}
                    />
                  </div>
                  
                </div>
                <div className="field">
                  <label className="label" htmlFor={'province'}>
                  จังหวัด
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={'text'}
                      name={'province'}
                      onChange={this.handleChange}
                    
                      id={'province'}
                      required={true}
                    />
                  </div>
                  
                </div>




                <div className="field">
                  <label className="label" htmlFor={'price_register'}>
                  ทุนจดทะเบียน
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={'text'}
                      name={'prprice_registerovince'}
                      onChange={this.handleChange}
                    
                      id={'price_register'}
                      required={true}
                    />
                  </div>
                  
                </div>
                <div className="field">
                  <label className="label" htmlFor={'count_hun'}>
                  จำนวนหุ้น
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={'text'}
                      name={'count_hun'}
                      onChange={this.handleChange}
                    
                      id={'count_hun'}
                      required={true}
                    />
                  </div>
                  
                </div>
                <div className="field">
                  <label className="label" htmlFor={'prhun_generalovince'}>
                  หุ้นสามัญ
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={'text'}
                      name={'hun_general'}
                      onChange={this.handleChange}
                    
                      id={'hun_general'}
                      required={true}
                    />
                  </div>
                  
                </div>
                <div className="field">
                  <label className="label" htmlFor={'pay_pricegen'}>
                  หุ้นสามัญ ชำระแล้ว
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={'text'}
                      name={'pay_pricegen'}
                      onChange={this.handleChange}
                    
                      id={'pay_pricegen'}
                      required={true}
                    />
                  </div>
                  
                </div>
                <div className="field">
                  <label className="label" htmlFor={'hun_burin'}>
                  หุ้นบุริมสิทธิ
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={'text'}
                      name={'hun_burin'}
                      onChange={this.handleChange}
                    
                      id={'hun_burin'}
                      required={true}
                    />
                  </div>
                  
                </div>
                <div className="field">
                  <label className="label" htmlFor={'pay_priceburin'}>
                  หุ้นบุริมสิทธิ ชำระแล้ว
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={'text'}
                      name={'pay_priceburin'}
                      onChange={this.handleChange}
                    
                      id={'pay_priceburin'}
                      required={true}
                    />
                  </div>
                  
                </div>
                <div className="field">
                  <label className="label" htmlFor={'committee'}>
                  กรรมการ (คน)
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={'text'}
                      name={'committee'}
                      onChange={this.handleChange}
                    
                      id={'committee'}
                      required={true}
                    />
                  </div>
                  
                </div>




                <div className="field">
                  <label className="label" htmlFor={'committee_name1'}>
                  ชื่อกรรมการคนที่ 1
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={'text'}
                      name={'committee_name1'}
                      onChange={this.handleChange}
                      placeholder={'ภาษาไทย'}
                      id={'committee_name1'}
                      required={true}
                    />
                  </div>
                  
                </div>
                <div className="field">
                  <label className="label" htmlFor={'committee_nameen1'}>
                  
                  </label>
                 
                  <div className="control">
                    <input
                      className="input"
                      type={'text'}
                      name={'committee_nameen1'}
                      onChange={this.handleChange}
                      id={'committee_nameen1'}
                      placeholder={'English'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={'committee_name1'}>
                  ชื่อกรรมการคนที่ 1
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={'text'}
                      name={'committee_name1'}
                      onChange={this.handleChange}
                      placeholder={'ภาษาไทย'}
                      id={'committee_name1'}
                      required={true}
                    />
                  </div>
                  
                </div>
                <div className="field">
                  <label className="label" htmlFor={'committee_nameen1'}>
                  
                  </label>
                 
                  <div className="control">
                    <input
                      className="input"
                      type={'text'}
                      name={'committee_nameen1'}
                      onChange={this.handleChange}
                      id={'committee_nameen1'}
                      placeholder={'English'}
                      required={true}
                    />
                  </div>
                </div>

                <div className="field">
                  <label className="label" htmlFor={'committee_name2'}>
                  ชื่อกรรมการคนที่ 2
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={'text'}
                      name={'committee_name2'}
                      onChange={this.handleChange}
                      placeholder={'ภาษาไทย'}
                      id={'committee_name2'}
                      required={true}
                    />
                  </div>
                  
                </div>
                <div className="field">
                  <label className="label" htmlFor={'committee_nameen2'}>
                  
                  </label>
                 
                  <div className="control">
                    <input
                      className="input"
                      type={'text'}
                      name={'committee_nameen2'}
                      onChange={this.handleChange}
                      id={'committee_nameen2'}
                      placeholder={'English'}
                      required={false}
                    />
                  </div>
                </div>

                <div className="field">
                  <label className="label" htmlFor={'committee_name3'}>
                  ชื่อกรรมการคนที่ 3
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={'text'}
                      name={'committee_name3'}
                      onChange={this.handleChange}
                      placeholder={'ภาษาไทย'}
                      id={'committee_name3'}
                      required={true}
                    />
                  </div>
                  
                </div>
                <div className="field">
                  <label className="label" htmlFor={'committee_nameen3'}>
                  
                  </label>
                 
                  <div className="control">
                    <input
                      className="input"
                      type={'text'}
                      name={'committee_nameen3'}
                      onChange={this.handleChange}
                      id={'committee_nameen3'}
                      placeholder={'English'}
                      required={false}
                    />
                  </div>
                </div>
                <u>ส่วนที่ 2 ข้อมูลผู้ใช้</u>


                <div className="field">
                  <label className="label" htmlFor={'fullname'}>
                  ชื่อ
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={'text'}
                      name={'fullname'}
                      onChange={this.handleChange}
                    
                      id={'fullname'}
                      required={true}
                    />
                  </div>
                  
                </div>
                <div className="field">
                  <label className="label" htmlFor={'position'}>
                  ตำแหน่ง
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={'text'}
                      name={'position'}
                      onChange={this.handleChange}
                    
                      id={'position'}
                      required={true}
                    />
                  </div>
                  
                </div>
                <div className="field">
                  <label className="label" htmlFor={'email'}>
                  อีเมล
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={'text'}
                      name={'email'}
                      onChange={this.handleChange}
                    
                      id={'email'}
                      required={true}
                    />
                  </div>
                  
                </div>
                <div className="field">
                  <label className="label" htmlFor={'mobile'}>
                  เบอร์โทรมือถือ
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={'text'}
                      name={'mobile'}
                      onChange={this.handleChange}
                    
                      id={'mobile'}
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
