import React, { useState } from "react";
import "./ItemCard.css";
const Item = ({ item }) => {
  const { itemName, itemPrice, itemImage } = item;
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <div
      className={`item-card ${clicked ? "clicked" : ""}`}
      onClick={handleClick}
    >
      <img
        src={itemImage}
        className="item-img"
      />
      <div className="item-info">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <p style={{ right: "12.5%", marginBottom: "5px", marginTop: "6px" }}>
            {itemName}
          </p>
          <p style={{ left: "12.5%", marginTop: "-5px" }}>
            {itemPrice}
            <span style={{ fontSize: "10px" }}>تومان</span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Item;
