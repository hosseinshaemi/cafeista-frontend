import React from "react";
import './Button.css'

import {NavLink} from 'react-router-dom'

const Button = (props) => {

    return(
        <div className="Button"> 
            <button>{props.value}</button>
        </div>
    );
}

export default Button ; 