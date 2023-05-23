import React from "react";
// {image , title , street}
import CafeImage from '../../images/cafelotus.jpg'
import {GiRoundStar} from 'react-icons/gi';
import './CafeObject.css'
const CafeObject = () => {

    return(
        <div>
            <div style={{width:'264px' , height:'230px' , backgroundColor:'white' , borderRadius:'10px', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)' }}>
                <img src={CafeImage} style={{width:'264px' , height:'150px' , borderRadius:'10px'}}/>
                <div style={{display:"flex", flexDirection:"column"}}>
                <p style={{fontFamily:'IRANSansXBold', marginTop:'3px' , fontSize:'18px'}}>لوتوس</p>
                <p style={{fontFamily:'IRANSansXLight', marginTop:'4px'  , color:'rgba(0,0,0,60%)' , fontSize:'12px'}}>حکیم نظامی</p>
                </div>
                <div className="cafeobj-score">
                    <GiRoundStar style={{marginRight:'-3px'}} size={18} color="#fff"/>
                    <p style={{fontSize:'28' , marginLeft:'-3px'}}>4.9</p>
                </div>
            </div>
        </div>
    )
}

export default CafeObject ; 