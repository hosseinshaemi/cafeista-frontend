import React  , {useState} from "react";
import "../Payment/Payment"
const HistoryOrderCard = ({ title , date , tracking_code , price }) => {
    
    const [showBackdrop, setShowBackdrop] = useState(false);
    const toggleBackdrop = () => {
    setShowBackdrop(!showBackdrop);
    };
    return(
        <div>
             <div style={{width:'60vw' , height:'16vh' , backgroundColor:'rgba(239,224,200,50%)'  , borderRadius:'6px' , marginBottom:'20px'}}>
                <div style={{display:'flex' , flexDirection:'column', justifyContent:'flex-end' , alignItems:'flex-end', padding: '8px'}}>
                <p style={{fontFamily:'IRANSansXBold' , fontSize:'10px', margin: 0}}>{title}</p>
                <p style={{fontFamily:'IRANSansXLight' , fontSize:'10px', margin: 0}}>کد رهگیری: {tracking_code}</p>
                <p style={{fontFamily:'IRANSansXLight' , fontSize:'10px', margin: 0}}>تاریخ : {date}</p>
                <p style={{fontFamily:'IRANSansXLight' , fontSize:'10px', margin: 0}}>قیمت : {price} تومان</p>
                </div>
                <div style={{display:'flex' , justifyContent:'center' , alignItems:'center'}}>
                <button style={{width:'50px' , height:'20px' , fontSize:'10px' , borderRadius:'7px'}}  value="ثبت نظر">ثبت نظر</button>
                
            </div>
        </div>
        </div>

    )
}
export default HistoryOrderCard ; 
