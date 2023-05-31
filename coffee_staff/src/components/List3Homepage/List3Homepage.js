import * as React from 'react';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { FixedSizeList } from 'react-window';
import OrderStatus from "./../OrderStatus/OrderStatus";
import "./../../Fonts/iransansX family/IRANSansX-Bold.ttf";
import "./../../Fonts/iransansX family/IRANSansX-Light.ttf";
import '../ListHomepage/ListHomepage.css';

export default function List3Homepage({ items }) {
  const renderRow = ({ index, style }) => {
    const item = items[index];

    return (
      <ListItem style={style} key={index} component="div" disablePadding>
        <ListItemButton>
          <ListItemText style={{ textAlign: 'right', marginRight: '20px', fontFamily: "IRANSansXLight" }} primary={`${item}  . ${index + 1}`} />
          <OrderStatus order={item} />
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
    </Box>
  );
}
