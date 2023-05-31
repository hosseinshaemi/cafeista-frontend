import React, { useState } from "react";
import "./profile.css";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';
import DisCountModal from "../../Components/DisCountModal/DisCountModal";
import "./../../Fonts/iransansX family/IRANSansX-Bold.ttf";
import "./../../Fonts/iransansX family/IRANSansX-Light.ttf";

const style = {
  position: "absolute",
  textAlign: "center",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  height: 300,
  bgcolor: "background.paper",
  borderRadius: 5,
  boxShadow: 24,
  p: 4,
};
const ariaLabel = { "aria-label": "description" };

const Profile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const amount = 500000;

  const [isEmailEditMode, setIsEmailEditMode] = useState(false);
  const [emailAddress, setEmailAddress] = useState("example@example.com");
  const [isPhoneEditMode, setIsPhoneEditMode] = useState(false);
  const [phone, setPhone] = useState("1234567890");
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [name, setName] = useState("مهسا بدیعی");


  const handleEditName = () => {
    setIsEditMode(true);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSaveName = () => {
    setIsEditMode(false);
  };

  const handleSubmit = () => {
    // Handle password change here
  };

  const handleEmailAddressChange = (event) => {
    setEmailAddress(event.target.value);
  };

  const handleSaveEmailAddress = () => {
    setIsEmailEditMode(false);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleSavePhone = () => {
    setIsPhoneEditMode(false);
  };

  const handleOrders = (event) => {
    event.preventDefault();
    console.log("handleOrders");
  };
  const handleFavoriteCafes = (event) => {
    event.preventDefault();
    console.log("handleFavoriteCafes");
  };

  return (
    <div className="main">
      <div className="profile">
        <div>
          <p
            style={{
              position: "absolute",
              fontFamily: "IRANSansXBold",
              color: "#37251B",
              textAlign: "right",
              right: 30,
              top: "-5%",
            }}
          >
            نام و نام خانوادگی
          </p>
          <Input
            type="text"
            value={name}
            onChange={handleNameChange}
            onBlur={handleSaveName}
            inputProps={ariaLabel}
            size='medium'
            style={{
              position: "absolute",
              justifyContent: "center",
              fontFamily:"IRANSansXLight" ,
              width: 300,
              right: 30,
              top: 20,
            }}
          />
        </div>

        <div>
          <div className="in">
            <p
              style={{
                position: "absolute",
                fontFamily: "IRANSansXBold",
                color: "#37251B",
                textAlign: "right",
                right: 30,
                top: "8%",
              }}
            >
              ایمیل
            </p>
            <Input
              type="email"
              value={emailAddress}
              onChange={handleEmailAddressChange}
              onBlur={handleSaveEmailAddress}
              inputProps={ariaLabel}
              size='medium'
              style={{
                position: "absolute",
                fontFamily:"IRANSansXLight" ,
                justifyContent: "center",
                width: 300,
                right: 30,
                top: 100,
              }}
            />
          </div>
          <div className="in">
            <p
              style={{
                position: "absolute",
                fontFamily: "IRANSansXBold",
                color: "#37251B",
                textAlign: "right",
                right: 30,
                top: "20%",
              }}
            >
              شماره تلفن
            </p>
            <Input
              type="number"
              value={phone}
              onChange={handlePhoneChange}
              onBlur={handleSavePhone}
              inputProps={ariaLabel}
              size="medium"
              style={{
                position: "absolute",
                justifyContent: "center",
                fontFamily:"IRANSansXLight",
                width: 300,
                right: 30,
                top: 185,
              }}
            />
          </div>
        </div>

        <div className="MoreOptions">
          <div>
            <p className="txt" onClick={handleOpen}>ویرایش رمز عبور</p>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ fontFamily: 'IRANSansXBold', color: '#37251B' }}>
                  ویرایش رمز عبور

                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  <div>
                    <p style={{ position: 'absolute', fontFamily: 'IRANSansXLight', color: '#37251B', textAlign: 'right', right: 60, top: 60 }}>رمزعبور فعلی</p>
                    <TextField id="standard-basic" variant="standard" type={"password"} value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} sx={{ top: 15 }} />

                    <p style={{ position: 'absolute', fontFamily: 'IRANSansXLight', color: '#37251B', textAlign: 'right', right: 60, top: 130 }}>رمزعبور جدید</p>
                    <TextField id="standard-basic" variant="standard" type={"password"} value={newPassword} onChange={(e) => setNewPassword(e.target.value)} sx={{ top: 55 }} />
                  </div>
                  <button onClick={handleSubmit} className="But1">ثبت</button>
                </Typography>
              </Box>
            </Modal>
            <hr style={{ width: "90%" }} />
            <div onClick={handleOpenModal}>
              <p className="txt">تخفیفات من</p>
              <hr style={{ width: "90%" }} />
            </div>
            <div onClick={handleOrders}>
              <p className="txt">سفارشات و تراکنش‌ها</p>
              <hr style={{ width: "90%" }} />
            </div>
            <div>
              <div className="Horizantal_Line" style={{ border: "#fff" }}></div>
            </div>
          </div>
        </div>
        <button className="But">خروج از حساب</button>
        <DisCountModal isOpen={isModalOpen} handleCloseModal={handleCloseModal} amount={amount} />
      </div>

    </div>
  );
};
export default Profile;
