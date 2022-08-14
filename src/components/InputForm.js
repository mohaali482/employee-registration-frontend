import { FormControl, Grid, InputLabel, MenuItem, Select, TextField, Button, Box, Container, CardActions } from '@mui/material'
import { MobileDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import CardContent from '@mui/material/CardContent';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import React, { useEffect, useState } from 'react';
import Loading from './Loading';

const InputForm = ({employee, handleSubmit}) => {

  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    birthDate: new Date('2000-01-01'),
    martialStatus: 'single',
    ssnCode: '',
    address: '',
    city: '',
    postalCode: '',
    email: '',
    personalPhone: '',
    homePhone: '',
    image: null
  })
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(()=>{
      if (formData.image){
        try{
          setImageUrl(URL.createObjectURL(formData.image));
        }catch{
          setImageUrl(formData.image)
        }
      }

      return () => {
        URL.revokeObjectURL(formData.image);
      }
  }, [formData.image])

  useEffect(() => {
    if (employee) {
      setFormData({
        ...employee
      })
    }
    setLoading(false)
  }, [employee])

  return (
    <Box component={'form'} onSubmit={handleSubmit} encType="multipart/form-data">
      <Loading open={loading} />
      <CardContent>
        <Box sx={{display: 'flex', flexDirection: { xs: 'column', sm: 'row'}, justifyContent:'center', alignItems: {xs: 'center', sm:'flex-start'}}}>
          <Box width={'40%'} mr={'10px'} sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              {formData.image && imageUrl && (<img src={imageUrl} alt={formData.image.name} width={'100%'}/>)}
              <input accept='image/*' type='file' id='image' style={{display: 'none'}} name='image' onChange={e => setFormData({...formData, image: e.target.files[0]})}/>
              <label htmlFor='image' style={{display: 'flex', justifyContent: 'center', marginTop: '10px'}}>
                  <Button variant='contained' color='custom' component='span' >
                      Upload Image
                  </Button>
              </label>
          </Box>
          <Container>
            <Grid container spacing={2} sx={{mt: 1}}>
              <Grid item>
                <TextField id='firstName'
                name='firstName'
                label='First name'
                required variant='outlined'
                color='secondary' value={formData.firstName}
                onChange={(e) => setFormData({...formData, firstName: e.target.value})}/>
              </Grid>
              <Grid item>
                <TextField id='lastName'
                name='lastName'
                label='Last name' required
                variant='outlined'
                color='secondary' value={formData.lastName}
                onChange={(e) => setFormData({...formData, lastName: e.target.value})}/>
              </Grid>
              <Grid item>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <MobileDatePicker label="Birth Date"                    
                    inputFormat="dd/MM/yyyy"
                    value={formData.birthDate} onChange={(value) => setFormData({...formData, birthDate: value})}
                    renderInput={(params) => <TextField name='birthDate' {...params} color='secondary'/>} />
                </LocalizationProvider>
              </Grid>
              <Grid item>
                <FormControl>
                  <InputLabel id='martial-status-label' color='secondary'>Martial Status</InputLabel>
                  <Select labelId='martial-status-label'
                  name='martialStatus' defaultValue='single'
                  label='Martial Status' sx={{minWidth: 170}}
                  color='secondary' value={formData.martialStatus}
                  onChange={(e) => setFormData({...formData, martialStatus: e.target.value})}>
                    <MenuItem value={'married'}>Married</MenuItem>
                    <MenuItem value={'single'}>Single</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item>
                <TextField id='ssn'
                name='ssnCode'
                label='SSN Code' required
                variant='outlined' color='secondary'
                value={formData.ssnCode} onChange={(e) => setFormData({...formData, ssnCode: e.target.value})}/>
              </Grid>
              <Grid item>
                <TextField id='address'
                name='address'
                label='Address' required
                variant='outlined' color='secondary'
                value={formData.address} onChange={(e) => setFormData({...formData, address: e.target.value})}/>
              </Grid>
              <Grid item>
                <TextField id='city'
                name='city'
                label='City' required
                variant='outlined' color='secondary'
                value={formData.city} onChange={(e) => setFormData({...formData, city: e.target.value})}/>
              </Grid>
              <Grid item>
                <TextField id='postal_code'
                name='postalCode'
                label='Postal Code' required
                variant='outlined' color='secondary'
                value={formData.postalCode} onChange={(e) => setFormData({...formData, postalCode: e.target.value})}/>
              </Grid>
              <Grid item>
                <TextField id='email'
                name='email'
                label='Email' required
                variant='outlined' type={'email'}
                color='secondary' value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}/>
              </Grid>
              <Grid item>
                <TextField id='personal_phone'
                name='personalPhone'
                label='Personal Phone' required
                variant='outlined' type={'tel'}
                color='secondary' value={formData.personalPhone}
                onChange={(e) => setFormData({...formData, personalPhone: e.target.value})}/>
              </Grid>
              <Grid item>
                <TextField id='home_phone'
                name='homePhone'
                label='Home Phone' required
                variant='outlined' type={'tel'}
                color='secondary' value={formData.homePhone}
                onChange={(e) => setFormData({...formData, homePhone: e.target.value})}/>
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