import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./navBar.css";
import Btn from "../button";
import LinkedIn from "../../images/button/linkedin.png";
import GitHub from "../../images/button/github.png";
import Logo from "../../images/navBar/logo.jpg";

class NavBar extends Component {
    render() {
            return (
	<div className="navBarDiv">
    <div className="navBarLogoDiv"><img src={Logo} alt="dd Logo" id="LogoIcon"/></div>
    <div className="navBarHomeLink"><Link to='/'>Home</Link></div>
    <div className="navBarAboutLink"><Link to='/about'>Me</Link></div>
    <div className="navBarPortfolioLink"><Link to='/portfolio'>Work</Link></div>
    <div className="navBarContactLink"><Link to='/contact'>Contact</Link></div>
    <div className="navBarLinkedInLink">
    <Link to='https://www.linkedin.com/in/danielle-doty/'><Btn className="linkedInLinkBtn"><img src={LinkedIn} alt="linkedIn" id="linkedInButton"/></Btn></Link>
    </div>
    <div className="navBarGitHubLink">
    <Link to='https://github.com/cerise612'><Btn className="gitHubLinkBtn"><img src={GitHub} alt="gitHub" id="gitHubButton"/></Btn></Link>
    </div>
   
    
    
    
    </div>
)
            }
        };
export default NavBar;