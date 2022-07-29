import { FormControl, Grid, InputLabel, MenuItem, Select, TextField, Button, Box, Container, CardActions } from '@mui/material'
import { MobileDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import CardContent from '@mui/material/CardContent';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import React, { useEffect, useState } from 'react';

const InputForm = () => {
  const [image, setImage] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);

    useEffect(()=>{
        if (image){
            setImageUrl(URL.createObjectURL(image));
        }
    }, [image])
  return (
    <Box component={'form'}>
      <CardContent>
        <Box sx={{display: 'flex'}}>
          <Box width={'40%'} mr={'10px'}>
              {image && imageUrl && (<img src={imageUrl} alt={image.name} width={'100%'}/>)}
              <input accept='image/*' type='file' id='image' style={{display: 'none'}} onChange={e => setImage(e.target.files[0])}/>
              <label htmlFor='image' style={{display: 'flex', justifyContent: 'center', marginTop: '10px'}}>
                  <Button variant='contained' color='custom' component='span' >
                      Upload Image
                  </Button>
              </label>
          </Box>
          <Container>
            <Grid container spacing={2} sx={{mt: 1}}>
              <Grid item>
                <TextField id='name' label='First name' required variant='outlined' color='secondary'/>
              </Grid>
              <Grid item>
                <TextField id='name' label='Last name' required variant='outlined' color='secondary'/>
              </Grid>
              <Grid item>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <MobileDatePicker label="Date mobile"
                    inputFormat="MM/dd/yyyy"
                    renderInput={(params) => <TextField {...params} color='secondary'/>} />
                </LocalizationProvider>
              </Grid>
              <Grid item>
                <FormControl>
                  <InputLabel id='martial-status-label' color='secondary'>Martial Status</InputLabel>
                  <Select labelId='martial-status-label' label='Martial Status' sx={{minWidth: 170}} color='secondary'>
                    <MenuItem value={'married'}>Married</MenuItem>
                    <MenuItem value={'single'}>Single</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item>
                <TextField id='ssn' label='SSN Code' required variant='outlined' color='secondary'/>
              </Grid>
              <Grid item>
                <TextField id='address' label='Address' required variant='outlined' color='secondary'/>
              </Grid>
              <Grid item>
                <TextField id='city' label='City' required variant='outlined' color='secondary'/>
              </Grid>
              <Grid item>
                <TextField id='postal_code' label='Postal Code' required variant='outlined' color='secondary'/>
              </Grid>
              <Grid item>
                <TextField id='email' label='Email' required variant='outlined' type={'email'} color='secondary'/>
              </Grid>
              <Grid item>
                <TextField id='personal_phone' label='Personal Phone' required variant='outlined' type={'tel'} color='secondary'/>
              </Grid>
              <Grid item>
                <TextField id='home_phone' label='Home Phone' required variant='outlined' type={'tel'} color='secondary'/>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </CardContent>
        <CardActions sx={{float: 'right'}}>
              <Button color='secondary' variant='contained' type='submit'>
                  Save
              </Button>
        </CardActions>
      </Box>
  )
}

export default InputForm