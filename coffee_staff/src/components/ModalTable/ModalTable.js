import React from "react";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import "./../../Fonts/iransansX family/IRANSansX-Bold.ttf";
import "./../../Fonts/iransansX family/IRANSansX-Light.ttf";

const ModalTable = ({ isOpen, handleCloseModal, modalContent, popups , index}) => {
  const body = (
    <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 500, height: 400, bgcolor: 'background.paper', boxShadow: 24, p: 4, borderRadius: 5, overflow: "auto" }}>
      <Typography id="modal-modal-title" variant="h6" component="h2" >
        <p style={{ fontSize: 15, fontFamily: 'IRANSansXBold', color: '#37251B', textAlign: "right", marginRight: 10 }}>
          {/* {modalContent.title} */}
          میز شماره{index}
        </p>
        <p style={{ fontSize: 10, fontFamily: 'IRANSansXBold', color: '#37251B', textAlign: "right", marginTop: 10, marginRight: 10 }}>
          :ظرفیت میز
        </p>
        <TextField id="standard-basic" variant="standard" style={{ left: 410, width: 80, top: -5 }} />

      </Typography>
      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        <div>
          {popups}
        </div>
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
}

export default ModalTable;


