import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import InputForm from '../components/InputForm';


const Edit = () => {
    const data = {
        firstName: 'asdf',
        birthDate: new Date('2015-12-12')
    }
  return (
    <Card>
        <CardHeader title={`Update Employee`} sx={{backgroundColor: 'secondary.main', color: '#fff'}}/>
        <InputForm data={data}/>
    </Card>
  )
}

export default Edit
