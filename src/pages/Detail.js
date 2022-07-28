import React from 'react';
import { useParams } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import { CardContent, Grid } from '@mui/material';
import { Box } from '@mui/system';
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
                    Hello
                </Grid>
            </Box>
        </CardContent>

    </Card>
  )
}

export default Detail
