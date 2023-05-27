import React, { useState } from "react";
import ReactModal from "react-modal";
import { Input, Button } from "@mui/material";
import "../Item/Item.css";
import { BsPlusCircleDotted } from "react-icons/bs";
const Modal = ({
  isOpen,
  closeModal,
  handleEditItem,
  itemName,
  itemPrice,
  itemImage,
}) => {
  const [selectedFile, setSelectedFile] = useState(itemImage);
  const [name, setName] = useState(itemName);
  const [price, setPrice] = useState(itemPrice);
  const [image, setImage] = useState(itemImage);

  const [tempName, setTempName] = useState(itemName);
  const [tempPrice, setTempPrice] = useState(itemPrice);
  const [tempImage, setTempImage] = useState(itemImage);

  
    const handleFileChange = (event) => {
      const file = event.target.files[0];
      setSelectedFile( URL.createObjectURL(file));
      setTempImage( URL.createObjectURL(file));
    };
    


  const handleUpload = () => {
    console.log(selectedFile);
  };


  const handleDeleteItem = () => {
    const confirmed = window.confirm("آیا از حذف اطمینان دارید؟");
    if (confirmed) {
      console.log("آیتم حذف شد.");
      closeModal();
    }
  };
  
  const handleSave = () => {
    setName(tempName);
    setPrice(tempPrice);
    setImage(tempImage);
    handleEditItem(tempName, tempPrice, tempImage); 
    closeModal();
  };
  
  const handleCancel = () => {
    setTempName(name);
    setTempPrice(price);
    setTempImage(image);
    closeModal();
  };

  return (
    <ReactModal
      isOpen={isOpen}
      contentLabel="Minimal Modal Example"
      className="Modal"
      overlayClassName="Overlay"
      onRequestClose={handleCancel}
    >
      <div className="modalform">
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            className="newitem"
            style={{ height: "100px", width: "100px", right: "0" }}
          >
            {selectedFile ? (
              <img
              src={selectedFile ? selectedFile : tempImage}
                alt="uploaded image"
                style={{
                  height: "100%",
                  width: "100%",
                  borderRadius: "10px",
                }}
              />
            ) : (
              <div>
                <BsPlusCircleDotted
                  size={20}
                  color="#846046"
                  onClick={handleUpload}
                />
                <p style={{ color: "#846046", fontSize: "10px" , fontFamily:"IRANSansXLight"}}>
                  افزودن تصویر
                </p>
              </div>
            )}
            <form>
              <input id="file-upload" type="file" onChange={handleFileChange} />
            </form>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              margin: "20px 15px 5px 0",
            }}
          >
            <p style={{fontFamily:"IRANSansXBold"}}>نام آیتم:</p>
            <Input
              style={{ marginRight: "7px" , fontFamily:"IRANSansXLight"}}
              placeholder="نام آیتم را وارد کنید"
              value={tempName}
              onChange={(e) => setTempName(e.target.value)}
            />
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              margin: "20px 15px 5px 0",
            }}
          >
            <p style={{fontFamily:"IRANSansXBold"}}>قیمت: </p>
            <Input
              style={{ marginRight: "16px" , fontFamily:"IRANSansXLight"}}
              placeholder="قیمت را وارد کنید"
              value={tempPrice}
              onChange={(e) => setTempPrice(e.target.value)}
            />
          </div>
        </div>
        <div className="buttons">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              position: "absolute",
              bottom: "25px",
            }}
          >
            <Button
              style={{
                width: "155px",
                margin: "0 12px",
                borderRadius: "60px",
                backgroundColor: "#846046",
                fontFamily:"IRANSansXLight" ,
              }}
              variant="contained"
              onClick={handleSave}
            >
              ثبت
            </Button>
            <Button
              style={{
                width: "155px",
                margin: "0 12px",
                borderRadius: "60px",
                color: "#846046",
                borderColor: "#846046",
                fontFamily:"IRANSansXLight",
               
              }}
              variant="outlined"
              onClick={()=>{handleCancel();
              handleDeleteItem()}}
            >
              حذف آیتم
            </Button>
          </div>
        </div>
      </div>
    </ReactModal>
  );
};

export default Modal;
