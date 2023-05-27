import React from "react";
import Inputs from "./Inputs/Inputs";

const Inputface = (props) => {
  return (
    <div>
      <Inputs type={props.type} placeholder={props.placeholder} />
      <span>{props.icon}</span>
    </div>
  );
};

export default Inputface;
