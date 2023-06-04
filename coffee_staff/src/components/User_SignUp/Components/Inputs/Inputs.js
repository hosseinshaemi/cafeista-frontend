import React from "react"
import './Inputs.css'
import '../../../../Fonts/iransansX family/IRANSansX-Light.ttf'
const Inputs = (props) => {
    return(
        
        <div>
                <div className="Horizantal_Line"></div>
                <div className="Vertical_Line"></div>
                <input name={props.name} type={props.type} placeholder={props.placeholder} onChange={props.onChange} />
        </div>
    )
}
export default Inputs ; 