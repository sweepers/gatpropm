import React from "react";
import { Link } from "gatsby";
import github from "../img/github-icon.svg";
import logo from "../img/logo-prompt.png";

const Nav = class extends React.Component {
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
            <!-- Created By Bogdan Nagorniy -->
            <div class="logo">
                <h1>
                    <a href="index.html">Corpo</a>
                </h1>
            </div>
            <ul class="nav_links list-unstyled">
                <li class="nav-link-list">
                    <a href="index.html">
                        <span class="fa fa-home"></span>
                        <p>Home</p>
                    </a>
                </li>
                <li>
                    <a href="#about">
                        <span class="fa fa-question"></span>
                        <p>About</p>
                    </a>
                </li>
                <li>
                    <a href="#services">
                        <span class="fa fa-cog"></span>
                        <p>Services</p>
                    </a>
                </li>
                <li>
                    <a href="#blog">
                        <span class="fa fa-clipboard"></span>
                        <p>Blog</p>
                    </a>
                </li>
                <li>
                    <a href="#team">
                        <span class="fa fa-users"></span>
                        <p>Team</p>
                    </a>
                </li>
                <li>
                    <a href="#testi">
                        <span class="fa fa-coffee"></span>
                        <p>Clients</p>
                    </a>
                </li>
                <li>
                    <a href="#contact">
                        <span class="fa fa-map-marker"></span>
                        <p>Contact</p>
                    </a>
                </li>
            </ul>
        </nav>
    </header>
    );
  }
};

export default Nav;
