import React, { Component } from "react";
import Btn from "../button";
import FormInput from "../formInput";
import "./footer.css";

class Footer extends Component {
        render() {
                return (
                        <div className="footer">
                                <div classname="footerCenter">
                                        <div className="footerName">
                                                <p>DDoty</p>
                                        </div>
                                        <div className="footerCopyright">
                                                <p>&copy; 2018</p>
                                        </div>
                                </div>
                                <div className="footerSearch">
                                        <div className="searchDiv">
                                                <FormInput className="FooterSearchField" type="text" name="search" value="search"> </FormInput>
                                        </div>
                                        <Btn className="footerSearchBtn">Search</Btn>
                                </div>
                        </div>
                )
        }
}

export default Footer;