import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import Img from "../../img/coffee.jpg";
import "./CoffeeResult.css";

const CoffeeResult = (props) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  const heartIcon = isLiked ? (
    <AiFillHeart size={25} color="#eb966a" />
  ) : (
    <AiOutlineHeart size={25} color="#eb966a" />
  );

  return (
    <div>
      <div className="coffee-info">
        <img
          src={Img}
          style={{ width: "50px", height: "50px", borderRadius: "30px" }}
        />
        <div className="info-style">
          <h3 style={{ marginTop: "0px", fontSize: "20px" }}>{props.name}</h3>
          <p1 style={{ marginTop: "-18px", fontSize: "15px" }}>
            {props.address}
          </p1>
        </div>
        <div
          style={{ position: "relative", marginRight:"auto" }}
          onClick={handleLikeClick}
        >
          {heartIcon}
        </div>
      </div>
      <div className="horizantal-line" />
    </div>
  );
};

export default CoffeeResult;
