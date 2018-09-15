import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import "./contact.css";
import NavBar from "../../components/navBar";
import Footer from "../../components/footer";
import Btn from "../../components/button";
import FormInput from "../../components/formInput";
import ContactImage from "../../images/contact/contactImage.jpg";

class Contact extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            company: '',
            comment: ''
        };
    }
    onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        console.log(state);
        this.setState(state);
    }

    onSubmit = (e) => {
        e.preventDefault();

        const { name, email, company, comment } = this.state;

        axios.post('#', { name, email, company, comment })
            .then((result) => {
                console.log("RESULT" + JSON.stringify(result))
                this.props.history.push("../contact")
                // pushes a new entry onto the history stack
            });
    }

    render() {
        const { name, email, company, comment } = this.state;
        return (
            <div className="contactPage">
                <div className="homeNavBarDiv"><NavBar /></div>
                <div className="contactSide1">
                <div className="contactForm">
                    <FormInput className="contactNameField" label="Name:" type="text" name="name" change={this.onChange} value={name} required />
                    <FormInput className="contectEmailField" label="Email:" type="text" name="email" value={email} change={this.onChange} required />
                    <FormInput className="contactCompanyField" label="Company/Organization:" type="text" name="company" change={this.onChange} value={company} />
                    <FormInput className="contactCommentField" label="Message:" type="textarea" name="comment" value={comment} change={this.onChange} required />
                </div>
                <div className="formButton">
                    <Btn className="contactBtn">Get in touch</Btn>
                </div>
                </div>
                <div className="contactSide2">
                <div className="contactImage">
                <img src={ContactImage} alt="coffee" id="ContactPageImage"/>
                </div>
                <div className="contactMessage">
                <h2>Let's build something together!</h2>
                <p> If you like my work and have some cool project to work on, or even if you’re interested in grabbing coffee and talking shop send me message.</p>
                </div>
                </div>
                <div className="homeNavBarDiv"><Footer /></div>
            </div>
        )
    }
}
export default Contact;