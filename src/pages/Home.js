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
import InfoIcon from '@mui/icons-material/Info';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    color: theme.palette.custom.contrastText,
  }
}));

const Home = () => {
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
              <StyledTableCell>
                1.
              </StyledTableCell>
              <StyledTableCell align='left'>
                Abebe Beso
              </StyledTableCell>
              <StyledTableCell align='center'>
                2021-2-2
              </StyledTableCell>
              <StyledTableCell align='center'>
                <Tooltip title='Detail'>
                  <IconButton>
                    <InfoIcon sx={{color:'custom.main'}} />
                  </IconButton>
                </Tooltip>
                <Tooltip title='Edit'>
                  <IconButton>
                    <EditIcon sx={{color:'secondary.main'}} />
                  </IconButton>
                </Tooltip>
                <Tooltip title='Delete'>
                  <IconButton>
                    <DeleteIcon sx={{color:'primary.danger'}}/>
                  </IconButton>
                </Tooltip>
              </StyledTableCell>
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}

export default Home