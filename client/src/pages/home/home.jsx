import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./home.css";
import NavBar from "../../components/navBar";
import Footer from "../../components/footer";
import Paragraph from "../../components/paragraph";
import Btn from "../../components/button";
import PortfolioImage from "../../images/home/portfolio.jpg";
import ContactImage from "../../images/home/contact.jpg";
import Star from "../../images/home/star.jpg";
import Heart from "../../images/home/heart.jpg";
import Eye from "../../images/home/eye.jpg";


class Home extends Component {
  render() {
    return (
      <div className="HomePage">
        <div className="homeNavBarDiv"><NavBar /></div>
        <div className="homeBannerDiv">
        <div className="homeTitleDiv">
        <div className="homeName">
        <h1>I'm Danielle Doty, a Full Stack Developer.</h1>
        </div>
        <div className="bannerSummary">
        <p>I've always been drawn to the overlap between design and development. My skills are broad: from ux to design,</p>
        <p> front end to back end development. I enjoy each aspect, and love building sites & mobile apps from start to finish,</p>
        <p>for clients all over the world.</p>
        </div>
        </div>
        <div className="homeSkillsDiv">
        <div className="skillsTitle">
        <h2>What I Do</h2>
        </div>
        <div className="frontEnd">
            <b>Front End</b>
            <ul>
              <li>React</li>
              <li>HTMLS5</li>
              <li>CSS3</li>
              <li>Javascript</li>
              <li>JQuery</li>
              <li>bootstrap</li>
              <li>Handlebars</li>
              <li>Java</li>
            </ul>
          </div>
          <div className="backEnd">
            <b>Back End</b>
            <ul>
             <li>MySql</li>
              <li>MongoDB</li>
              <li>Firebase</li>
              <li>Express.JS</li>
              <li>Node</li>
            </ul>
          </div>
        </div>  
        </div>
        <div className="homeCenterDiv">
        <div className="starDiv">
        <div className="starImage">
        <img src={Star} alt="star" id="starIcon"/>
        </div>
        <div className="starList">
        <h4>Discover</h4>
        <ul>
        <li>
                Research
          </li>
          <li>
                Strategy
          </li>
          <li>
                Ideation
          </li>
        </ul>
        </div>
        </div>
        <div className="heartDiv">
        <div className="heartImage">
        <img src={Heart} alt="heart" id="heartIcon"/>
        </div>
        <div className="heartList">
        <h4>Design</h4>
        <ul>
          <li>
                Branding
          </li>
          <li>
                UX
          </li>
          <li>
                Visual Design
          </li>
          <li>
                Motion
          </li>
          <li>
                Illustration
          </li>
        </ul>
        </div>
        </div>
        <div className="eyeDiv">
        <div className="eyeImage">
        <img src={Eye} alt="eye" id="eyeIcon"/>
        </div>
        <div className="eyeList">
        <h4>Deploy</h4>
        <ul>
            <li>
                Prototyping
          </li>
          <li>
                Animatics
          </li>
          <li>
                Development
          </li>
        </ul>
        </div>
        </div>
        </div>
        {/* <div className="homePortfolioDiv">
        <div className="homePortfolioImage">
        <img src={PortfolioImage} alt="landscape" id="portfolioPhoto"/>
        </div>
        <div className="homePortfolioLink">
            <Paragraph>
            <h1>Portfolio</h1>
            <p>Click below to see some projects I've been working on lately. </p>
            <Link to='/portfolio'><Btn className="portfolioLinkBtn">Check out my latest projects</Btn></Link>
            </Paragraph>
        </div>
        </div> */}
        {/* <div className="homeContactDiv">
        <div className="homeContactLink">
            <Paragraph>
            <h1>Get In Touch</h1>
            <p>I'm available for remote work - if you would like to build something together <i class="fas fa-hand-point-down"></i></p>
            <Link to='/contact'><Btn className="contactLinkBtn">Get in touch</Btn></Link>
            </Paragraph>
        </div>
        <div className="homeContactImage">
        <img src={ContactImage} alt="landscape" id="contactPhoto"/>
        </div>
        </div> */}
      {/* <div className="homeNavBarDiv"><Footer /></div> */}
    </div>
    )
  }
}
export default Home;