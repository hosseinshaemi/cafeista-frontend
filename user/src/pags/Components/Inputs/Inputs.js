import React from "react";
import "./Inputs.css";
import profile from "./../../../Icons/profile4.png";
import "./../../../Fonts/iransansX family/IRANSansX-Light.ttf";
const Inputs = (props) => {
  return (
    <div>
      <input
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
        onClick={props.onClick}
      />
      <div className="Horizantal_Line"></div>
      <div className="Vertical_Line"></div>
    </div>
  );
};
export default Inputs;
