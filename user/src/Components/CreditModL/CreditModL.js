import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const CreditModal = ({ isOpen, handleCloseModal, setCredit }) => {
  const [creditValue, setCreditValue] = useState('');

  const handleIncreaseCredit = () => {
    if (creditValue.trim() !== '') {
      setCredit((prevCredit) => prevCredit + parseInt(creditValue));
    }
    handleCloseModal();
    setCreditValue('');
  };

  const body = (
    <Box
      sx={{
        position: 'absolute',
        textAlign: 'center',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 300,
        height: 300,
        bgcolor: 'background.paper',
        fontFamily: 'IRANSansXlight',
        borderRadius: 5,
        boxShadow: 24,
        p: 4,
      }}
    >
      <div style={{ fontFamily: 'IRANSansXlight' }}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          <p style={{ fontFamily: 'IRANSansXMedium', position: 'absolute', justifyContent: 'center', display: 'flex', marginLeft: '40%' }}>
            : میزان مبلغ
          </p>
        </Typography>

        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <TextField
            style={{ width: 200, top: 80, justifyContent: 'center' }}
            id="standard-basic"
            variant="standard"
            value={creditValue}
            onChange={(event) => setCreditValue(event.target.value)}
          />

          <Button
            style={{
              width: '112px',
              height: '38px',
              fontSize: '12px',
              borderRadius: '7px',
              fontFamily: 'IRANSansXlight',
              top: 120,
              color: 'rgb(255, 255, 255)',
              backgroundColor: '#846046',
            }}
            onClick={handleIncreaseCredit}
          >
            افزایش
          </Button>
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
};

export default CreditModal;
