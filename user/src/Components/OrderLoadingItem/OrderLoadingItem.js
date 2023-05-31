import React from "react";
import './OrderLoadingItem.css'
const OrderLoadingItem = ({cafename , date , tracking_code , price , time , id , handlecancel }) => {
   
    return(
        <div>
        <div style={{width:'190px' , height:'120px' , backgroundColor:'rgba(239,224,200,50%)'  , borderRadius:'6px' , marginBottom:'20px'}}>
            <div style={{display:'flex' , flexDirection:'column', justifyContent:'flex-end' , alignItems:'flex-end', padding: '8px'}}>
            <p style={{fontFamily:'IRANSansXBold' , fontSize:'10px', margin: 0}}>{cafename}</p>
            <p style={{fontFamily:'IRANSansXLight' , fontSize:'10px', margin: 0}}>کد پرداخت : {tracking_code}</p>
            <p style={{fontFamily:'IRANSansXLight' , fontSize:'10px', margin: 0}}>تاریخ : {date}</p>
            <p style={{fontFamily:'IRANSansXLight' , fontSize:'10px', margin: 0}}>ساعت : {time}</p>
            <p style={{fontFamily:'IRANSansXLight' , fontSize:'10px', margin: 0}}>قیمت : {price} تومان</p>
            </div>
            <div style={{display:'flex' , justifyContent:'center'}}>
            <button style={{width:'40px' , height:'20px' , fontSize:'10px'}} onClick={() => handlecancel(id)}>لغو</button>
            </div>
        </div>
        
        </div>

    )
}
export default OrderLoadingItem ; 


