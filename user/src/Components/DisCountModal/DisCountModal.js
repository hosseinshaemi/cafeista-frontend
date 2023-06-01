import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import CopyToClipboard from 'react-copy-to-clipboard';

const DisCountModal = ({ isOpen, handleCloseModal, amount }) => {
  const [discountCode, setDiscountCode] = useState("DISCOUNT_CODE");

  const handleCopyDiscountCode = () => {
    setDiscountCode("DISCOUNT_CODE");  // Update the discount code state
  };

  const body = (
    <Box sx={{
      position: 'absolute',
      textAlign: 'center',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 300,
      height: 300,
      bgcolor: 'background.paper',
      fontFamily: 'IRANSensXlight',
      borderRadius: 5,
      boxShadow: 24,
      p: 4,
    }}>
      <div style={{ fontFamily: 'IRANSensXlight' }}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          <p style={{ fontFamily: 'IRANSansXMedium', position: 'absolute', justifyContent: 'center', display: 'flex', marginLeft: '60%' }}> : مبلغ </p>
          <p style={{ fontFamily: 'IRANSansXLight', position: 'absolute', justifyContent: 'center', direction: 'rtl', display: 'flex', top: 80, marginLeft: '23%', marginRight: '25%' }}> {amount}تومان</p>
        </Typography>

        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <CopyToClipboard text={discountCode}>
            <TextField
              style={{ width: 240, top: 100, justifyContent: 'center' }}
              id="discount-code"
              value={discountCode}
              InputProps={{
                readOnly: true,
                endAdornment: (
                  <IconButton onClick={handleCopyDiscountCode} style={{ width: 60, left: 10 }}>
                    <FileCopyIcon />
                  </IconButton>
                ),
              }}
            />
          </CopyToClipboard>
        </Typography>
      </div>
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

export default DisCountModal;
