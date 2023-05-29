import React, { useState ,  useEffect } from "react";
import '../../pages/Table/table.css';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';


export default function TimeButton({ timeValue }) {
    const [buttonColor, setButtonColor] = useState("#1FB62E");
    const [currentTimeValue, setCurrentTimeValue] = useState(timeValue);
  
    useEffect(() => {
      setCurrentTimeValue(timeValue);
    }, [timeValue]);
  
    return (
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
                marginRight: 1
              }}
            >
              {currentTimeValue}
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
    );
  }
  


