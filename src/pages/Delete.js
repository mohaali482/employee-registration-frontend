import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { Button, Card, CardActions, CardContent, CardHeader, Typography } from '@mui/material';
import { deleteEmployee } from '../redux/ducks/employee';

const Delete = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { id } = useParams();
    const { employees } = useSelector((state) => state.employees)
    const employee = employees.find((employee) => employee.id == id)

    const handleDelete = () => {
        dispatch(deleteEmployee(id))
        navigate('/')
    }
  return (
    <Card>
        <CardHeader title={'Delete Employee'} sx={{backgroundColor: 'danger.main', color: 'danger.contrastText'}}/>
        {
            employee !== undefined ?
        (<>
        <CardContent>
            <Typography variant='h5' component='p'>
                Do you really want to delete this employee?
            </Typography>
        </CardContent>
        <CardActions sx={{float: 'right'}}>
            <Button color='danger' variant='contained' onClick={handleDelete}>Yes</Button>
            <Button color='secondary' variant='contained' onClick={() => navigate(-1)}>No</Button>
        </CardActions>
        </>) :
        (
            <>
            <CardContent>
                <Typography variant='h5' component='p'>
                    Employee not found.
                </Typography>
            </CardContent>
            <CardActions sx={{float: 'right'}}>
                <Button color='secondary' variant='contained' onClick={() => navigate(-1)}>Back</Button>
            </CardActions>
            </>
        )
    }
    </Card>
  )
}

export default Delete