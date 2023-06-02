import React, { useState } from "react";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { FixedSizeList } from "react-window";
import TableRequestModal from "../TableRequestModal/TableRequestModal";
import Typography from "@mui/material/Typography";
import "./ListHomepage.css";

export default function ListHomepage({ items }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const handleOpenModal = (index) => {
    const item = items[index];
    setSelectedItem(item);
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const renderRow = ({ index, style }) => {
    const item = items[index];

    const handleClick = () => {
      handleOpenModal(index);
    };

    const handleOpenModal = (index) => {
      const item = items[index];
      setSelectedItem(item);
      setIsOpen(true);
    };

    return (
      <ListItem style={style} key={index} component="div" disablePadding>
        <ListItemButton onClick={handleClick}>
          <ListItemText
            style={{
              textAlign: "right",
              marginRight: "20px",
              fontFamily: "IRANSansXLight",
              direction: "rtl",
            }}
            primary={`${index + 1} . ${item.name} `}
            secondary={
              <Typography
                variant="body2"
                style={{
                  textAlign: "right",
                  fontSize: "10px",
                  marginRight: "20px",
                  fontFamily: "IRANSansXLight",
                  color: "red",
                }}
              >
                تعداد نفرات: {item.numberOFpoeple}
              </Typography>
            }
          />
        </ListItemButton>
      </ListItem>
    );
  };

  return (
    <Box
      sx={{
        height: 500,
        maxWidth: 360,
        backgroundColor: "#F0E5D4",
        borderRadius: 2,
      }}
    >
      <FixedSizeList
        style={{ position: "relative" }}
        height={500}
        width={360}
        itemSize={50}
        itemCount={items.length}
        overscanCount={5}
      >
        {renderRow}
      </FixedSizeList>
      <TableRequestModal
        isOpen={isOpen}
        handleCloseModal={handleCloseModal}
        selectedItem={selectedItem}
      />
    </Box>
  );
}
