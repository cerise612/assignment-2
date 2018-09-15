import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./portfolio.css";
import NavBar from "../../components/navBar";
import Footer from "../../components/footer";
import Paragraph from "../../components/paragraph";
import Btn from "../../components/button";
import Star from "../../images/home/star.jpg";


class Portfolio extends Component {
  render() {
    return (
<div className="PortfolioPage">
<div className="PortfolioMessage">
<p>Here are a few recent design projects. Want to see more? Email me.</p>
</div>
<div className="">
{/* <Btn className="portfolioHTMLBtn" onChange={HandleFilter}>HTML5</Btn> */}
</div>
<div className="PortfolioInstructions">
<p>Showing all projects. Use the filter to list them by skill or technology.</p>
</div>
 <div className=""></div>
</div>
        )
  }
}
export default Portfolio;