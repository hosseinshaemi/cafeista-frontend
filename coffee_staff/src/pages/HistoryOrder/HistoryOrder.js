import * as React from "react";
import TablePagination from "@mui/material/TablePagination";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { createFilterOptions } from '@mui/material/Autocomplete';
import Autocomplete from '@mui/material/Autocomplete';




function createData(OrderStatus, TrackingCode, OrderDate, OrderNumber,type,Number,Price,TotalPrice) {
  return {
    OrderStatus,
    TrackingCode,
    OrderDate,
    OrderNumber, 
    // price,
    history: [
      {
        type,
        Number,
        Price,
        TotalPrice,
      },
   
      
      
    ],
  };
}



function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    
         
    <React.Fragment
      sx={{ width: "70%", backgroundColor: "#FFF8F3", borderRadius: "10px"  }}
    >
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row" style={{ textAlign: "center" }}>
          {row.OrderStatus}
        </TableCell>
        <TableCell style={{ textAlign: "center" }}>
          {row.TrackingCode}
        </TableCell>
        <TableCell style={{ textAlign: "center" }}>
          {row.OrderDate}</TableCell>
        <TableCell style={{ textAlign: "center" }}>
          {row.OrderNumber}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div" style={{fontFamily:"IRANSansXLight"}}>
                فاکتور
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell style={{fontFamily:"IRANSansXLight"}}>نوع</TableCell>
                    <TableCell style={{fontFamily:"IRANSansXLight"}}>تعداد</TableCell>
                    <TableCell style={{ textAlign: "center" , fontFamily:"IRANSansXLight"}}>قیمت</TableCell>
                    <TableCell style={{ textAlign: "center" , fontFamily:"IRANSansXLight"}}>
                      قیمت کل
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.type}>
                      <TableCell component="th" scope="row">
                        {historyRow.type}
                      </TableCell>
                      <TableCell>{historyRow.Number}</TableCell>
                      <TableCell style={{ textAlign: "center" }}>
                        {historyRow.Price}
                      </TableCell>
                      <TableCell style={{ textAlign: "center" }}>
                        {historyRow.TotalPrice}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>

  );
}

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.string.isRequired,
        Number: PropTypes.number.isRequired,
        Price : PropTypes.number.isRequired,
        TotalPrice: PropTypes.number.isRequired,
      })
    ).isRequired,
    OrderStatus: PropTypes.string.isRequired,
  }).isRequired,
};



const rows = [
  createData("موفق/تحویل داده شده", 4532167584, "1401/08/02", 1 , 'لاته', 2 , 50000 , 100000 ),
  createData("موفق/تحویل داده شده", 4532167584, "1401/08/02", 2 ),
  
];


const HistoryOrder =()=>{
    return (
        <div  >
          <div style={{flex:"1 1", position:"fixed", height:"97vh", left:"0px", right:"185px", marginTop:"80px"}}>

          <div  >
          <Paper
            sx={{
              position:"relative",
              marginLeft:"100px",
              // display:"flex",
              // justifyContent:"center",
              // position:"absolute",
              // left:"16%",
              top:"15%",
              // width: "60%",
              overflow: "hidden",
              backgroundColor: "#FFF8F3",
              borderRadius: "10px",
              
            }}
          >
           {/* <TableContainer sx={{ maxHeight: 480, minHeight: 480 , marginTop: "15%" , borderRadius: "10px" , position: "relative"}}>*/}
            <TableContainer sx={{ maxHeight: 480, minHeight: 480 }}> 
              <Table aria-label="collapsible table" sx={{ borderRadius: "10px" }}>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ backgroundColor: "#EEC89A" }} />
                    <TableCell
                      style={{ textAlign: "center", backgroundColor: "#EEC89A" , fontFamily:"IRANSansXBold" }}
                    >
                      وضعیت سفارش
                    </TableCell>
                    <TableCell
                      style={{ textAlign: "center", backgroundColor: "#EEC89A" , fontFamily:"IRANSansXBold"}}
                    >
                      کدرهگیری
                    </TableCell>
                    <TableCell
                      style={{ textAlign: "center", backgroundColor: "#EEC89A" , fontFamily:"IRANSansXBold"}}
                    >
                      تاریخ سفارش
                    </TableCell>
                    <TableCell
                      style={{ textAlign: "center", backgroundColor: "#EEC89A", fontFamily:'IRANSansXBold' }}
                    >
                      شماره سفارش
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <Row key={row.OrderStatus} row={row} />
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            
          </Paper>
          </div>
          </div>
          
         </div> 
      );

}
export default HistoryOrder;