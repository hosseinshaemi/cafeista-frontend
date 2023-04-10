import React from "react"
import './Inputs_SignUp.css'
import './../../Fonts/iransansX family/IRANSansX-Light.ttf'; 
const Inputs_SignUp = (props) => {
    return(
        
        <div>

                <div className="Horizantal_Line"></div>
                <div className="Vertical_Line"></div>
                <input type={props.type} placeholder={props.placeholder} />
        </div>
    )
}
export default Inputs_SignUp ; 