import React from 'react'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { useParams } from 'react-router-dom';
import Paper from '@mui/material/Paper';

const Detail = () => {
    const { id } = useParams();
  return (
        <Box component={Paper}>
            Detail page of {id}
        </Box>
  )
}

export default Detail
