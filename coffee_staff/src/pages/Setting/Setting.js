import React, { useState } from "react";
import { TextField } from "@mui/material";
import imagecafe from "./../../img/Lotus.jpg";
import { CiMail, CiWallet } from "react-icons/ci";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { SlLocationPin, SlLock, SlPhone } from "react-icons/sl";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Gallery from "../../components/Gallery/Gallery";
import Wallet from "../../components/Wallet/Wallet";
import DeletAccount from "../../components/DeletAccount/DeletAccount";
const Setting = () => {
  const [profileImage, setProfileImage] = useState(imagecafe);
  const [galleryIsOpen, setGalleryIsOpen] = useState(false);
  const [walletIsOpen, setWalletIsOpen] = useState(false);
  const [deletAccountRequest, setDletAccountRequest] = useState(false);
  const cafeData = [
    {
      id: "standard-basic-1",
      variant: "standard",
      defaultValue: "example@gmail.com",
      icon: CiMail,
      label: "ایمیل",
    },
    {
      id: "standard-basic-2",
      variant: "standard",
      defaultValue: "09123456789",
      icon: IoPhonePortraitOutline,
      label: "تلفن همراه",
    },
    {
      id: "standard-basic-3",
      variant: "standard",
      defaultValue: "Hakim Nezami Street",
      icon: SlLocationPin,
      label: "آدرس",
    },

    {
      id: "standard-basic-5",
      variant: "standard",
      defaultValue: "0313123456",
      icon: SlPhone,
      label: "شماره ثابت",
    },
    {
      id: "standard-basic-6",
      variant: "standard",
      defaultValue: "603712345678",
      icon: CiWallet,
      label: "کیف پول",
    },
  ];

  const handleProfileImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setProfileImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleCloseWalletModal = () => {
    setWalletIsOpen(false);
  };

  const handleWalletClick = () => {
    setWalletIsOpen(true);
  };
  const handleCloseDeletAccount = () => {
    setDletAccountRequest(false);
  };

  const handleDeletAccountClick = () => {
    setDletAccountRequest(true);
  };
  const handleCloseGalleryModal = () => {
    setGalleryIsOpen(false);
  };

  const handleGalleryClick = () => {
    setGalleryIsOpen(true);
  };

  const renderTextField = (field) => {
    const { id, variant, defaultValue, icon, label } = field;
    return (
      <div className="textfiled-style">
        <TextField
          id={id}
          variant={variant}
          defaultValue={defaultValue}
          sx={{ width: "300px" }}
        />
        {icon &&
          React.createElement(icon, {
            style: {
              fontSize: "40px",
              color: "#6D523E",
              marginLeft: "30px",
            },
          })}
      </div>
    );
  };

  const galleryBody = (
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 800,
        height: 600,
        bgcolor: "background.paper",
        boxShadow: 24,
        p: 4,
        borderRadius: 5,
        overflow: "auto",
      }}
    >
      <Gallery />
    </Box>
  );
  const walletBody = (
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 350,
        height: 350,
        bgcolor: "background.paper",
        boxShadow: 24,
        p: 4,
        borderRadius: 5,
        overflow: "auto",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Wallet />
    </Box>
  );
  const deletAccountBody = (
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 350,
        height: 250,
        bgcolor: "background.paper",
        boxShadow: 24,
        p: 4,
        borderRadius: 5,
        overflow: "auto",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <DeletAccount />
    </Box>
  );

  return (
    <div>
      <div
        style={{
          flex: "1 1",
          position: "fixed",
          height: "85vh",
          left: "30px",
          right: "185px",
          marginBottom: "30px",
          marginTop: "80px",
          backgroundColor: "rgb(240, 229, 212)",
          borderRadius: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            marginTop: "30px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
              alignItems: "flex-end",
              position: "relative",
              top: "1%",
              right: "7%",
            }}
          >
            <p
              style={{
                fontFamily: "IRANSansXBold",
                fontSize: "30px",
                marginRight: "30px",
                marginBottom: "25px",
                color: "#6D523E",
              }}
            >
              کافه لوتوس
            </p>
            <label htmlFor="profile-image">
              <img
                src={profileImage}
                alt="image"
                style={{
                  width: "120px",
                  height: "120px",
                  borderRadius: "320px",
                  cursor: "pointer",
                }}
              />
              <input
                id="profile-image"
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleProfileImageChange}
              />
            </label>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "row-reverse" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "right",
              margin: "30px 230px",
            }}
          >
            <div
              style={{
                marginRight: "-100px",
                width: "400px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: "12px",
              }}
            >
              {cafeData.map((field) => renderTextField(field))}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              marginTop: "30px",
              width: "400px",
              marginBottom: "110px",
            }}
          >
            <Card
              sx={{
                maxWidth: 350,
                height: "50px",
                backgroundColor: "rgb(240, 229, 212)",
                border:"1px solid rgb(109, 82, 62)"
              }}
              onClick={handleGalleryClick}
            >
              <CardActionArea>
                <CardContent>
                  <p>گالری تصاویر</p>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card
              sx={{ maxWidth: 350, height: "50px",backgroundColor: "rgb(240, 229, 212)",
              border:"1px solid rgb(109, 82, 62)" }}
              onClick={handleWalletClick}
            >
              <CardActionArea>
                <CardContent>
                  <p>کیف پول</p>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card
              sx={{ maxWidth: 350, height: "50px",backgroundColor: "rgb(240, 229, 212)",
              border:"1px solid rgb(109, 82, 62)" }}
              onClick={handleDeletAccountClick}
            >
              <CardActionArea>
                <CardContent>
                  <p>حذف حساب</p>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        </div>
      </div>
      <Modal open={galleryIsOpen} onClose={handleCloseGalleryModal}>
        {galleryBody}
      </Modal>
      <Modal open={walletIsOpen} onClose={handleCloseWalletModal}>
        {walletBody}
      </Modal>
      <Modal open={deletAccountRequest} onClose={handleCloseDeletAccount}>
        {deletAccountBody}
      </Modal>
    </div>
  );
};

export default Setting;

{
  /*    <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "right",
                margin: "30px 60px",
              }}
            >
              <div
                style={{
                  width: "400px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  gap: "20px",
                }}
              >
                <div className="textfiled-style">
                  <TextField
                    id="standard-basic"
                    variant="standard"
                    defaultValue="example@gmail.com"
                    sx={{ width: "300px" }}
                  />
                  <CiMail
                    style={{
                      fontSize: "40px",
                      color: "#6D523E",
                      marginLeft: "30px",
                    }}
                  />
                </div>

                <div className="textfiled-style">
                  <TextField
                    id="standard-basic"
                    variant="standard"
                    defaultValue="09123456789"
                    sx={{ width: "300px" }}
                  />
                  <IoPhonePortraitOutline
                    style={{
                      fontSize: "40px",
                      color: "#6D523E",
                      marginLeft: "30px",
                    }}
                  />
                </div>

                <div className="textfiled-style">
                  <TextField
                    id="standard-basic"
                    variant="standard"
                    defaultValue="Hakim Nezami Street"
                    sx={{ width: "300px" }}
                  />
                  <SlLocationPin
                    style={{
                      fontSize: "40px",
                      color: "#6D523E",
                      marginLeft: "30px",
                    }}
                  />
                </div>

                <div className="textfiled-style">
                  <TextField
                    id="standard-basic"
                    type="password"
                    variant="standard"
                    defaultValue="123456789"
                    sx={{ width: "300px" }}
                  />
                  <SlLock
                    style={{
                      fontSize: "40px",
                      color: "#6D523E",
                      marginLeft: "30px",
                    }}
                  />
                </div>

                <div className="textfiled-style">
                  <TextField
                    id="standard-basic"
                    variant="standard"
                    defaultValue="0313123456"
                    sx={{ width: "300px" }}
                  />
                  <SlPhone
                    style={{
                      fontSize: "40px",
                      color: "#6D523E",
                      marginLeft: "30px",
                    }}
                  />
                </div>

                <div className="textfiled-style">
                  <TextField
                    id="standard-basic"
                    variant="standard"
                    defaultValue="603712345678"
                    sx={{ width: "300px" }}
                  />
                  <CiWallet
                    style={{
                      fontSize: "40px",
                      color: "#6D523E",
                      marginLeft: "30px",
                    }}
                  />
                </div>
              </div>
            </div> */
}
