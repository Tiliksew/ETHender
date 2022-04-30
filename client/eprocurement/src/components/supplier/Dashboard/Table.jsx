import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { FiDelete, FiEdit } from 'react-icons/fi';
import { RiEditBoxFill } from 'react-icons/ri';
import { FaEdit, FaRegEdit, FaUserEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import axios from 'axios'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3), 
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function CustomizedTables() {
  const [data, setData]=React.useState(null)
  React.useEffect(() => {
    axios.get('http://localhost:5001/all')
      .then((response) => {
        const username=response.data.user[0].username;
        setData(username)
        // console.log(response.data)
        console.log(response.data)
      }
      
      ).catch((e)=>console.log(e))
    
    
     }, []);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead> 
          <TableRow>
            <StyledTableCell>Tender Id</StyledTableCell>
            <StyledTableCell align="right">Tender Title</StyledTableCell>
            <StyledTableCell align="right">Opening Date&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Closing Date&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Status&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">{data}</StyledTableCell>
            <StyledTableCell align="right">&nbsp;(g)</StyledTableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
              <StyledTableCell align="right"><FaEdit /></StyledTableCell>
              <StyledTableCell align="right"><MdDelete/></StyledTableCell>

            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
