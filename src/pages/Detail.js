import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { Link, useParams } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import { Button, CardActions, CardContent, Grid } from '@mui/material';
import { Box } from '@mui/system';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import GridItem from '../components/GridItem';
import { useSelector } from 'react-redux';
import { getEmployee } from '../redux/ducks/employee';
import Loading from '../components/Loading';


const Detail = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    useEffect(()=>{
        dispatch(getEmployee(id));
        setLoading(false)
    }, [])
    const { employee } = useSelector((state) => state.employees)
  return (
    <Card>
        <Loading open={loading} />
        <CardHeader title={`Detail of ${employee.firstName + ' ' + employee.lastName}`} sx={{backgroundColor: 'custom.main', color: '#fff'}}/>
        <CardContent>
            <Box sx={{display: 'flex'}}>
                <Box width={'40%'} mr={'10px'}>
                    { employee.image &&
                    <img src={employee.image} width={'100%'} alt="employee"/>}
                </Box>
                <Box>
                    <Grid container spacing={2}>
                        <GridItem dataKey={'First Name'} dataValue={employee.firstName} />
                        <GridItem dataKey={'Last Name'} dataValue={employee.lastName} />
                        <GridItem dataKey={'Email'} dataValue={employee.email} />
                        <GridItem dataKey={'Birth Date'} dataValue={employee.birthDate} />
                        <GridItem dataKey={'Martial Status'} dataValue={employee.martialStatus} />
                        <GridItem dataKey={'SSN Code'} dataValue={employee.ssnCode} />
                        <GridItem dataKey={'Address'} dataValue={employee.address} />
                        <GridItem dataKey={'City'} dataValue={employee.city} />
                        <GridItem dataKey={'Postal Code'} dataValue={employee.postalCode} />
                        <GridItem dataKey={'Personal Phone'} dataValue={employee.personalPhone} />
                        <GridItem dataKey={'Home Phone'} dataValue={employee.homePhone} />
                    </Grid>
                </Box>
            </Box>
        </CardContent>
        <CardActions sx={{float: 'right'}}>
            <Button color='secondary' variant='contained' startIcon={<EditIcon />} LinkComponent={Link} to={`/edit/${id}`}>
                Edit
            </Button>
            <Button color='danger' variant='contained' startIcon={<DeleteIcon />} LinkComponent={Link} to={`/delete/${id}`}>
                Delete
            </Button>
        </CardActions>
    </Card>
  )
}

export default Detail
