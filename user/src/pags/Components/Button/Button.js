import React from "react";
import "./Button.css";
import "./../../../Fonts/iransansX family/IRANSansX-Medium.ttf";
const Button = (props) => {
  return (
    <div className="Button">
      <button>{props.value}</button>
    </div>
  );
};

export default Button;
