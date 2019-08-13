import React from 'react'
import { navigate } from 'gatsby-link'
import Layout from '../../components/Layout'
import firebase from 'firebase';
import 'firebase/database'
export default class Index extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            messages: [],
            data : [],
            list_data: [],
            view : 'view',
        };
        var localStorage = require('localStorage');
	    
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
        
        
        
    };
    handleview(value){
       
        let app = firebase.database().ref('data_company/'+value+'/');
        app.on('value', snapshot => {
           
            this.setState({
                data: snapshot.val()
              });
        });
       
        this.setState({ view: 'view' });
        console.log('user_id',value);
     };
    renderlist(){
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
        return (
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
        );
    }
    renderview(){
        console.log(this.state.data);
        let data = this.state.data;
        if(data.iscommi == '0'){
            data.iscommi = false;
        }else{
            data.iscommi = true;
        }
        let  c1 = data.iscommi;
        let c2 = !data.iscommi;
        console.log('c2',data.iscommi);
        return (
            <div className="padding-top">
                <h3><u>ส่วนที่ 1 ข้อมูลบริษัท</u></h3>
                <table className="table table-striped">
                    <tr>
                        <td rowSpan="2"><b>ชื่อบริษัท</b></td>
                        <td colSpan="2">ภาษาไทย : { data.company_name }</td>
                        <td rowSpan="2"><img src={data.company_logo} className="logo" /></td>
                    </tr>
                    <tr>
                       
                        <td colSpan="2">ภาษาอังกฤษ : { data.company_nameen }</td>
                        
                    </tr>
                    <tr>
                        <td><b>ประเภทกิจการ</b></td>
                        <td colSpan="3">{ data.company_type }</td>
                    </tr>
                    <tr>
                        <td><b>เลขทะเบียนบริษัท</b></td>
                        <td>{ data.company_number }</td>
                        <td><b>วันที่จดทะเบียนจัดตั้ง</b></td>
                        <td>{ data.company_date }</td>
                    </tr>
                    <tr>
                        <td><b>สำนักงานตั้งอยู่ที่</b> </td>
                        <td> { data.house_number }</td>
                        <td><b>ชื่ออาคาร</b> {data.house_name}</td>
                        <td><b>ชั้น</b> { data.house_stair } </td>
                    </tr>
                    <tr>
                        <td colSpan="2"><b>ถนน</b> { data.road }</td>
                        <td colSpan="2"><b>ตำบล/แขวง</b> { data.distic }</td>
                    </tr>
                    <tr>
                        <td colSpan="2"><b>อำเภอ</b> { data.state }</td>
                        <td colSpan="2"><b>จังหวัด</b> { data.province }</td>
                    </tr>
                    <tr>
                        <td><b>ทุนจดทะเบียน</b></td>
                        <td>{ data.price_register }</td>
                        <td><b>จำนวนหุ้น</b></td>
                        <td>{ data.count_hun } หุ้น</td>
                    </tr>
                    <tr>
                        <td><b>หุ้นสามัญ</b></td>
                        <td>{ data.hun_general } หุ้น</td>
                        <td><b>หุ้นบุริมสิทธิ</b></td>
                        <td>{ data.hun_burin } หุ้น</td>
                    </tr>
                    <tr>
                        <td><b>ชำระแล้ว</b></td>
                        <td>{ data.pay_pricegen } บาท</td>
                        <td><b>ชำระแล้ว</b></td>
                        <td>{ data.pay_priceburin } บาท</td>
                    </tr>
                    <tr>
                        <td><b>กรรมการ</b> {data.committee} คน</td>
                        <td colSpan="2"><b>1.</b> {data.committee_name1}<br />ชื่อภาษาอังกฤษ : {data.committee_nameen1}</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td colSpan="2"><b>2.</b> {data.committee_name2}<br />ชื่อภาษาอังกฤษ : {data.committee_nameen2}</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td colSpan="2"><b>3.</b> {data.committee_name3}<br />ชื่อภาษาอังกฤษ : {data.committee_nameen3}</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td><b>อำนาจกรรมการ</b></td>
                        <td colSpan="3">{data.committee_na}</td>
                    </tr>
                    <tr>
                        <td><b>ชื่อกรรมการลงนามในการขอจดทะเบียน</b></td>
                        <td colSpan="3">{data.committ_register}</td>
                    </tr>
                    <tr>
                        <td colSpan="2"><b>วัตถุประสงค์</b>  </td>
                        <td colSpan="2">{ data.purpose_number } <b>ข้อ</b> { data.purpose_texxt }</td>
                    </tr>
                    <tr>
                        <td colSpan="2"><b>ข้อบังคับ</b> </td>
                        <td colSpan="2"> { data.control_number } <b>ข้อ</b> { data.control_texxt }</td>
                    </tr>
                    <tr>
                        <td><b>รายชื่อผู้ถือหุ้น</b> </td>
                        <td colSpan="2"><b>1.</b> {data.acc_name1}</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td colSpan="2"><b>2.</b> {data.acc_name2}</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td colSpan="2"><b>3.</b> {data.acc_name3}</td>
                        <td></td>
                    </tr>
                </table>
               
            </div>
        );

    }
   
    render() {
        console.log(this.state.view);
        if(this.state.view == 'list'){
            return this.renderlist();
        }
        if(this.state.view == 'view'){
            return this.renderview();
        }
        
    }
}
