import React from 'react'
import { navigate } from 'gatsby-link'
import Layout from '../../components/Layout'
import DatePicker from "react-datepicker";
import FileUploader from "react-firebase-file-uploader";
import "react-datepicker/dist/react-datepicker.css";
import firebase from 'firebase';
import 'firebase/database'
//import { DatePicker } from '@appbaseio/reactivesearch';
//import * as jsPDF from 'jspdf'
var localStorage = require('localStorage');
function encode(data) {
  const formData = new FormData()

  for (const key of Object.keys(data)) {
    formData.append(key, data[key])
  }

  return formData
}

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.setState({'password':'123456'});
    this.state = {
      company_date: new Date(),
      avatarURL: "",
      avatar: "",
    };
    if (!firebase.apps.length) {
      var config = {
        apiKey: "AIzaSyAcuRid40eaVEx5TKKn5yibuDTFNDyQxAU",
        authDomain: "promp-d2fc3.firebaseapp.com",
        databaseURL: "https://promp-d2fc3.firebaseio.com",
        projectId: "promp-d2fc3",
        storageBucket: "promp-d2fc3.appspot.com",
        messagingSenderId: "660976897097",
        uid:'MzmCVg9pCnYPslxJrfN8cQs4uJ42',
        };
      firebase.initializeApp(config);
     }
    this.handleChange_date = this.handleChange_date.bind(this);
    this.handleChange = this.handleChange.bind(this);
    let current_user  = JSON.parse(localStorage.getItem('current_user'));
    var  data = {};
    if(current_user != null){
           
      let app = firebase.database().ref('data_company/'+current_user.id+'/');
     
      app.on('value', snapshot => {
          let data = snapshot.val();
         // let date = data.company_date.split('/');
         // let company_date = new Date(date[2],date[1]-1,date[0]);
          delete data.company_date;
          delete data.updated;
          
          this.setState(data);
          this.setState({
            user_id:current_user.id
        
          });
          console.log('state',this.state);
          
         

        
            
            
      }).bind(this);
      
      
  }
    
    
    
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }
  handleChange_date(date) {
    this.setState({
      company_date: date
    });
  }
  handleAttachment = e => {
    this.setState({ [e.target.name]: e.target.files[0] })
  }
  handleInit() {
    console.log('FilePond instance has initialised', this.pond);
 }
  handleUploadStart = () => this.setState({ isUploading: true, progress: 0 });
  handleProgress = progress => this.setState({ progress });
  handleUploadError = error => {
    this.setState({ isUploading: false });
    console.error(error);
  }
  handleUploadSuccess = filename => {
    //this.setState({ avatar: filename, progress: 100, isUploading: false });
    firebase
      .storage()
      .ref("company")
      .child(filename)
      .getDownloadURL()
      .then(url => this.setState({ avatarURL: url }));
    }

  handleSubmit = e => {
    e.preventDefault()
    
    const form = e.target
    console.log('form',this.state);
   // firebase.database().ref('data_company/').push(this.state);
    firebase.database().ref('data_company/'+this.state.user_id).set(this.state);
    let data = {};
    data['email'] = this.state.email;
    data['fullname'] = this.state.fullname;
    data['id'] = this.state.user_id;
    console.log('dataa',JSON.stringify(data));
    //return false;
    localStorage.setItem('current_user',JSON.stringify(data));
    window.location.reload('/');
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
    
    var avatar = '';
        if(this.state.avatarURL){
              avatar = <div className="logo_img"><img src={this.state.avatarURL} /> <a onClick={() => this.onRemove('')}  >Remove</a></div>;
        }
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
                      value={this.state.company_name}
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
                      value={this.state.company_nameen}
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
                  {avatar}
                      <FileUploader
                          accept="image/*"
                          name="avatar"
                          randomizeFilename
                          
                          onUploadStart={this.handleUploadStart}
                          onUploadError={this.handleUploadError}
                          onUploadSuccess={this.handleUploadSuccess}
                          onProgress={this.handleProgress}
                      /> 
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
                      value={this.state.company_type}
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
                      value={this.state.company_number}
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
                  selected={this.state.company_date}
                  onChange={this.handleChange_date}
                  value={this.state.company_date}
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
                      value={this.state.house_number}
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
                      value={this.state.house_name}
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
                      value={this.state.house_stair}
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
                      value={this.state.road}
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
                      value={this.state.distic}
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
                      value={this.state.states}
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
                      value={this.state.province}
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
                      value={this.state.price_register}
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
                      value={this.state.count_hun}
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
                      value={this.state.hun_general}
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
                      value={this.state.pay_pricegen}
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
                      value={this.state.hun_burin}
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
                      value={this.state.pay_priceburin}
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
                      value={this.state.committee}
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
                      value={this.state.committee_name1}
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
                      value={this.state.committee_nameen1}
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
                      value={this.state.committee_name1}
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
                      value={this.state.committee_nameen1}
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
                      value={this.state.committee_name2}
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
                      value={this.state.committee_nameen2}
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
                      value={this.state.committee_name3}
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
                      value={this.state.committee_nameen3}
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
                      value={this.state.fullname}
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
                      value={this.state.position}
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
                      value={this.state.email}
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
                      value={this.state.mobile}
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
