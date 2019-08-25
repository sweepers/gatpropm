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
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
