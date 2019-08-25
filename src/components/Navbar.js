import React from "react";
import { Link } from "gatsby";
//import github from "../img/github-icon.svg";
import logo from "../img/logo.png";
import firebase from 'firebase';
import 'firebase/database'
var localStorage = require('localStorage');


const Navbar = class extends React.Component {
  constructor(props) {
	super(props);
		
	  //console.log('config',config);
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
	 /*if (typeof window !== 'undefined' && window){
		setWindowLoaded(true)
	}*/
	  
	 
    this.state = {
      active: false,
	  navBarActiveClass: "",
		current_user: null
	  
	};
	
	//const current_user = localStorage.getItem('current_user');
	//console.log('current_user',current_user);
	//let current_user  = JSON.parse(localStorage.getItem('current_user'));
	//console.log('current_user',current_user);
	
  }
  fetchData() {
  }
  componentDidMount(){
    this.fetchData();
  }
  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active"
            })
          : this.setState({
              navBarActiveClass: ""
            });
      }
    );
  };
  renderElement(){
    return (
		<li class="nav-item submenu dropdown">
			<Link to="application_form/dashboard" className="nav-link">Profile</Link>
			
				<ul class="dropdown-menu">
					<li class="nav-item"><Link to="application_form/dashboard" className="nav-link">Dashboard</Link></li>
					<li class="nav-item"><Link to="application_form/edit" className="nav-link">Edit Profile</Link></li>
					<li class="nav-item"><Link to="application_form/logout" className="nav-link">Logout</Link></li>
				</ul>
		</li>
    );
  }
  renderElementlogin(){
    return (
		<li class="nav-item"><Link to="application_form/login" className="nav-link">Login</Link> <a href="">/</a> <Link to="application_form/register" className="nav-link">Register</Link> </li>
	
		
	);
  }
  render() {
	let current_user  = JSON.parse(localStorage.getItem('current_user'));
	let head_top =  '';
	if(current_user){
		head_top = this.renderElement();
	
	  }else{
		  head_top = this.renderElementlogin();
	
	  }
    return (
			<header class="header_area">
            
				<nav class="navbar navbar-expand-lg navbar-light">
					<div class="container">
					
						<Link to="/"><img src={logo} /></Link>
						<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
						 aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
						</button>
						<div class="collapse navbar-collapse offset" id="navbarSupportedContent">
							<ul class="nav navbar-nav menu_nav ml-auto">
							<li class="nav-item active"><Link to="/" className="nav-link">Home</Link></li>
							<li class="nav-item"><Link to="/about" className="nav-link">About</Link></li>
							<li class="nav-item"><Link to="/services" className="nav-link">Service</Link></li>
							<li class="nav-item"><Link to="/services" className="nav-link">Team</Link></li>
							<li class="nav-item"><Link to="/blog" className="nav-link">Blog</Link></li>
							
							<li class="nav-item"><Link to="/contact" className="nav-link">Contact</Link></li>
							
							
						
							</ul>
							<div class="nav navbar-nav ml-auto">
							<div class="social-icons d-flex align-items-center">
								
								
								{head_top}
								
								
								
								
								<a href="">
									<li><i class="fa fa-facebook"></i></li>
								</a>
								<a href="">
									<li><i class="fa fa-twitter"></i></li>
								</a>
								
							</div>
							<li class="nav-item"><a href="#" class="search">
								<i class="lnr lnr-magnifier" id="search"></i></a>
							</li>
							</div>
						</div>
						
					</div>
				</nav>
		
		</header>
    );
  }
};

export default Navbar;
