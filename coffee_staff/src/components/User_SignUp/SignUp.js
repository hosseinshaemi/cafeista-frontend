import React from "react";
import './Components/Inputs/Inputs.css'
import Inputs from "./Components/Inputs/Inputs";

const SignUp = (props) => {

    return(
            <div>
                <Inputs type={props.type} placeholder={props.placeholder}/>
                <span>{props.icon}</span>
            </div>
   
    );
}

export default SignUp ; 