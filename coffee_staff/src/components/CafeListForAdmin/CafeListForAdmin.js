import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import './CafeListForAdmin.css';

function createData(name, address) {
  return { name, address };
}

const rows = [
  createData('لوتوس', 'حکیم نظامی'),
  createData('وایت', 'چهارباغ'),
  createData('رادیو', 'چهارباغ'),
  createData('نمکدون', 'میدان نقش جهان'),
  createData('باغ پنجم', 'چهارباغ بالا'),
  createData('ساباط', 'مرداویج'),
  createData('هفت داستان', 'مرداویج'),
];



export default function CafeListForAdmin() {
  const [tableRows, setTableRows] = useState(rows);
  const [confirmedRows, setConfirmedRows] = useState([]);
  const [deletedRows, setDeletedRows] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [confirmedSearchTerm, setConfirmedSearchTerm] = useState('');

  const handleDelete = (index) => {
    const confirmed = window.confirm('آیا از حذف اطمینان دارید؟');
    if (confirmed) {
      const deletedRow = confirmedRows[index];
      const newRows = [...confirmedRows];
      newRows.splice(index, 1);
      setConfirmedRows(newRows);
      setDeletedRows([...deletedRows, deletedRow]);
    }
  };

  const handleConfirm = (index) => {
    const confirmedRow = tableRows[index];
    const newRows = [...tableRows];
    newRows.splice(index, 1);
    setTableRows(newRows);
    setConfirmedRows([...confirmedRows, confirmedRow]);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleConfirmedSearch = (event) => {
    setConfirmedSearchTerm(event.target.value);
  };

  const filteredRows = tableRows.filter((row) =>
    row.name.includes(searchTerm)
  );

  const filteredConfirmedRows = confirmedRows.filter((row) =>
    row.name.includes(confirmedSearchTerm)
  );

  return (
    <div>
      <div >
        <p style={{ display: 'flex', position: 'absolute', right: '9%', top: 140 , fontFamily: "IRANSansXLight"}}>
          :کافه های تایید شده
        </p>
        <SearchIcon style={{ position: 'absolute', right: '9%', top: 172}}/>
        <TextField
          id="standard-basic" 
          variant="standard"
          style={{ display: 'flex', position: 'absolute', right: '11%', top: 165 , direction:'rtl'}}
          value={confirmedSearchTerm}
          onChange={handleConfirmedSearch}
        />
        <TableContainer
          sx={{
            height: '60%',
            width: '40%',
            top: 220,
            right: '9%',
            overflow: 'auto',
            position: 'absolute',

          }}
          component={Paper}
        >
          <Table aria-label="confirmed table">
            <TableHead sx={{ backgroundColor: "#007BFF"  }}>
              <TableRow>
                <TableCell align="center" style={{color: "white"}}>حذف کافه</TableCell>
                <TableCell align="center" style={{color: "white"}}>آدرس</TableCell>
                <TableCell align="center" style={{color: "white"}}>نام کافه</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredConfirmedRows.map((row, index) => (
                <TableRow key={row.name}>
                  <TableCell align="center">
                    <IconButton onClick={() => handleDelete(index)} style={{ width: 20 , height:25 }}>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                  <TableCell align="center">{row.address}</TableCell>
                  <TableCell align="center">{row.name}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      <div>
        <p style={{ display: 'flex', position: 'absolute', right: '52%', top: 140 , fontFamily: "IRANSansXLight"}}>
          :کافه های در انتظار تایید
        </p>
        <SearchIcon style={{ position: 'absolute', right: '52%', top: 172}}/>
        <TextField
          id="standard-basic" 
          variant="standard"
          style={{ display: 'flex', position: 'absolute', right: '54%', top: 165 , direction:'rtl'}}
          value={searchTerm}
          onChange={handleSearch}
        />
        <TableContainer
          className='shadowTable'
          sx={{
            height: '60%',
            width: '40%',
            top: 220,
            right: '52%',
            overflow: 'auto',
            position: 'absolute',
          }}
          component={Paper}
        >
          <Table aria-label="simple table">
            <TableHead sx={{ backgroundColor: "#007BFF"  }}>
              <TableRow>
                <TableCell align="center" style={{color: "white"}} >تأیید</TableCell>
                <TableCell align="center" style={{color: "white"}}>آدرس</TableCell>
                <TableCell align="center" style={{color: "white"}}>نام کافه</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredRows.map((row, index) => (
                <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell align="center">
                    {!row.confirm && (
                      <Button style={{ width: 30, height: 25, fontSize: 15, backgroundColor: "#007BFF" , color: "white" , fontFamily: "IRANSansXLight" }} onClick={() => handleConfirm(index)}>تأیید</Button>
                    )}
                  </TableCell>
                  <TableCell align="center">{row.address}</TableCell>
                  <TableCell align="center">{row.name}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}



