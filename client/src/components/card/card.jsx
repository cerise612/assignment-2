import React from "react";
import { Link } from "react-router-dom";
import "./card.css";

const Card = (props) => (
	<div className="card">
	<div className="cardBody" className={props.ClassName}>{props.children} 
	</div>
	<div className="cardFooter" title={props.title} tag={props.tag} description={props.description}>
	</div>
  </div>
);

export default Card;