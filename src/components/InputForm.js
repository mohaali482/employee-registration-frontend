import { FormControl, Grid, InputLabel, MenuItem, Select, TextField, Button, Box, Container, CardActions } from '@mui/material'
import { MobileDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import CardContent from '@mui/material/CardContent';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import React, { useEffect, useState } from 'react';
import Loading from './Loading';

const InputForm = ({employee, handleSubmit}) => {

  const [loading, setLoading] = useState(true);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthDate, setBirthDate] = useState( new Date('2000-01-01'));
  const [martialStatus, setMartialStatus] = useState('single');
  const [ssnCode, setSsnCode] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [email, setEmail] = useState('');
  const [personalPhone, setPersonalPhone] = useState('');
  const [homePhone, setHomePhone] = useState('');
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(()=>{
      if (image){
        try{
          setImageUrl(URL.createObjectURL(image));
        }catch{
          setImageUrl(image)
        }
      }

      return () => {
        URL.revokeObjectURL(image);
      }
  }, [image])

  useEffect(() => {
    if (employee) {
      setFirstName(employee.firstName)
      setLastName(employee.lastName)
      setBirthDate(employee.birthDate)
      setMartialStatus(employee.martialStatus)
      setSsnCode(employee.ssnCode)
      setAddress(employee.address)
      setCity(employee.city)
      setPostalCode(employee.postalCode)
      setEmail(employee.email)
      setPersonalPhone(employee.personalPhone)
      setHomePhone(employee.homePhone)
      setImage(employee.image)
    }
    setLoading(false)
  }, [employee])

  return (
    <Box component={'form'} onSubmit={handleSubmit} encType="multipart/form-data">
      <Loading open={loading} />
      <CardContent>
        <Box sx={{display: 'flex', flexDirection: { xs: 'column', sm: 'row'}, justifyContent:'center', alignItems: {xs: 'center', sm:'flex-start'}}}>
          <Box width={'40%'} mr={'10px'} sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              {image && imageUrl && (<img src={imageUrl} alt={image.name} width={'100%'}/>)}
              <input accept='image/*' type='file' id='image' style={{display: 'none'}} name='image' onChange={e => setImage(e.target.files[0])}/>
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
                color='secondary' value={firstName}
                onChange={(e) => setFirstName(e.target.value)}/>
              </Grid>
              <Grid item>
                <TextField id='lastName'
                name='lastName'
                label='Last name' required
                variant='outlined'
                color='secondary' value={lastName}
                onChange={(e) => setLastName(e.target.value)}/>
              </Grid>
              <Grid item>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <MobileDatePicker label="Birth Date"                    
                    inputFormat="dd/MM/yyyy"
                    value={birthDate} onChange={(value) => setBirthDate(value)}
                    renderInput={(params) => <TextField name='birthDate' {...params} color='secondary'/>} />
                </LocalizationProvider>
              </Grid>
              <Grid item>
                <FormControl>
                  <InputLabel id='martial-status-label' color='secondary'>Martial Status</InputLabel>
                  <Select labelId='martial-status-label'
                  name='martialStatus'
                  label='Martial Status' sx={{minWidth: 170}}
                  color='secondary' value={martialStatus}
                  onChange={(e) => setMartialStatus(e.target.value)}>
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
                value={ssnCode} onChange={(e) => setSsnCode(e.target.value)}/>
              </Grid>
              <Grid item>
                <TextField id='address'
                name='address'
                label='Address' required
                variant='outlined' color='secondary'
                value={address} onChange={(e) => setAddress(e.target.value)}/>
              </Grid>
              <Grid item>
                <TextField id='city'
                name='city'
                label='City' required
                variant='outlined' color='secondary'
                value={city} onChange={(e) => setCity(e.target.value)}/>
              </Grid>
              <Grid item>
                <TextField id='postal_code'
                name='postalCode'
                label='Postal Code' required
                variant='outlined' color='secondary'
                value={postalCode} onChange={(e) => setPostalCode(e.target.value)}/>
              </Grid>
              <Grid item>
                <TextField id='email'
                name='email'
                label='Email' required
                variant='outlined' type={'email'}
                color='secondary' value={email}
                onChange={(e) => setEmail(e.target.value)}/>
              </Grid>
              <Grid item>
                <TextField id='personal_phone'
                name='personalPhone'
                label='Personal Phone' required
                variant='outlined' type={'tel'}
                color='secondary' value={personalPhone}
                onChange={(e) => setPersonalPhone(e.target.value)}/>
              </Grid>
              <Grid item>
                <TextField id='home_phone'
                name='homePhone'
                label='Home Phone' required
                variant='outlined' type={'tel'}
                color='secondary' value={homePhone}
                onChange={(e) => setHomePhone(e.target.value)}/>
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