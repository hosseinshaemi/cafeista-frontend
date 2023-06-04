import React, { useState } from "react";
import "./ItemCard.css";

const Item = ({ item }) => {
  const { name: itemName, price: itemPrice, picture: itemImage, discount: itemDiscount } = item;
  const [clicked, setClicked] = useState(false);


  const handleClick = () => {
    setClicked(!clicked);
  };

  const calculateDiscountedPrice = () => {
    return (itemPrice - (itemPrice * itemDiscount) / 100).toFixed(2);
  };

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
            style={{
              right: "12.5%",
              marginBottom: "5px",
              marginTop: "6px",
              fontFamily: "IRANSansXMedium",
            }}
          >
            {itemName}
          </p>
          <p style={{ left: "12.5%", marginTop: "-5px" }}>
            {hasDiscount ? (
              <span className="new-price">
                <del style={{ fontSize: "12px", fontFamily: "IRANSansXLight" }}>
                  {itemPrice}
                </del>{" "}
                <span
                  style={{
                    color: "rgb(235, 150, 106)",
                    fontSize: "16px",
                    fontFamily: "IRANSansXLight",
                  }}
                >
                  {calculateDiscountedPrice()}
                </span>{" "}
                <span
                  style={{ fontSize: "10px", fontFamily: "IRANSansXLight" }}
                >
                  تومان
                </span>
              </span>
            ) : (
              <>
                {itemPrice}{" "}
                <span
                  style={{ fontSize: "10px", fontFamily: "IRANSansXLight" }}
                >
                  تومان
                </span>
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Item;