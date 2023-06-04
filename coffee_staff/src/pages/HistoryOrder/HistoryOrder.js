import React, { useEffect, useState } from "react";
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

// function createData(OrderStatus, TrackingCode, OrderDate, OrderNumber,type,Number,Price,TotalPrice) {
//   return {
//     OrderStatus,
//     TrackingCode,
//     OrderDate,
//     OrderNumber, 
//     history: [
//       {
//         type,
//         Number,
//         Price,
//         TotalPrice,
//       },



function createData(OrderStatus, TrackingCode, OrderDate, OrderNumber,type,Number,Price,TotalPrice) {
  return {
    OrderStatus,
    TrackingCode,
    OrderDate,
    OrderNumber, 
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
  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
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
        <TableCell style={{ textAlign: "center" }}>{row.TrackingCode}</TableCell>
        <TableCell style={{ textAlign: "center" }}>{row.OrderDate}</TableCell>
        <TableCell style={{ textAlign: "center" }}>{row.OrderNumber}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                فاکتور
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>نوع</TableCell>
                    <TableCell>تعداد</TableCell>
                    <TableCell style={{ textAlign: "center" }}>قیمت</TableCell>
                    <TableCell style={{ textAlign: "center" }}>قیمت کل</TableCell>
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
        Price: PropTypes.number.isRequired,
        TotalPrice: PropTypes.number.isRequired,
      })
    ).isRequired,
    OrderStatus: PropTypes.string.isRequired,
  }).isRequired,
};

const HistoryOrder = () => {
  const rows = [
  createData("موفق/تحویل داده شده", 4532167584, "1401/08/02", 1 , 'لاته', 2 , 50000 , 100000 ),
  createData("موفق/تحویل داده شده", 4532167584, "1401/08/02", 2 ),
];
// const [rows, setRows] = useState([]);
//   useEffect(() => {
//     fetch("") 
//       .then((response) => response.json())
//       .then((data) => {
//         setRows(data);
//       })
//       .catch((error) => {
//         console.error("Error fetching orders:", error);
//       });
//   }, []);
  return (
    <div>
      <div style={{ flex: "1 1", position: "fixed", height: "97vh", left: "0px", right: "185px", marginTop: "80px" }}>
        <div>
          <Paper
            sx={{
              position: "relative",
              marginLeft: "100px",
              top: "15%",
              overflow: "hidden",
              backgroundColor: "white",
              borderRadius: "10px",
            }}
          >
            <TableContainer sx={{ maxHeight: 480, minHeight: 480 }}>
              <Table aria-label="collapsible table" sx={{ borderRadius: "10px" }}>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ backgroundColor: "#F0E5D4" }} />
                    <TableCell style={{ textAlign: "center", backgroundColor: "#F0E5D4", fontFamily: "IRANSansXBold" }}>
                      وضعیت سفارش
                    </TableCell>
                    <TableCell style={{ textAlign: "center", backgroundColor: "#F0E5D4", fontFamily: "IRANSansXBold" }}>
                      کدرهگیری
                    </TableCell>
                    <TableCell style={{ textAlign: "center", backgroundColor: "#F0E5D4", fontFamily: "IRANSansXBold" }}>
                      تاریخ سفارش
                    </TableCell>
                    <TableCell style={{ textAlign: "center", backgroundColor: "#F0E5D4", fontFamily: "IRANSansXBold" }}>
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
};

export default HistoryOrder;
