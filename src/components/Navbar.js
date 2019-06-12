import React from "react";
import { Link } from "gatsby";
import github from "../img/github-icon.svg";
import logo from "../img/logo-prompt.png";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: ""
    };
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

  render() {
    return (
			<header class="header_area">
            
			
				<nav class="navbar navbar-expand-lg navbar-light">
					<div class="container">
					
						<a class="navbar-brand logo_h" href="index.html"><img src="img/logo.png" alt=""></a>
						<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
						 aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
						</button>
						
						<div class="collapse navbar-collapse offset" id="navbarSupportedContent">
							<ul class="nav navbar-nav menu_nav ml-auto">
								<li class="nav-item active"><a class="nav-link" href="index.html">Home</a></li>
								<li class="nav-item"><a class="nav-link" href="about-us.html">About</a></li>
								<li class="nav-item"><a class="nav-link" href="Service.html">Service</a></li>
								<li class="nav-item"><a class="nav-link" href="team.html">Team</a></li>
								<li class="nav-item submenu dropdown">
									<a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
									 aria-expanded="false">Pages</a>
									<ul class="dropdown-menu">
										<li class="nav-item"><a class="nav-link" href="elements.html">Elements</a></li>
									</ul>
								</li>
								<li class="nav-item submenu dropdown">
									<a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
									 aria-expanded="false">Blog</a>
									<ul class="dropdown-menu">
										<li class="nav-item"><a class="nav-link" href="blog.html">Blog</a></li>
										<li class="nav-item"><a class="nav-link" href="single-blog.html">Blog Details</a></li>
									</ul>
								</li>
								<li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
							</ul>
							<ul class="nav navbar-nav ml-auto">
								<div class="social-icons d-flex align-items-center">
									<a href="">
										<li><i class="fa fa-facebook"></i></li>
									</a>
									<a href="">
										<li><i class="fa fa-twitter"></i></li>
									</a>
									<a href="">
										<li><i class="fa fa-dribbble"></i></li>
									</a>
									<a href="">
										<li><i class="fa fa-behance"></i></li>
									</a>
								</div>
								<li class="nav-item"><a href="#" class="search">
									<i class="lnr lnr-magnifier" id="search"></i></a>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</div>
		</header>
    );
  }
};

export default Navbar;
