import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import { Button, CardActions, CardContent, Grid } from '@mui/material';
import { Box } from '@mui/system';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import GridItem from '../components/GridItem';
import { useSelector } from 'react-redux';


const Detail = () => {
    const { id } = useParams();
    const { employees } = useSelector((state) => state.employees)
    const employee = employees.find((employee) => employee.id == id)
  return (
    <Card>
        <CardHeader title={`Detail of ${id}`} sx={{backgroundColor: 'custom.main', color: '#fff'}}/>
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
                        <GridItem dataKey={'Birth Date'} dataValue={employee.birthDate[0]} />
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
