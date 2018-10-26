import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./about.css";
import NavBar from "../../components/navBar";
import Footer from "../../components/footer";
import Btn from "../../components/button";
import Mural from "../../images/about/about.jpg";


class About extends Component {
  render() {
    return (
<div className="aboutPage">
<div><NavBar/></div>
<div className="contentDiv">
  <p>well hello there!</p> 
  <br></br>
  <p>I’m Danielle & i’m so glad you’re here. Thank you for taking the time to visit my website.  May you find something here that inspires you.</p>  
  <p>I love to travel, see new places, meet new people and learn new things.</p>
  <img src={Mural} alt="San Antonio Mural" id="aboutPhoto" height="440px" />
  <p>I like to think that programming found me rather than my finding programming.  I studied anthropology and ancient near eastern history at Northern Arizona Univerity; which was an amazing experience but not precisely marketable so I found my self in the corporate world after college.  </p>
  <p>I learned a great deal about data analytics and business leadership and also took my first tentative steps into coding by learning VBA for Excel.  </p>
  <p>I was hooked, I decided I needed a new challenge in by business life and so I enrolled in a  program through the University of Arizona to become a Full Stack Developer. </p>
  <p>I love web development, much like the sciences and history of my college years, in web development there is always something more to learn.</p>
</div>
<div className=""></div>
<div><Footer/></div>
</div>
        )
  }
}
export default About;