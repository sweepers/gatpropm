import React from 'react'
import { navigate } from 'gatsby-link'
import Layout from '../../components/Layout'
import DatePicker from "react-datepicker";
import FileUploader from "react-firebase-file-uploader";
import "react-datepicker/dist/react-datepicker.css";
import firebase from 'firebase';
import 'firebase/database'
/*import {
	
	GoogleMap,Marker

  } from "react-google-maps";*/
//import Helmet from 'react-helmet'


function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isValidated: false }
    let current_user  = JSON.parse(localStorage.getItem('current_user'));
        if(current_user){
            
            this.handleview(current_user.id);
        }
            let companulist = firebase.database().ref('data_company');
        companulist.on('value',snapshot=>{
            // var lists = snapshot.val();
            
            var datelist = [];
             snapshot.forEach(function(data){
               
                 var dat = data.val();
                 dat.key = data.key;
                 
                
          
                 datelist.push(dat);
                 
             });
            
             this.setState({ list_data: datelist });
            // this.setState({ list_data: lists })
            
         });
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error))
  }

  render() {
    var listdata = '';
    console.log('company',this.state.list_data);
    if(this.state.list_data.length > 0){
         listdata = this.state.list_data.map((data) =>
            <tr>
                <td>{ data.company_name }</td>
                <td>{ data.created }</td>
                <td><button value={data.key} onClick={() => this.handleview(data.key)} className="btn btn-xxs btn-primary">View</button></td>
            </tr>
            );
        this.state.list_data.forEach(function(data){
            
        });
    }
     /* console.log(this.state.view);
      if(this.state.view == 'list'){
          return this.renderlist();
      }
      if(this.state.view == 'view'){
          return this.renderview();
      }*/
    return (
      <Layout>
       <div className="row padding-top">
                <div className="col-md-12">
                <table className="table">
                        <thead>
                            <tr>
                                <th>ชื่อบริษับ</th>
                                <th>ว้นที่ใส่ข้อมูล</th>
                                 <th></th>
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
      </Layout>
    )
  }
}
