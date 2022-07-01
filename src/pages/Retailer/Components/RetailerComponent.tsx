import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import {RetailerListType} from '../../../interface/interface';



const RetailerComponent1 = ({retailerList}:RetailerListType) => {
  const total = retailerList.productPurchased.reduce(
    (acc, current) => acc + current.price* current.quantity,
    0
  );
  console.log(retailerList.productPurchased);
    return (
        <>
          <div className='flex'>
          
          <div><label>Retailername : {retailerList.retailerName}</label> </div><div className='ml'><label>Total : ₹{total}</label></div>
          </div>
          

{retailerList.productPurchased?.length > 0 ? <TableContainer component={Paper}>
      <Table sx={{ minWidth: 200 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ProductName </TableCell>
            <TableCell>Date </TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Price&nbsp;(₹)</TableCell>
            <TableCell align="right">Total&nbsp;(₹)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {retailerList.productPurchased.map((row) => (
            <TableRow
              key={row.productName}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">{row.productName}</TableCell>
              <TableCell component="th" scope="row">{row.date}</TableCell>
              <TableCell align="right">{row.quantity}{row.unit}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">{row.quantity * row.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>:<Typography gutterBottom variant="h5" component="div">
    no data found
        </Typography>}
        </>
    );
};

export default RetailerComponent1;
