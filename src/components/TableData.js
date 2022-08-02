import React from 'react';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import InfoIcon from '@mui/icons-material/Info';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { Link } from 'react-router-dom';

const TableData = ({index, data}) => {
  const { first_name, last_name, created_date, id } = data;
  
  return (
    <TableRow>
      <TableCell>
        {index}.
      </TableCell>
      <TableCell align='left'>
        {first_name + last_name}
      </TableCell>
      <TableCell align='center'>
        {created_date}
      </TableCell>
      <TableCell align='center'>
        <Tooltip title='Detail'>
          <IconButton LinkComponent={Link} to={`detail/${id}`}>
            <InfoIcon sx={{color:'custom.main'}} />
          </IconButton>
        </Tooltip>
        <Tooltip title='Edit'>
          <IconButton LinkComponent={Link} to={`edit/${id}`}>
            <EditIcon sx={{color:'secondary.main'}} />
          </IconButton>
        </Tooltip>
        <Tooltip title='Delete'>
          <IconButton LinkComponent={Link} to={`delete/${id}`}>
            <DeleteIcon sx={{color:'primary.danger'}}/>
          </IconButton>
        </Tooltip>
      </TableCell>
    </TableRow>
  )
}

export default TableData