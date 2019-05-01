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
      <header>
			<nav class="nav-top">
			
				<div class="logo">
					<h1>
						<Link to="/"><img src={logo} style="width:82px;" /></Link>
					</h1>
				</div>
				<ul class="nav_links list-unstyled">
					<li class="nav-link-list">
						<Link to="/">
							<span class="fa fa-home"></span>
							<p>Home</p>
						</Link>
					</li>
					<li>
						<Link to="/about">
							<span class="fa fa-question"></span>
							<p>About</p>
						</Link>
					</li>
					<li>
						<Link to="#services">
							<span class="fa fa-cog"></span>
							<p>Services</p>
						</Link>
					</li>
					<li>
						<Link to="/blog">
							<span class="fa fa-clipboard"></span>
							<p>Blog</p>
						</Link>
					</li>
					<li>
						<Link to="/application_form/register">
							<span class="fa fa-users"></span>
							<p>register</p>
						</Link>
					</li>
					
					<li>
						<Link to="/contact">
							<span class="fa fa-map-marker"></span>
							<p>Contact</p>
						</Link>
					</li>
				</ul>
			</nav>
		</header>
    );
  }
};

export default Navbar;
