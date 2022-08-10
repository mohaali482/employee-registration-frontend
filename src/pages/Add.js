import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import InputForm from '../components/InputForm';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux/es/exports';
import { createEmployee } from '../redux/ducks/employee';


const Add = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event)=>{
    event.preventDefault();
    const data = {
      form: event.target
    }
    dispatch(createEmployee(data))
    navigate('/')
  }
  return (
    <Card>
        <CardHeader title={`Add a new Employee`} sx={{backgroundColor: 'secondary.main', color: '#fff'}}/>
        <InputForm handleSubmit={handleSubmit}/>
    </Card>
  )
}

export default Add
