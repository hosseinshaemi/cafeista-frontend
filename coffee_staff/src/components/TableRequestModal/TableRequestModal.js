import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
const TableRequestModal = ({ isOpen, handleCloseModal, selectedItem }) => {
  const navigate = useNavigate();
  const {
    name,
    phoneNumber,
    date,
    arrivalTime,
    departureTime,
    numberOFpoeple,
  } = selectedItem ?? {};

  const handleAllocateClick = () => {
    navigate(
      `/main/table?date=${date}&start=${arrivalTime}&end=${departureTime}`
    );
  };

  const body = (
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 400,
        height: 400,
        bgcolor: "background.paper",
        borderRadius: 3,
        boxShadow: 24,
        p: 4,
      }}
    >
      <Typography id="modal-modal-title" variant="h6" component="h2">
        <div
          style={{
            position: "absolute",
            fontFamily: "IRANSansXLight",
            fontSize: 15,
            textAlign: "right",
            top: 50,
            right: 75,
          }}
        >
          نام : {name}
        </div>
        <div
          style={{
            position: "absolute",
            fontFamily: "IRANSansXLight",
            fontSize: 15,
            textAlign: "right",
            top: 100,
            right: 75,
          }}
        >
          {phoneNumber} : شماره موبایل
        </div>
        <div
          style={{
            position: "absolute",
            fontFamily: "IRANSansXLight",
            fontSize: 15,
            textAlign: "right",
            top: 150,
            right: 75,
          }}
        >
          {date} : تاریخ
        </div>
        <div
          style={{
            position: "absolute",
            fontFamily: "IRANSansXLight",
            fontSize: 15,
            textAlign: "right",
            top: 200,
            right: 75,
          }}
        >
          {arrivalTime} :ساعت ورود
        </div>
        <div
          style={{
            position: "absolute",
            fontFamily: "IRANSansXLight",
            fontSize: 15,
            textAlign: "right",
            top: 250,
            right: 75,
          }}
        >
          {departureTime} :ساعت خروج
        </div>
        <div
          style={{
            position: "absolute",
            fontFamily: "IRANSansXLight",
            fontSize: 15,
            textAlign: "right",
            top: 300,
            right: 75,
          }}
        >
          {numberOFpoeple} : تعداد نفرات
        </div>
      </Typography>
      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        <button
          style={{
            width: 130,
            height: 45,
            borderRadius: 8,
            top: 300,
            left: 50,
            fontFamily: "IRANSansXLight",
            fontSize: 15,
          }}
        >
          لغو
        </button>
        <button
          style={{
            width: 130,
            height: 45,
            borderRadius: 8,
            top: 300,
            left: 95,
            fontFamily: "IRANSansXLight",
            fontSize: 15,
          }}
          onClick={handleAllocateClick}
        >
          تخصیص
        </button>
      </Typography>
    </Box>
  );

  return (
    <Modal
      open={isOpen}
      onClose={handleCloseModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      {body}
    </Modal>
  );
};

export default TableRequestModal;
