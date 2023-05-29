import * as React from 'react';
import Menu from '@mui/material/Menu';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

export default function MenuPopupState() {
  const [circleColor, setCircleColor] = React.useState('red');

  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Box
            variant="contained"
            {...bindTrigger(popupState)}
            sx={{
              width: '17px',
              height: '17px',
              borderRadius: '50%',
              backgroundColor: circleColor,
              fontFamily:'IRANSensXLight' ,
              border: '1px solid black',
              borderColor: 'black',
            }}
          ></Box>
          <Menu {...bindMenu(popupState)}>
            <MenuItem
              onClick={() => {
                setCircleColor('red');
                popupState.close();
              }}
              style={{fontFamily: 'IRANSansXLight' , justifyContent:'center', fontSize:14}}
            >
              در انتظار آماده سازی
            </MenuItem>
            <MenuItem
            style={{fontFamily:'IRANSansXLight' , justifyContent:'center' , fontSize:14}}
              onClick={() => {
                setCircleColor('yellow');
                popupState.close();
              }}
            >
              در حال آماده سازی
            </MenuItem>
            <MenuItem
            style={{fontFamily:'IRANSansXLight' , justifyContent:'center' , fontSize:14}}
              onClick={() => {
                setCircleColor('#1FB62E');
                popupState.close();
              }}
            >
              آماده شده
            </MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}
