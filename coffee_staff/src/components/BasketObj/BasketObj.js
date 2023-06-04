import React from "react";
const BasketObj = ({ image, title, count }) => {

    return (
        <div style={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems:"center" }}>
            <div style={{ width: "100%", display: "flex", flexDirection: "row-reverse", alignItems: 'center', justifyContent: "space-around" }}>
                <img
                    src={image}
                    style={{ width: '50px', height: '50px', borderRadius: '40px', }} />
                <p style={{ fontFamily: 'IRANSansXLight' }}>{title}</p>
                    <p style={{backgroundColor:"rgba(240, 229, 212,50%)",padding:"5px 10px", borderRadius:"30px", display: 'flex', alignItems: 'center', fontFamily: 'IRANSansXLight', fontSize: '15px' }}>  عدد {count}</p>
            </div>
            <hr style={{ margin: '5px 0 15px 0' , width: '90%' }} />
        </div>
    )
}
export default BasketObj; 