import React from "react";
import { Link } from "react-router-dom";
import "./card.css";

var Card = React.createClass({
	render: function(){
		var cards = [];
		for(var i = 1; i <= this.props.numCards; i += 1){
			cards.push(<CardItem idNum={i}  />);
		}
		return (
			<div>
			<div className="card-flex">{cards}</div>
			<div id={'card-' + this.props.idNum} className="card-flex-item"></div>
			<div className="card-flex-wrapper">
				<div className="card-flex-image">
					<img src={this.props.imgSrc} alt="img placeholder" />
				</div>
				<div className="card-flex-content">
					<h3>{this.props.title}</h3>
					<p>{this.props.description}</p>
				</div>
			</div>
			</div>
		);
	}
});

export default Card;