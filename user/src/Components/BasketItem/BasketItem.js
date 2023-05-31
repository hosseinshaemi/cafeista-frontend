import React from "react";
import Counter from "../../Components/counter/counter";
import "./BasketItem.css";

const BasketItem = ({ image, title, price }) => {
  return (
    <div style={{marginBottom:"30px" , marginTop:'40px'}} >
      <div className="basket-item">
        <img src={image} />
        <p className="basket-item-title">{title}</p>
        <p className="basket-item-price">{price}</p>
        <p className="basket-item-tooman">تومان</p>
        <div className="basket-item-counter">
          <Counter />
        </div>
        <div className="basket-item-line"></div>
      </div>
    </div>
  );
};

export default BasketItem;
