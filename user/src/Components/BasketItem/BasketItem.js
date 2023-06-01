import React from "react";
import Counter from "../../Components/counter/counter";
import "./BasketItem.css";

const BasketItem = ({ image, title, price }) => {
  return (
    
      <div className="basket-item">
        <img src={image} />
        <p className="basket-item-title">{title}</p>
        <p className="basket-item-price">{price}</p>
        <p className="basket-item-tooman">تومان</p>
        <div className="basket-item-counter">
          <Counter /></div>
          
        </div>
    

  );
};

export default BasketItem;
   
        {/* <div className="basket-item-line"></div> */}
      // <hr style={{width:"90%",color:"pink"}}/>