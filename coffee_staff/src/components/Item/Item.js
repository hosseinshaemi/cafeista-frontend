import React, { useState } from "react";
import "./Item.css";
import "../Button/Button.css";
import Modal from "../ItemModal/ItemModal";

const Item = ({ info }) => {
  const { itemName, itemPrice, itemImage,itemDiscount } = info;
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState(itemName);
  const [price, setPrice] = useState(itemPrice);
  const [image, setImage] = useState(itemImage);
  const [discount,setDiscount]=useState(itemDiscount);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleEditItem = (newName, newPrice, newImage, newDiscount) => {
    setName(newName);
    setPrice(newPrice);
    setImage(newImage);
    setDiscount(newDiscount);
  };
  const calculateDiscountedPrice = () => {
    return price - (price * discount) / 100;
  };
  const hasDiscount = itemDiscount > 0;
  return (
    <div className="item">
      <img
        src={image}
        style={{
          width: "75%",
          height: "112.5px",
          borderRadius: "10px",
          borderColor: "black",
          marginTop: "15px",
        }}
        
      />
      <div
        style={{
          display: "flex",
          flexDirection: "row-reverse",
          alignItems: "flex-start",
          marginTop: "5px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <p style={{right:"12.5%" , fontFamily:"IRANSansXMedium"}}>{name}</p>

          <p style={{ left: "12.5%", marginTop: "-5px" }}>
            {hasDiscount ? (
              <span className="new-price">
                <del style={{ fontSize: "12px", fontFamily:"IRANSansXLight" }}>{price}</del>{" "}
                <span style={{ color: "rgb(235, 150, 106)", fontSize: "16px",fontFamily:"IRANSansXLight" }}>
                  {calculateDiscountedPrice()}
                </span>{" "}
                <span style={{ fontSize: "10px",fontFamily:"IRANSansXLight" }}>تومان</span>
              </span>
            ) : (
              <>
                {itemPrice} <span style={{ fontSize: "10px",fontFamily:"IRANSansXLight" }}>تومان</span>
              </>
            )}
          </p>
        </div>
      </div>
      <button
        style={{fontFamily:"IRANSansXLight"}}
        className="editbutton"
        onClick={() => {
          handleEditItem(name, price, image, discount);
          handleOpenModal();
        }}
      >
        ویرایش
      </button>
      <Modal
        isOpen={showModal}
        closeModal={handleCloseModal}
        handleEditItem={handleEditItem}
        itemName={name}
        itemPrice={price}
        itemImage={image}
        itemDiscount={discount}
      />
    </div>
  );
};

export default Item;

