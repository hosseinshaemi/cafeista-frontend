import React, { useState } from "react";
import { BsPlusCircleDotted } from "react-icons/bs";
import Modal from "../ItemModal/ItemModal";
import "./Item.css";

function NewItem() {
  const [showModal, setShowModal] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [itemDiscount, setItemDiscount] = useState("");
  const [itemList, setItemList] = useState([]);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedFile(null);
    setItemName("");
    setItemPrice("");
    setItemDiscount("");
  };

  const handleDeleteItem = () => {
    const confirmed = window.confirm("آیا از حذف اطمینان دارید؟");
    if (confirmed) {
      setItemList((prevItems) =>
        prevItems.filter((item) => item.name !== itemName)
      );
      console.log("آیتم حذف شد.");
    }
  };

  const handleSaveItem = () => {
    const newItem = {
      itemImage: { selectedFile },
      itemName: { itemName },
      itemPrice: { itemPrice },
      itemDiscount: { itemDiscount },
    };

    setItemList((prevItems) => [...prevItems, newItem]);

    handleCloseModal();
  };
  // const handleSaveItem = () => {
  //   const formData = new FormData();
  //   formData.append("itemImage", selectedFile);
  //   formData.append("itemName", itemName);
  //   formData.append("itemPrice", itemPrice);
  //   formData.append("itemDiscount", itemDiscount);
  //   fetch("   ", {
  //     method: "POST",
  //     body: formData,
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log("successfull");
  //     })
  //     .catch((error) => {

  //       console.error(" upload  error ", error);
  //     });
  //   handleCloseModal();
  // };

  return (
    <div className="newitem">
      <BsPlusCircleDotted size={40} color="#846046" onClick={handleOpenModal} />
      <Modal
        isOpen={showModal}
        closeModal={handleCloseModal}
        handleEditItem={handleSaveItem}
        itemImage={selectedFile}
        itemName={itemName}
        itemPrice={itemPrice}
        itemDiscount={itemDiscount}
      />
    </div>
  );
}

export default NewItem;
