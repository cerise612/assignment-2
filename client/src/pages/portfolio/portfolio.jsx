import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./portfolio.css";
import NavBar from "../../components/navBar";
import Footer from "../../components/footer";
import Card from "../../components/card";
import Btn from "../../components/button";
import Word from "../../images/portfolio/wordGuessGameCoverImage.png";
import Attack from "../../images/portfolio/attackGameCoverImage.png";




class Portfolio extends Component {
  render() {
    return (
    
<div className="PortfolioPage">
<div className="content">
<div className="contentInside">
<div className=""><NavBar/></div>

<div className="PortfolioMessage">

<p>Here are a few recent design projects. Want to see more? <Link to='/contact'>Email me</Link>.</p>
</div>
<div className="">
{/* <Btn className="portfolioHTMLBtn" onChange={HandleFilter}>HTML5</Btn> */}
</div>
<div className="PortfolioInstructions">
{/* <p>Showing all projects. Use the filter to list them by skill or technology.</p> */}
</div>
 <div className="cardHolder">
 <Card className="wordGuessGameCard" tag="javascript, css, html5">
 <img src={Word} alt="word guess game" id="wordGuessGameImage"/>
 <a href={'https://cerise612.github.io/wordGuessGame/'} target="_blank" className="wggCardTitle"><p> Word Guess Game</p></a>
 <p className="wggCardDescription"> Hangman style game with a 90s theme.</p>
 </Card>
 <div className="card2">
 <Card className="attackGameCard" tag="javascript, css, html5">
 <img src={Attack} alt="attack game" id="attackGameImage"/>
 <a href={'https://cerise612.github.io/attackGame/'} target="_blank" className="attackCardTitle"><p> Attack Game</p></a>
 <p className="attackCardDescription"> Epic Batman v Batman gladatorial challenge.</p>
 </Card>
</div>
</div>
</div>
</div>
 <div className="portfolioFooter"><Footer/></div>
 <div className=""></div>
</div>
        )
  }
}
export default Portfolio;