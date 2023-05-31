import React, { useState } from 'react';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { FixedSizeList } from 'react-window';
import OrderConfirmationModal from '../OrderConfirmationModal/OrderConfirmationModal';
import "./../../Fonts/iransansX family/IRANSansX-Bold.ttf";
import "./../../Fonts/iransansX family/IRANSansX-Light.ttf";
import '../ListHomepage/ListHomepage.css';

export default function List2Homepage({ items }) {

  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleOpenModal = (item) => {
    setSelectedItem(item);
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const renderRow = ({ index, style }) => {
    const item = items[index];

    const handleClick = () => {
      handleOpenModal(item);
    };

    return (
      <ListItem style={style} key={index} component="div" disablePadding>
        <ListItemButton onClick={handleClick}>
          <ListItemText style={{ textAlign: 'right', marginRight: '20px', fontFamily: "IRANSansXLight" }} primary={`${item}  . ${index + 1}`} />
        </ListItemButton>
      </ListItem>
    );
  };

  return (
    <Box sx={{ height: 500, maxWidth: 360, backgroundColor: '#F0E5D4', borderRadius: 2 }}>
      <FixedSizeList
        style={{ position: 'relative' }}
        height={500}
        width={360}
        itemSize={50}
        itemCount={items.length}
        overscanCount={5}
      >
        {renderRow}
      </FixedSizeList>
      <OrderConfirmationModal isOpen={isOpen} handleCloseModal={handleCloseModal} selectedItem={selectedItem} />
    </Box>
  );
}