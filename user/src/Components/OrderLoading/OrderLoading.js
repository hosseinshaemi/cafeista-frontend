import React, { useState } from "react";
// import './OrderLoading.css' ; 
import OrderLoadingItem from "../../Components/OrderLoadingItem/OrderLoadingItem";

const OrderLoading =({orderlist , setorderlist }) => {
    // const handlecancel = (event, index) => {
    //     console.log(orderlist.length)
    //     event.stopPropagation();
    //     const neworderlist = orderlist.filter((item) => item !== index);
    //     setorderlist(neworderlist);
    //     console.log(orderlist.length)
        
    //   };
    const handlecancel = (index) => {
        const neworderlist = orderlist.filter((item, i) => i !== index);
        setorderlist(neworderlist);
    };
    return(
        <div style={{height:'250px' , boxshadow:'0px 0px 10px 0px rgba(0, 0, 0, 0.3)' , display:'flex' , justifyContent:'center' , alignItems:'center' , flexDirection:'column'}}>
           <p style={{fontFamily:'IRANSansXBold' , direction:'rtl' , color:'#37251b'}}>{orderlist.length ? "سفارشات در حال آماده سازی..." : "سفارش در حال پردازشی وجود ندارد."}</p>
            
            <div style={{height:'250px' , overflow:'auto'}}>
            {orderlist.map((order,index) => (
                
                <OrderLoadingItem
                key={index}
                id={index} 
                cafename={order.cafename}
                date={order.date}
                tracking_code={order.tracking_code}
                price={order.price}
                time={order.time}
                handlecancel={handlecancel}
                />

            ))}
            </div>
        </div>
    )
}
export default OrderLoading ; 
