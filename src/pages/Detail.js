import React from 'react';
import { useParams } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import { Button, CardActions, CardContent, Grid } from '@mui/material';
import { Box } from '@mui/system';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import GridItem from '../components/GridItem';
import dummyImage from '../static/img/dummy.jfif';


const Detail = () => {
    const { id } = useParams();
  return (
    <Card>
        <CardHeader title={`Detail of ${id}`} sx={{backgroundColor: 'custom.main', color: '#fff'}}/>
        <CardContent>
            <Box sx={{display: 'flex'}}>
                <Box width={'40%'} mr={'10px'}>
                    <img src={dummyImage} width={'100%'}/>
                </Box>
                <Grid container spacing={2}>
                    <GridItem dataKey={'Name'} dataValue={'Mohammed Ali'} />
                </Grid>
            </Box>
        </CardContent>
        <CardActions sx={{float: 'right'}}>
            <Button color='secondary' variant='contained' startIcon={<EditIcon />}>
                Edit
            </Button>
            <Button color='danger' variant='contained' startIcon={<DeleteIcon />}>
                Delete
            </Button>
        </CardActions>
    </Card>
  )
}

export default Detail
