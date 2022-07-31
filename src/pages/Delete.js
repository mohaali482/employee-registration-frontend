import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Card, CardActions, CardContent, CardHeader, Typography } from '@mui/material';

const Delete = () => {
    const navigate = useNavigate();
    const handleDelete = (e) => {
        // Delete method here.
    }
  return (
    <Card>
        <CardHeader title={'Delete Employee'} sx={{backgroundColor: 'danger.main', color: 'danger.contrastText'}}/>
        <CardContent>
            <Typography variant='h5' component='p'>
                Do you really want to delete this employee?
            </Typography>
        </CardContent>
        <CardActions sx={{float: 'right'}}>
            <Button color='danger' variant='contained' onClick={handleDelete}>Yes</Button>
            <Button color='secondary' variant='contained' onClick={() => navigate(-1)}>No</Button>
        </CardActions>
    </Card>
  )
}

export default Delete