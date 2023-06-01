import React from "react";
import {GiRoundStar} from 'react-icons/gi';
import './CafeObject.css'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const CafeObject = ({ id , image , name , location , score }) => {

console.log("id"+id)
  
    return(
        <Link to={`/home/cafepage/${id}`}>
        <div style={{margin:'15px'}} >
            
            <div style={{width:'264px' , height:'230px' , backgroundColor:'white' , borderRadius:'10px', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)' }}>
                <img src={image} style={{width:'264px' , height:'150px' , borderRadius:'10px'}}/>
                <div style={{display:"flex", flexDirection:"column"}}>
                <p style={{fontFamily:'IRANSansXBold', marginTop:'5px' ,  marginLeft:'150px', fontSize:'18px' , color:'#37251B'}}>{name}</p>
                <p style={{fontFamily:'IRANSansXLight', marginTop:'-5px',  marginLeft:'150px' , color:'rgba(0,0,0,60%)' , fontSize:'12px'}}>{location}</p>
                </div>
                <div className="cafeobj-score">
                    <GiRoundStar style={{marginRight:'-3px'}} size={18} color="#fff"/>
                    <p style={{fontSize:'28' , marginLeft:'-3px'}}>{score}</p>
                </div>
            </div>
            
        </div>
         </Link>
    )
}

export default CafeObject ; 