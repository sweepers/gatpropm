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
    if(!this.state){
      this.state = {}
    }
   
    //this.setState({'password':'123456'});
   /* this.state = {
      company_date: new Date(),
      avatarURL: "",
      avatar: "",
    };*/
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
    
    
    
    
  }
  fetchData() {
    let current_user  = JSON.parse(localStorage.getItem('current_user'));
    console.log('current_user',current_user)
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
  componentDidMount(){
    this.fetchData();
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
    //window.location.reload('/');
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
                <h3><u>ส่วนที่ 1 ข้อมูลบริษัท</u></h3>
                <table className="table table-striped">
                  <tr>
                      <td rowSpan="2"><b>ชื่อบริษัท</b></td>
                      <td colSpan="2">ภาษาไทย : { this.state.company_name }</td>
                      <td rowSpan="2"><img src={ this.state.company_logo} className="logo" /></td>
                  </tr>
                  <tr>
                       
                        <td colSpan="2">ภาษาอังกฤษ : { this.state.company_nameen }</td>
                        
                    </tr>
                    <tr>
                        <td><b>ประเภทกิจการ</b></td>
                        <td colSpan="3">{ this.state.company_type }</td>
                    </tr>
                    <tr>
                        <td><b>เลขทะเบียนบริษัท</b></td>
                        <td>{ this.state.company_number }</td>
                        <td><b>วันที่จดทะเบียนจัดตั้ง</b></td>
                        <td>{ this.state.company_date }</td>
                    </tr>
                    <tr>
                        <td><b>สำนักงานตั้งอยู่ที่</b> </td>
                        <td> { this.state.house_number }</td>
                        <td><b>ชื่ออาคาร</b> {this.state.house_name}</td>
                        <td><b>ชั้น</b> { this.state.house_stair } </td>
                    </tr>
                    <tr>
                        <td colSpan="2"><b>ถนน</b> { this.state.road }</td>
                        <td colSpan="2"><b>ตำบล/แขวง</b> { this.state.distic }</td>
                    </tr>
                    <tr>
                        <td colSpan="2"><b>อำเภอ</b> { this.state.state }</td>
                        <td colSpan="2"><b>จังหวัด</b> { this.state.province }</td>
                    </tr>
                    <tr>
                        <td><b>ทุนจดทะเบียน</b></td>
                        <td>{ this.state.price_register }</td>
                        <td><b>จำนวนหุ้น</b></td>
                        <td>{ this.state.count_hun } หุ้น</td>
                    </tr>
                    <tr>
                        <td><b>หุ้นสามัญ</b></td>
                        <td>{ this.state.hun_general } หุ้น</td>
                        <td><b>หุ้นบุริมสิทธิ</b></td>
                        <td>{ this.state.hun_burin } หุ้น</td>
                    </tr>
                    <tr>
                        <td><b>ชำระแล้ว</b></td>
                        <td>{ this.state.pay_pricegen } บาท</td>
                        <td><b>ชำระแล้ว</b></td>
                        <td>{ this.state.pay_priceburin } บาท</td>
                    </tr>
                    <tr>
                        <td><b>กรรมการ</b> {this.state.committee} คน</td>
                        <td colSpan="2"><b>1.</b> {this.state.committee_name1}<br />ชื่อภาษาอังกฤษ : {this.state.committee_nameen1}</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td colSpan="2"><b>2.</b> {this.state.committee_name2}<br />ชื่อภาษาอังกฤษ : {this.state.committee_nameen2}</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td colSpan="2"><b>3.</b> {this.state.committee_name3}<br />ชื่อภาษาอังกฤษ : {this.state.committee_nameen3}</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td><b>อำนาจกรรมการ</b></td>
                        <td colSpan="3">{this.state.committee_na}</td>
                    </tr>
                    <tr>
                        <td><b>ชื่อกรรมการลงนามในการขอจดทะเบียน</b></td>
                        <td colSpan="3">{this.state.committ_register}</td>
                    </tr>
                    <tr>
                        <td colSpan="2"><b>วัตถุประสงค์</b>  </td>
                        <td colSpan="2">{ this.state.purpose_number } <b>ข้อ</b> { this.state.purpose_texxt }</td>
                    </tr>
                    <tr>
                        <td colSpan="2"><b>ข้อบังคับ</b> </td>
                        <td colSpan="2"> { this.state.control_number } <b>ข้อ</b> { this.state.control_texxt }</td>
                    </tr>
                    <tr>
                        <td><b>รายชื่อผู้ถือหุ้น</b> </td>
                        <td colSpan="2"><b>1.</b> {this.state.acc_name1}</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td colSpan="2"><b>2.</b> {this.state.acc_name2}</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td colSpan="2"><b>3.</b> {this.state.acc_name3}</td>
                        <td></td>
                    </tr>
                </table>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
