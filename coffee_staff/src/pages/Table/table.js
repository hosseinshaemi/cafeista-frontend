import React, { useState } from "react";
import "./table.css";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import DatePicker from "react-multi-date-picker";
import { BsPlusCircleDotted } from "react-icons/bs";
import { MdOutlineTableBar } from "react-icons/md";
import "react-multi-date-picker/styles/colors/red.css";
import "react-multi-date-picker/styles/backgrounds/bg-brown.css";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import "./../../Fonts/iransansX family/IRANSansX-Bold.ttf";
import "./../../Fonts/iransansX family/IRANSansX-Light.ttf";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";

function IconWithCounter({ icon, index, handleIconClick }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        flexBasis: "20%",
      }}
    >
      <div onClick={handleIconClick} style={{ cursor: "pointer" }}>
        {icon}
      </div>
      <div
        style={{
          marginTop: "75px",
          marginLeft: "-55px",
          fontSize: "15px",
          color: "#999",
        }}
      >
        {index + 1}
      </div>
    </div>
  );
}

const Table = () => {
  const [buttonColor, setButtonColor] = useState("#1FB62E");
  const [buttonColor1, setButtonColor1] = useState("#1FB62E");
  const [icons, setIcons] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});

  const handleIconClick1 = () => {
    setIcons([
      ...icons,
      <MdOutlineTableBar
        key={Date.now()}
        style={{
          marginLeft: "35px",
          marginRight: "30px",
          marginTop: "30px",
          fontSize: "40px",
        }}
      />,
    ]);
  };

  const handleIconClick = (content) => {
    setModalContent(content);
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const body = (
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 500,
        height: 400,
        bgcolor: "background.paper",
        boxShadow: 24,
        p: 4,
        borderRadius: 5,
        overflow: "auto",
      }}
    >
      <Typography id="modal-modal-title" variant="h6" component="h2">
        <p
          style={{
            fontSize: 15,
            fontFamily: "IRANSansXBold",
            color: "#37251B",
            textAlign: "right",
            marginRight: 10,
          }}
        >
          میز شماره 1
        </p>
        <p
          style={{
            fontSize: 10,
            fontFamily: "IRANSansXBold",
            color: "#37251B",
            textAlign: "right",
            marginTop: 10,
            marginRight: 10,
          }}
        >
          :ظرفیت میز
        </p>
        <TextField
          id="standard-basic"
          variant="standard"
          style={{ left: 410, width: 80, top: -5 }}
        />
      </Typography>
      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        <div>
          {/* {popups} */}
          <PopupState variant="popover" popupId="demo-popup-menu">
            {(popupState) => (
              <React.Fragment>
                <Button
                  className="my-button"
                  variant="contained"
                  {...bindTrigger(popupState)}
                  sx={{
                    backgroundColor: buttonColor,
                    color: "#37251B",
                    width: 100,
                    marginTop: 5,
                    marginLeft: 2,
                    marginRight: 1,
                  }}
                >
                  8-9
                </Button>
                <Menu {...bindMenu(popupState)}>
                  <MenuItem
                    onClick={() => {
                      setButtonColor("#FF0000");
                      popupState.close();
                    }}
                    style={{ fontFamily: "IRANSansXLight", color: "#37251B" }}
                  >
                    رزرو
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      setButtonColor("#1FB62E");
                      popupState.close();
                    }}
                    style={{ fontFamily: "IRANSansXLight", color: "#37251B" }}
                  >
                    آزاد
                  </MenuItem>
                </Menu>
              </React.Fragment>
            )}
          </PopupState>

          <PopupState variant="popover" popupId="demo-popup-menu">
            {(popupState) => (
              <React.Fragment>
                <Button
                  className="my-button"
                  variant="contained"
                  {...bindTrigger(popupState)}
                  sx={{
                    backgroundColor: buttonColor1,
                    color: "#37251B",
                    width: 100,
                    marginTop: 5,
                    marginLeft: 2,
                    marginRight: 1,
                  }}
                >
                  9-10
                </Button>
                <Menu {...bindMenu(popupState)}>
                  <MenuItem
                    onClick={() => {
                      setButtonColor1("#FF0000");
                      popupState.close();
                    }}
                    style={{ fontFamily: "IRANSansXLight", color: "#37251B" }}
                  >
                    رزرو
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      setButtonColor1("#1FB62E");
                      popupState.close();
                    }}
                    style={{ fontFamily: "IRANSansXLight", color: "#37251B" }}
                  >
                    آزاد
                  </MenuItem>
                </Menu>
              </React.Fragment>
            )}
          </PopupState>
        </div>
        {/* {modalContent.description} */}
      </Typography>
    </Box>
  );

  return (
    <div>
      <div
        style={{
          flex: "1 1",
          position: "fixed",
          height: "97vh",
          left: "0px",
          right: "185px",
          marginTop: "80px",
        }}
      >
        <div
          style={{
            backgroundColor: "#F0E5D4",
            height: "85%",
            width: "98%",
            marginLeft: "30px",
            borderRadius: 10,
            overflow: "auto",
          }}
        >
          <TextField
            label="شروع ساعت کاری"
            variant="filled"
            size="small"
            style={{ top: 15, width: 130, left: 135 }}
          />
          <TextField
            label="پایان ساعت کاری"
            variant="filled"
            size="small"
            style={{ top: 15, right: 135, width: 130 }}
          />
          <div style={{ direction: "rtl" }}>
            <DatePicker
              style={{ marginTop: "30px", backgroundColor: "#F8F1E7" }}
              className="red"
              // className="bg-brown"
              calendar={persian}
              locale={persian_fa}
              calendarPosition="bottom-right"
            />
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              marginLeft: "10%",
              marginRight: "10%",
            }}
          >
            {icons.map((icon, index) => (
              <IconWithCounter
                icon={icon}
                index={index}
                key={index}
                handleIconClick={() =>
                  handleIconClick({
                    title: "Modal Title",
                    description: "Modal Description",
                  })
                }
              />
            ))}

            <BsPlusCircleDotted
              style={{
                fontSize: "25px",
                cursor: "pointer",
                marginTop: "50px",
                marginLeft: "4%",
                marginRight: "5%",
              }}
              onClick={handleIconClick1}
            />
          </div>
        </div>
      </div>
      <Modal
        open={isOpen}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
};
export default Table;
