import React from 'react';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import InfoIcon from '@mui/icons-material/Info';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

const TableData = ({data}) => {
  const {key, fullname, created_date, id} = data;
  
  return (
    <TableRow>
      <TableCell>
        {key}.
      </TableCell>
      <TableCell align='left'>
        {fullname}
      </TableCell>
      <TableCell align='center'>
        {created_date}
      </TableCell>
      <TableCell align='center'>
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
      </TableCell>
    </TableRow>
  )
}

export default TableData