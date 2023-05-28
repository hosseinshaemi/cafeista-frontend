import React, { useState } from "react";
import "./ItemCard.css";

const Item = ({ item }) => {
  const { itemName, itemPrice, itemImage,itemDiscount } = item;
  const [clicked, setClicked] = useState(false);
  // const [discount, setDiscount] = useState(10);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const calculateDiscountedPrice = () => {
    //return itemPrice - (itemPrice * discount) / 100;
    return itemPrice - (itemPrice * itemDiscount) / 100;
  };

  // const hasDiscount = discount > 0;
  const hasDiscount = itemDiscount > 0;

  return (
    <div
      className={`item-card ${clicked ? "clicked" : ""}`}
      onClick={handleClick}
    >
      <img src={itemImage} className="item-img" />
      <div className="item-info">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <p
            style={{ right: "12.5%", marginBottom: "5px", marginTop: "6px" }}
          >
            {itemName}
          </p>
          <p style={{ left: "12.5%", marginTop: "-5px" }}>
            {hasDiscount ? (
              <span className="new-price">
                <del style={{ fontSize: "12px" }}>{itemPrice}</del>{" "}
                <span style={{ color: "rgb(235, 150, 106)", fontSize: "16px" }}>
                  {calculateDiscountedPrice()}
                </span>{" "}
                <span style={{ fontSize: "10px" }}>تومان</span>
              </span>
            ) : (
              <>
                {itemPrice} <span style={{ fontSize: "10px" }}>تومان</span>
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Item;
