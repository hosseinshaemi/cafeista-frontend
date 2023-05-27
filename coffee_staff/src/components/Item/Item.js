import React, { useState } from "react";
import "./Item.css";
import "../Button/Button.css";
import Modal from "../ItemModal/ItemModal";

const Item = ({ info }) => {
  const { itemName, itemPrice, itemImage } = info;
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState(itemName);
  const [price, setPrice] = useState(itemPrice);
  const [image, setImage] = useState(itemImage);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleEditItem = (newName, newPrice, newImage) => {
    setName(newName);
    setPrice(newPrice);
    setImage(newImage);
  };

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
          <p style={{right:"12.5%"}}>{name}</p>

          <p style={{left:"12.5%"}}>{price}<span style={{fontSize:"10px"}}>تومان</span></p>
        </div>
      </div>
      <button
        className="editbutton"
        onClick={() => {
          handleEditItem(name, price, image);
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
      />
    </div>
  );
};

export default Item;

