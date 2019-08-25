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
      let updatelist = firebase.database().ref('petition/');
      updatelist.on('value',snapshot=>{
        // var lists = snapshot.val();
        var datelist = [];
         snapshot.forEach(function(data){
            
             var dat = data.val();
             //console.log('ab'+data.key,data.val());
             if(current_user.id == dat.user_id){
                 var form = dat.form.split(',');
                 var form_sub = [];
                 dat.app_id = data.key;
                 form.forEach(function(d,i){
                     if(d === '1'){
                         form_sub.push('ชื่อบริษัท')
                     }
                     if(d === '2'){
                         form_sub.push('ทุนจดทะเบียน')
                     }
                     if(d === '3'){
                         form_sub.push('เพิ่มทุน/ลดทุน')
                     }
                     if(d === '4'){
                         form_sub.push('เปลี่ยนแปลงกรรมการ')
                     }
                     if(d === '5'){
                         form_sub.push('ย้านสถานที่ประกอบการ')
                     }
                     if(d === '6'){
                         form_sub.push('เพิ่มเติมวัตถุประสงค์')
                     }
                     if(d === '7'){
                         form_sub.push('เพิ่มเติมข้อบังคับ')
                     }
                     
                 });
                 dat.form_subject = form_sub.join(',');
                 datelist.push(dat);
             }
             
             
         });
         this.setState({ list_data: datelist });
        // this.setState({ list_data: lists })
        
     });
      
      
  }
  }
  componentDidMount(){
    this.fetchData();
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }
 

  handleSubmit = e => {
    e.preventDefault()
    
   
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
    console.log('list_data',this.state.list_data);
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
                <table cellPadding="5" cellSpacing="5" className="table">
                    <tr>
                        <td>
                            ชื่อบริษัท <br />
                            {this.state.company_name}
                        </td>
                        <td>
                            เลขทะเบียน <br />
                            {this.state.company_number}

                        </td>
                        <td>วันที่จดทะเบียน<br />
                            {this.state.company_date}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            ทุนจดทะเบียน <br />
                            {this.state.price_register}
                        </td>
                        <td>
                          
                        </td>
                        <td>สำนักงานตั้งอยู่ที่<br />
                        {this.state.house_number} {this.state.house_name} {this.state.house_stair} {this.state.road} {this.state.distic} {this.state.state} {this.state.province}
                            
                        </td>
                    </tr>
                </table>

                <h4>ยื่นการแก้ไข รออนุมัติ</h4>
                <table className="table">
                    <thead>
                        <tr>
                            <th>หัวข้อขอการแก้ไข</th>
                            <th>ว้นที่ยื่น</th>
                            <th>Status</th>
                            <th>Manage</th>
                        </tr>
                    </thead>
                    <tbody>
                        { listdata }
                        {this.state.list_data.forEach(answer => {     
                        
                        })}
                    </tbody>
                </table>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
