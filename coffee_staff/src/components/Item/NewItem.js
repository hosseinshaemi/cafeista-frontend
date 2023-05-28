// import React, { useState } from "react";
// import { BsPlusCircleDotted } from "react-icons/bs";
// import Modal from "../ItemModal/ItemModal";
// import "./Item.css";
// import "../../components/Button/Button.css";

// function NewItem() {
//   const [showModal, setShowModal] = useState(false);
//   const [selectedFile, setSelectedFile] = useState(null);

//   const handleOpenModal = () => {
//     setShowModal(true);
//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
//     setSelectedFile(null);
//   };

//   const handleDeleteItem = () => {
//     const confirmed = window.confirm("آیا از حذف اطمینان دارید؟");
//     if (confirmed) {
//       // delete the item here
//       console.log("آیتم حذف شد.");
//     }
//   };

//   return (
//     <div className="newitem">
//       <BsPlusCircleDotted
//         size={40}
//         color="#846046"
//         onClick={handleOpenModal}
//       />
//       <Modal
//         isOpen={showModal}
//         closeModal={handleCloseModal}
//         handleDeleteItem={handleDeleteItem}
//       />
//     </div>
//   );
// }

// export default NewItem;
//---------------------------------------------------
import React, { useState } from "react";
import { BsPlusCircleDotted } from "react-icons/bs";
import Modal from "../ItemModal/ItemModal";
import "./Item.css";

function NewItem() {
  const [showModal, setShowModal] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [itemList, setItemList] = useState([]);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedFile(null);
    setItemName("");
    setItemPrice("");
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
      itemImage:{selectedFile},
        itemName:{itemName},
        itemPrice:{itemPrice},
       
    };

    setItemList((prevItems) => [...prevItems, newItem]);
  

    handleCloseModal();
  };

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
      
      />
    </div>
  );
}

export default NewItem;




 /* {itemList.map((item, index) => (
        <div key={index} className="item">
          <img
            src={item.image}
            alt="item image"
            style={{
              width: "75%",
              height: "auto",
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
                alignItems: "flex-start",
                marginRight: "-35px",
              }}
            >
              <p style={{ marginTop: "0px" }}>{item.name}</p>
              <p style={{ marginTop: "0px" }}>{item.price}</p>
            </div>
          </div>
          {/* <button className="editbutton">ویرایش</button> 
        </div>
      ))}*/