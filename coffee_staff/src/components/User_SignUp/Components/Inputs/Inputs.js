import React from "react"
import './Inputs.css'
// import profile from './../../../Icons/profile4.png'
import '../../../../Fonts/iransansX family/IRANSansX-Light.ttf'
const Inputs = (props) => {
    return(
        
        <div>
                <div className="Horizantal_Line"></div>
                <div className="Vertical_Line"></div>
                <input type={props.type} placeholder={props.placeholder} onChange={props.onChange} />
        </div>
    )
}
export default Inputs ; 