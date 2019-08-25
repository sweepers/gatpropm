import React from 'react'
import { navigate } from 'gatsby-link'
import Layout from '../../components/Layout'
import DatePicker from "react-datepicker";
import FileUploader from "react-firebase-file-uploader";
import "react-datepicker/dist/react-datepicker.css";
import firebase from 'firebase';
import 'firebase/database'
//import * as jsPDF from 'jspdf'
/*import PDF01 from './form/form1-1.jpg';

import PDF02 from './form/form1-2.jpg';
import PDF03 from './form/form_certify.jpg';
import PDF04 from './form/form-4.jpg';
import EXAM02 from './form/edit_exam2.jpg';
import EXAM022 from './form/form_boj2-2.jpg';
import form_k from './form/add_people.jpg';*/
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
        
     }).bind(this);
      
      
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
  onDownload(app_id){
        
    let app_data = firebase.database().ref('petition/'+app_id);
    app_data.on('value',snapshot=>{
        console.log('data_company',snapshot.val());
        console.log('company', this.state);
        let data_form = snapshot.val();
        var form = data_form.form.split(',');
            var form_sub = [];
           
            
        const pdf = new jsPDF('p', 'pt', 'A4');
        pdf.setProperties({
            title: 'Form 1',
            subject: 'Requset',		
            author: 'Sweepers',
            
            
            });
       /* */
      
       // pdf.addImage(PDF01, 'JPEG', 0, 0, width, height);
       // pdf.setFontSize(16);
      
        
        
        pdf.text(this.state.company_name,180,105);
        pdf.text(this.state.company_number,355,122);
        let count_exam = 0;
        let list_exam = [];
        
        /*pdf.text('x',15,224);
        pdf.text('x',15,240);
        pdf.text('x',15,256);
        pdf.text('x',15,272);
        pdf.text('x',15,288);
        pdf.text('x',15,304);
        pdf.text('x',15,320);
        pdf.text('x',15,368);

        pdf.text('x',15,384);
        pdf.text('x',15,400);
        pdf.text('x',15,416);*/
        let exam2 = false;
        form.forEach(function(d,i){
            console.log('data'+d,i);
            if(d === '1'){
                pdf.text('x',15,272);
                exam2 = true;
                count_exam +=1;
                list_exam.push(1);
               // pdf.text('x',2000,322);
            }
            if(d === '2'){
                pdf.text('x',15,224);
               // pdf.text('x',2000,322);
            }
            if(d === '2' || d === '3'){
                pdf.text('x',15,304);
               // pdf.text('x',2000,322);
            }
            if(d === '3'){
                pdf.text('x',15,240);
                exam2 = true;
                count_exam +=1;
                list_exam.push(5);
            }
            
            if(d === '2'){
                form_sub.push('ทุนจดทะเบียน');
            }
            if(d === '4'){
                pdf.text('x',15,368);
                pdf.text(data_form.committee_add_count,110,368);
                pdf.text(data_form.committee_remove_count,220,368);
                pdf.text('x',15,384);
            }
            if(d === '5'){
                pdf.text('x',15,272);
                pdf.text('x',15,400);
                
            }
            if(d === '6'){
                pdf.text('x',15,288);
                exam2 = true;
                count_exam +=1;
                list_exam.push(3);
            }
            if(d === '7'){
                pdf.text('x',15,320);
            }
            
        });
       
       
        pdf.text(this.state.committ_register,370,613);
        //var logourl = this.state.company_logo;
        //var logo =convertImgToBase64(logourl);
        //pdf.addImage(logo, 'JPEG', 0, 0, 100);
        pdf.text(this.state.committ_register,45,734);
        pdf.addPage();
        //pdf.addImage(PDF02, 'JPEG', 0, 0, width, height);

        
        pdf.text(this.state.company_date,472, 172);
        pdf.text(this.state.company_number,175, 192);
        if(data_form.company_name){
            pdf.text(data_form.company_name,170, 246);
        }
        //committee_add_count
        if(this.state.committee){

        }
        pdf.text(this.state.committee,180, 268);
        let lim = 286;
        if(this.state.committee_name1){
            pdf.text(this.state.committee_name1,80, lim);
            pdf.text(this.state.committee_nameen1,400, lim);
            lim += 20;
        }
        if(this.state.committee_name1){
            pdf.text(this.state.committee_name2,80, lim);
            pdf.text(this.state.committee_nameen2,400, lim);
            lim += 20;
        }
        if(this.state.committee_name1){
      
    
            pdf.text(this.state.committee_name3,80, lim);
            pdf.text(this.state.committee_nameen3,400, lim);
            lim += 20;
        }
        if(data_form.committee_add_count > 0){
            for(var i=1; i<= data_form.committee_add_count;i++){
                if(i === 1){
                    pdf.text(data_form.add_name_1,80, lim);
                    lim += 20;
                }
                if(i === 2){
                    pdf.text(data_form.add_name_2,80, lim);
                    lim += 20;
                }
                if(i === 3){
                    pdf.text(data_form.add_name_3,80, lim);
                    lim += 20;
                }
                if(i === 4){
                    pdf.text(data_form.add_name_4,80, lim);
                    lim += 20;
                }
                //{"add_name_"+i}

            }
        }
        //เปลี่ยนชื่อ
        if(data_form.committee_add_count > 0){
            pdf.text(this.state.committ_register,70, 475);
        }

        //เปลี่ยนทุนจดทะเบียน
        if(data_form.per_share){
            pdf.text(data_form.per_share,230, 561);
        }else if(data_form.fund_price_old){
            pdf.text(data_form.fund_price_old,230, 561);

        }
        //pdf.text(this.state.price_register,225, 561);

        //fund_price_old //per_share

        //เปลี่ยนที่อยู่
        let address = this.state.house_number+' '+this.state.house_name+' '+this.state.house_stair+' '+this.state.road;
        let address2 = this.state.distic+' '+this.state.state+' '+this.state.province;
        //pdf.text(address,195, 579);
        //pdf.text(address2,70, 601);
        //location_address1_1
        if(data_form.location_move_type){
            let addres = data_form.location_address1_1+' '+data_form.location_road_1+' '+data_form.location_distict_1;
            let addres2 = data_form.location_city_1+' '+data_form.location_state_1+' '+data_form.location_postcode_1;
            pdf.text(addres,195, 579);
            pdf.text(addres2,70, 601);
        }

        //purpose_number แก้ไขวัตุประสงค์
       /* pdf.text(this.state.purpose_number,188, 663);
        pdf.text('2',520, 663);*/

        pdf.addPage();
        //pdf.addImage(PDF03, 'JPEG', 0, 0, width, height);
        pdf.text(this.state.company_name,180,79);
        pdf.text(this.state.company_number,237,100);
        
        //pdf.text('2333',395,225);
        if(data_form.meeting){
            pdf.text('x',56,225);
            //pdf.text('1',400,225);
            if(data_form.company_namcounteen){
                pdf.text(data_form.company_namcounteen,395,225);
            }
            if(data_form.meeting_date){
                pdf.text(data_form.meeting_date,107,239);
            }
            if(data_form.meetings_address){
                pdf.text(data_form.meetings_address,300,239);
            }
            if(data_form.meetings_่joincount){
                pdf.text(data_form.meetings_่joincount,505,257);
            }
            if(data_form.meetings_countm){
                pdf.text(data_form.meetings_countm,185,274);
            }
            if(data_form.president_name){
                pdf.text(data_form.president_name,300,274);
            }
            
        }
        if(data_form.meetings_call){
            pdf.text('x',56,291);

            if(data_form.meetings_callcount){
                pdf.text(data_form.meetings_callcount,420,291);
            }
            if(data_form.meeting_call_date){
                pdf.text(data_form.meeting_call_date,112,308);
            }
            //
        }
        if(data_form.book_creditor){
            pdf.text('x',56,503);
            if(data_form.book_creditor_date){
                pdf.text(data_form.book_creditor_date,112,520);
            }
        }
        
        //pdf.text(address,300,239);
        //pdf.text(address2,74,255);
        //company_namcounteen
        pdf.text(this.state.committ_register,370,763);


        

        
        


        pdf.addPage();
        //pdf.addImage(PDF04, 'jpg', 0, 0, width, height);
        pdf.text(this.state.company_name,180,99);
        pdf.text(this.state.company_number,237,121);
        let line = 145;
        let list_count = 0;
        form.forEach(function(d,i){
            console.log('data'+d,i);
           
            if(d === '1'){
                list_count += 1;
                line += 20;
                pdf.text('[แก้ไขชื่อและตราประทับ]',15,line);
                line += 20;
                pdf.text('1. ให้แก้ไขเพิ่มเติมหนังสือคณห์สินธิ ข้อ 1 เป็นดังนี้',40,line);
                if(data_form.company_name){
                    //pdf.text('ข้อ 1 ชื่อบริษัท',40, 185);
                    line += 20;
                    pdf.text('ข้อ 1 ชื่อบริษัท '+data_form.company_name+' จำกัด',40, line);
                    line += 20;
                    pdf.text('เขียนเป็นภาษาอังกฤษดังนี้ '+data_form.company_nameen,40, line);
                    
                }
               // pdf.text('x',2000,322);
            }
            //if(d == '2'){
                //line += 20;
                //form_sub.push('ทุนจดทะเบียน')
            //}
            
        });
        if(data_form.meeting_type == 'เพิ่มทุน'){
            line += 20;
            list_count += 1;
            pdf.text('มีมติพิเศษให้เพิ่มทุนของบริษัทอีกจำนวน '+data_form.resolution_price+' บาท โดยการลดจำนวนหุ้น คงเหลือทุนของบริษัท '+data_form.per_share+' บาท เป็นหุ้นสามํญ',40, line);
            line += 20;
            //
            pdf.text(data_form.resolution_count+' หุ้น/หุ้นสามัญ '+data_form.common_share+' หุ้นและหุ้นบุริมสิทธิ '+data_form.preference_share+' หุ้น',40,line);
        }
        if(data_form.meeting_type == 'ลดทุน'){
            line += 20;
            list_count += 1;
            pdf.text('มีมติพิเศษให้ลดทุนของบริษัทลง  '+data_form.resolution_price+' บาท โดยการลดจำนวนหุ้น คงเหลือทุนของบริษัท '+data_form.per_share+' บาท เป็นหุ้นสามํญ',40, line);
            line += 20;
            //
            pdf.text(data_form.resolution_count+' หุ้น/หุ้นสามัญ '+data_form.common_share+' หุ้นและหุ้นบุริมสิทธิ '+data_form.preference_share+' หุ้น',40,line);
        }

        if(data_form.fund_type == 'เพิ่มทุน'){
            line += 20;
            list_count += 1;
            
            pdf.text('ให้เพิ่มทุนโดยออกหุ้นใหม่ จำนวนหุ้นของบริษัทจึงเป็นดังนี้',40,line);
            line += 20;
            pdf.text('ข้อ 1 จำนวนหุ้นทุ้นทั้งสิ้นซึ่งได้มีผู้เข้าซื้อหุ้นหรือจัดออกให้แล้ว  '+data_form.fund_type_base+' หุ้น',40, line);
            line += 20;
            pdf.text('เป็นหุ้นสามัญชนิดเดียว/เป็นหุ้นสามัญและหุ้นบุริมสิทธิ',40,line);
            line += 20;
            pdf.text('ข้อ 2 จำนวนหุ้นสามัญและหุ้นบุรีิมสิทธิ คือ',40,line);
            line += 20;
            pdf.text('ข้อ ก. หุ้นสามัญ  '+data_form.fund_common_share+' หุ้น',40, line);
            line += 20;
            pdf.text('ข้อ ข. หุ้นบุริสิทธิ  '+data_form.fund_preference_share+' หุ้น',40, line);
            
        }
        if(data_form.fund_type == 'ลดทุน'){
            line += 20;
            list_count += 1;
            
            pdf.text('ให้ลดทุนโดยออกหุ้นใหม่ จำนวนหุ้นของบริษัทจึงเป็นดังนี้',40,line);
            line += 20;
            pdf.text('ข้อ 1 จำนวนหุ้นทุ้นทั้งสิ้นซึ่งได้มีผู้เข้าซื้อหุ้นหรือจัดออกให้แล้ว  '+data_form.fund_type_base+' หุ้น',40, line);
            line += 20;
            pdf.text('เป็นหุ้นสามัญชนิดเดียว/เป็นหุ้นสามัญและหุ้นบุริมสิทธิ',40,line);
            line += 20;
            pdf.text('ข้อ 2 จำนวนหุ้นสามัญและหุ้นบุรีิมสิทธิ คือ',40,line);
            line += 20;
            pdf.text('ข้อ ก. หุ้นสามัญ  '+data_form.fund_common_share+' หุ้น',40, line);
            line += 20;
            pdf.text('ข้อ ข. หุ้นบุริสิทธิ  '+data_form.fund_preference_share+' หุ้น',40, line);
        }
        if(data_form.committee_add_count || data_form.committee_remove_count){
            line += 20;
            list_count += 1;
            pdf.text('ให้แก้ไขเพิ่มเติมจำนวนกรรมการ เป็นดังนี้',40,line);
            if(data_form.committee_remove_count > 0){
                line += 20;
                pdf.text('กรรมการออกจากตำแหน่งจำนวน '+data_form.committee_remove_count+' คน',40,line);
                for(var i=1;i <= data_form.committee_remove_count; i++){
                    line += 20;
                    if(i === 1){
                        pdf.text('('+i+') '+data_form.committee_remove_name1,40,line);
                    }
                    if(i === 2){
                        pdf.text('('+i+') '+data_form.committee_remove_name2,40,line);
                    }
                    if(i === 3){
                        pdf.text('('+i+') '+data_form.committee_remove_name3,40,line);
                    }
                    
                }

            }
            if(data_form.committee_add_count > 0){
                line += 20;
                pdf.text('กรรมการเข้าใหม่จำนวน '+data_form.committee_add_count+' คน (ดังปรากฎรายละเอียดในแบบ ก.) คือ',40,line);

                

            }
        }
        if(data_form.location_move_type){

            line += 20;
            if(data_form.location_move_type === 'over'){
                pdf.text('ย้ายสถานประกอบการ - ข้ามจังหวัด',40,line);
                
            }else{
                pdf.text('ย้ายสถานประกอบการ - จังหวัดเดียวกัน',40,line);
            }
            line += 20;
            pdf.text('ข้อ 8 สำนักงานบริษัทมี '+data_form.location_move_count+' แห่ง คือ',40,line);
            
            for(var i=1;i<=data_form.location_move_count;i++){
                let addres = '';
                let addres2 = '';
                let phone = '';
                let email = '';
                line += 20;
                pdf.text('สำนักงาน('+i+') ',40,line);
                
                if(i === 1){
                    addres = data_form.location_address1_1+' '+data_form.location_road_1+' '+data_form.location_distict_1;
                    addres2 = data_form.location_city_1+' '+data_form.location_state_1+' '+data_form.location_postcode_1;
                    phone = 'หมายเลขโทรศัพท์ '+data_form.location_phone_1+' หมายเลขโทรศัพท์ '+ data_form.location_fax_2;
                    email = 'Email '+data_form.location_email_1;
                }
                line += 20;
                pdf.text(addres+' '+addres2,40,line);
                line += 20;
                pdf.text(phone,40,line);
                line += 20;
                pdf.text(email,40,line);
            }
            
            //pdf.text(addres,195, 579);
            //pdf.text(addres2,70, 601);
        }
        if(data_form.add_rules){
            line += 20;
            pdf.text('ข้อ 3 วัตถุประสงค์ทั้งหลายของบริษัท มี '+data_form.add_rules+' ข้อ ดังปรากฎในแบบ ว. ที่แนบ',40,line);

        }
        if(data_form.add_memo_purpose){
            line += 20;
            pdf.text('ให้ยกเลิกข้อบังคับฉบับเดิม ทั้งฉบับ และให้ใช้ข้อบังคับฉบับใหม่ จำนวน '+data_form.add_memo_purpose+' ข้อ ดังที่แนบมานี้',40,line);

        }
        
        //pdf.text(data_form.committee_add_count,110,368);
        //pdf.text(data_form.committee_remove_count,220,368);
        
        //pdf.text(list_count,240,743);
        pdf.text(this.state.committ_register,240,743);
        if(data_form.location_move_type === 'over'){
            exam2 = true;
            count_exam +=1;
            list_exam.push(2);
        }
        if(data_form.committee_add_count > 0){
            
            pdf.addPage();
            //pdf.addImage(form_k, 'jpg', 0, 0, width, height);
            pdf.text(this.state.company_name,190,88);
            pdf.text(this.state.company_number,257,103);
            //add_idcard_
            for(var i=1;i <= data_form.committee_add_count; i++){
                if(i === 1){
                    pdf.text(data_form.add_name_1,70,154);
                    pdf.text(data_form.add_age_1,340,154);
                    pdf.text(data_form.add_nationality_1,455,154);
                        
                      
                    
                    if(data_form.add_idcard_1){
                        pdf.text('x',20,176);
                        pdf.text(data_form.add_idcard_1,180,176);
                    }else{
                        pdf.text('x',20,196);
                        pdf.text(data_form.add_idtype_1,150,196);
                        pdf.text(data_form.add_idcard_1,380,196);
                    }
                    pdf.text(data_form.add_address1_1,70,212);
                    pdf.text(data_form.add_moo_1,220,212);
                    pdf.text(data_form.add_road_1,440,212);
                    pdf.text(data_form.add_distict_1,70,230);
                    pdf.text(data_form.add_city_1,260,230);
                    pdf.text(data_form.add_state_1,440,230);
                    pdf.text(data_form.add_phone_1,100,248);
                }

                if(i === 2){
                    pdf.text(data_form.add_name_2,70,294);
                    pdf.text(data_form.add_age_2,340,294);
                    pdf.text(data_form.add_nationality_2,455,294);
                    if(data_form.add_idcard_2){
                        pdf.text('x',20,316);
                        pdf.text(data_form.add_idcard_2,180,316);
                    }else{
                        pdf.text('x',20,337);
                        pdf.text(data_form.add_idtype_2,150,337);
                        pdf.text(data_form.add_idcard_2,380,337);
                    }
                        pdf.text(data_form.add_address1_2,70,353);
                        pdf.text(data_form.add_moo_2,220,353);
                        pdf.text(data_form.add_road_2,440,353);
                        pdf.text(data_form.add_distict_2,70,371);
                        pdf.text(data_form.add_city_2,260,371);
                        pdf.text(data_form.add_state_2,440,371);
                        pdf.text(data_form.add_phone_2,100,389);
                }
                if(i === 3){

                    pdf.text(data_form.add_name_3,70,430);
                    pdf.text(data_form.add_age_3,340,430);
                    pdf.text(data_form.add_nationality_3,455,430);
                    if(data_form.add_idcard_3){
                        pdf.text('x',20,452);
                        pdf.text(data_form.add_idcard_3,180,452);
                    }else{
                        pdf.text('x',20,471);
                        pdf.text(data_form.add_idtype_3,150,471);
                        pdf.text(data_form.add_idcard_3,380,471);
                    }
                    
                    pdf.text(data_form.add_address1_3,70,488);
                    pdf.text(data_form.add_moo_3,220,488);
                    pdf.text(data_form.add_road_3,440,488);
                    pdf.text(data_form.add_distict_3,70,506);
                    pdf.text(data_form.add_city_3,260,506);
                    pdf.text(data_form.add_state_3,440,506);
                    pdf.text(data_form.add_phone_3,100,524);
                }
                
                if(i === 4){

                    pdf.text(data_form.add_name_4,70,565);
                    pdf.text(data_form.add_age_4,340,565);
                    pdf.text(data_form.add_nationality_4,455,565);
                    if(data_form.add_idcard_4){
                        pdf.text('x',20,587);
                        pdf.text(data_form.add_idcard_4,180,587);
                    }else{
                        pdf.text('x',20,606);
                        pdf.text(data_form.add_idtype_4,150,606);
                        pdf.text(data_form.add_idcard_4,380,606);
                    
                    }
                    pdf.text(data_form.add_address1_4,70,624);
                    pdf.text(data_form.add_moo_4,220,624);
                    pdf.text(data_form.add_road_4,440,624);
                    pdf.text(data_form.add_distict_4,70,642);
                    pdf.text(data_form.add_city_4,260,642);
                    pdf.text(data_form.add_state_4,440,642);
                    pdf.text(data_form.add_phone_4,100,660);
                }
            
                
            }
            pdf.text(this.state.committ_register,240,733);
        }
        
        
        //location_move_type
        if(exam2 === true){
          
            
            pdf.addPage();
            //pdf.addImage(EXAM02, 'jpg', 0, 0, width, height);
            pdf.text(this.state.company_name,205,83);
            let meeting_date = '';
            let count_m = '';
            if(data_form.meeting_call_date){
                meeting_date = data_form.meeting_call_date;
                
                
            }else{
                meeting_date = data_form.meeting_date;
                

            }
            if(data_form.meetings_callcount){
                count_m = data_form.meetings_callcount;
            }else{
                count_m = data_form.company_namcounteen;
            }
            pdf.text('โดยมติพิเศษที่ประชุม '+data_form.meetings_call+' ครั้งที่ '+count_m+' เมื่อวันที่ '+meeting_date+' ให้แก้ไขเพิ่มเติมหนังสือบริคณห์สนธิของบริษัท ข้อ ',35,123);
            pdf.text(list_exam.join(',')+' เป็นดังนี้',30,143);
            let lines = 143;
            if(list_exam.indexOf(1) > -1){
                lines += 20;
                pdf.text('ข้อ 1 ชื่อบริษัท '+data_form.company_name+' จำกัด',30,lines);
                lines += 20;
                pdf.text('เขียนเป็นภาษาอังกฤษเป็น ดังนี้ '+data_form.company_nameen,30,lines);


            }
            if(list_exam.indexOf(2) > -1 ){
                //location_move_province

                lines += 20;

                pdf.text('ข้อ 2 สำนักงานของบริษัท ตั้งอยู่ ณ จังหวัด '+data_form.location_move_province,30,lines);
            }
            if(list_exam.indexOf(3) > -1 ){
                //location_move_province

                lines += 20;

                pdf.text('ข้อ 3 วัตถุประสงค์ทั้งหลายบริษัท มี '+data_form.add_memo_purpose+' ข้อ ดังปรากฎในแบบ ว. ที่แนบ',30,lines);
            }
            if(list_exam.indexOf(5) > -1 ){
                //location_move_province

                lines += 20;

                pdf.text('ข้อ 5 ทุนของบริษัทกำหนดไว้เป็นจำนวน '+data_form.fund_price_old+' บาท แบ่งออกเป็น '+data_form.fund_price_share+' หุ้น มูลค่าหุ้นละ '+data_form.fund_type_base+' บาท',30,lines);
            }

            //count_exam +=1;
            //list_exam.push(2);
            if(data_form.location_move_type === 'over'){
            }
            pdf.addPage();
            //pdf.addImage(EXAM022, 'jpg', 0, 0, width, height);
            
        }
       // pdf.addImage(PDF04, 'JPEG', 0, 0, width, height);
        let name = form.join('_');
        pdf.save("regis_"+name+".pdf");
    });
}

  render() {
    
    var avatar = '';
        if(this.state.avatarURL){
              avatar = <div className="logo_img"><img src={this.state.avatarURL} /> <a onClick={() => this.onRemove('')}  >Remove</a></div>;
        }
    console.log('list_data',this.state.list_data);
    var listdata = '';
       
      if(this.state.list_data){
          console.log('atc',this.state.list_data);
            listdata = this.state.list_data.map((data) =>
              <tr>
                  <td>{ data.form_subject }</td>
                  <td>{ data.created }</td>
                  <td>{ data.approved?'Approved':'Non Approved' }</td>
                  <td>
                    
                      <button type="button" value={data.app_id} onClick={() => this.onDownload(data.app_id)} className="btn btn-xs btn-primary">Download</button>
                  </td>
              </tr>
              );
          this.state.list_data.forEach(function(data){
              
          });
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
                    </tbody>
                </table>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
