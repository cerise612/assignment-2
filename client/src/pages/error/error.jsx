import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./error.css";
import Btn from "../../components/button";
import Home from "../../images/button/home24.png";

class Error extends Component {
  render() {
    return (
      <div className="errorPage">
      <h1 className="errorLine1">Ohh...</h1>
      <h1 className="errorLine2">Sorry, we were taking a break.</h1>
      <h1 className="errorLine3">We will get back to work now.</h1>
      <div className="errorHome">
      <Link to='/'><Btn className="errorCancelBtn"><img src={Home} alt="home" id="HomeButton"/></Btn></Link>
    </div>
    </div>
    )
  }
}
export default Error;
