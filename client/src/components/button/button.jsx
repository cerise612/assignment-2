import React from "react";
import "./button.css";

const Btn = (props) => (
	<button className={props.className} onChange={props.change}>{props.children}</button>
);
export default Btn;