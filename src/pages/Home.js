import React from 'react';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableData from '../components/TableData';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    color: theme.palette.custom.contrastText,
  }
}));

const Home = () => {
  const data = {
    key: 1,
    fullname: 'Abebe Beso',
    created_date: '2021-02-02',
    id:'7ae95dsfwe984'
  }
  return (
    <Container sx={{mt: '2em'}}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow sx={{backgroundColor:'custom.main'}}>
              <StyledTableCell>
                No.
              </StyledTableCell>
              <StyledTableCell align='left'>
                Full Name
              </StyledTableCell>
              <StyledTableCell align='center'>
                Created Date
              </StyledTableCell>
              <StyledTableCell align='center'>
                Actions
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableData data={data}/>
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}

export default Home