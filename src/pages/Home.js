import React from 'react';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableData from '../components/TableData';
import { useSelector } from 'react-redux';
import { TableFooter } from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    color: theme.palette.custom.contrastText,
  }
}));

const Home = () => {
  const { employees } = useSelector(state => state.employees)
  return (
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
            { employees.length > 0 ?
              (<TableBody>
                {
                employees.map((employee, index) => (
                    <TableData key={index} data={employee} index={index+1} />
                ))}
              </TableBody>):
              (<TableFooter>
                <TableRow>
                  <TableCell colSpan={4} align='center'>
                    No data
                  </TableCell>
                </TableRow>
                </TableFooter>)
            }
        </Table>
      </TableContainer>
  )
}

export default Home