import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import InputForm from '../components/InputForm';


const Add = () => {
  return (
    <Card>
        <CardHeader title={`Add a new Employee`} sx={{backgroundColor: 'secondary.main', color: '#fff'}}/>
        <InputForm />
    </Card>
  )
}

export default Add
