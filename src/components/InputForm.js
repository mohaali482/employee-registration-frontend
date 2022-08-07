import { FormControl, Grid, InputLabel, MenuItem, Select, TextField, Button, Box, Container, CardActions } from '@mui/material'
import { MobileDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import CardContent from '@mui/material/CardContent';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { createEmployee, updateEmployee } from '../redux/ducks/employee';
import { useNavigate } from 'react-router-dom';

const InputForm = ({employee, update}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState(employee ? employee.firstName : '');
  const [lastName, setLastName] = useState(employee ? employee.lastName : '');
  const [birthDate, setBirthDate] = useState( employee ? employee.birthDate : new Date('2000-01-01'));
  const [martialStatus, setMartialStatus] = useState(employee ? employee.martialStatus : '');
  const [ssnCode, setSsnCode] = useState(employee ? employee.ssnCode : '');
  const [address, setAddress] = useState(employee ? employee.address : '');
  const [city, setCity] = useState(employee ? employee.city : '');
  const [postalCode, setPostalCode] = useState(employee ? employee.postalCode : '');
  const [email, setEmail] = useState(employee ? employee.email : '');
  const [personalPhone, setPersonalPhone] = useState(employee ? employee.personalPhone : '');
  const [homePhone, setHomePhone] = useState(employee ? employee.homePhone : '');
  const [image, setImage] = useState(employee ? employee.image : null);
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(()=>{
      if (image){
        try{
          setImageUrl(URL.createObjectURL(image));
        }catch{
          setImageUrl(image)
        }
      }
  }, [image])

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {
      firstName,
      lastName,
      birthDate,
      martialStatus,
      ssnCode,
      address,
      city,
      postalCode,
      email,
      personalPhone,
      homePhone,
      image
    };

    if(update){
      data = {
        ...data,
        id: employee.id
      }
      dispatch(updateEmployee(data))
    }else{
      dispatch(createEmployee(data));
    }
    navigate(-1);
  }
  return (
    <Box component={'form'} onSubmit={handleSubmit}>
      <CardContent>
        <Box sx={{display: 'flex', flexDirection: { xs: 'column', sm: 'row'}, justifyContent:'center', alignItems: {xs: 'center', sm:'flex-start'}}}>
          <Box width={'40%'} mr={'10px'} sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
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
                <TextField id='name'
                label='First name'
                required variant='outlined'
                color='secondary' value={firstName}
                onChange={(e) => setFirstName(e.target.value)}/>
              </Grid>
              <Grid item>
                <TextField id='name'
                label='Last name' required
                variant='outlined'
                color='secondary' value={lastName}
                onChange={(e) => setLastName(e.target.value)}/>
              </Grid>
              <Grid item>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <MobileDatePicker label="Birth Date"
                    inputFormat="MM/dd/yyyy"
                    value={birthDate} onChange={(value) => setBirthDate(value)}
                    renderInput={(params) => <TextField {...params} color='secondary'/>} />
                </LocalizationProvider>
              </Grid>
              <Grid item>
                <FormControl>
                  <InputLabel id='martial-status-label' color='secondary'>Martial Status</InputLabel>
                  <Select labelId='martial-status-label'
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
                label='SSN Code' required
                variant='outlined' color='secondary'
                value={ssnCode} onChange={(e) => setSsnCode(e.target.value)}/>
              </Grid>
              <Grid item>
                <TextField id='address'
                label='Address' required
                variant='outlined' color='secondary'
                value={address} onChange={(e) => setAddress(e.target.value)}/>
              </Grid>
              <Grid item>
                <TextField id='city'
                label='City' required
                variant='outlined' color='secondary'
                value={city} onChange={(e) => setCity(e.target.value)}/>
              </Grid>
              <Grid item>
                <TextField id='postal_code'
                label='Postal Code' required
                variant='outlined' color='secondary'
                value={postalCode} onChange={(e) => setPostalCode(e.target.value)}/>
              </Grid>
              <Grid item>
                <TextField id='email'
                label='Email' required
                variant='outlined' type={'email'}
                color='secondary' value={email}
                onChange={(e) => setEmail(e.target.value)}/>
              </Grid>
              <Grid item>
                <TextField id='personal_phone'
                label='Personal Phone' required
                variant='outlined' type={'tel'}
                color='secondary' value={personalPhone}
                onChange={(e) => setPersonalPhone(e.target.value)}/>
              </Grid>
              <Grid item>
                <TextField id='home_phone'
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