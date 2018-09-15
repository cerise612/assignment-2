import React from "react";
import "./paragraph.css";


const Paragraph = (props) => (
<div className={props.className}>{props.children}</div>
);
export default Paragraph;