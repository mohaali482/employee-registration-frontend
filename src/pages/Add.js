import React, { useEffect } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import InputForm from '../components/InputForm';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { createEmployee, setEmployeeNull, setFormErrorsNull } from '../redux/ducks/employee';



const Add = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { formErrors } = useSelector(state => state.employees)
  const { employee } = useSelector(state => state.employees)

  const handleSubmit = (event)=>{
    event.preventDefault();
    if (event.target.image.value === ''){
      alert('Upload an Image')
      return
    }
    const data = {
      form: event.target
    }
    dispatch(createEmployee(data))
  }
  useEffect(()=>{
    if (Object.keys(employee).length > 0){
      navigate('/')
    }
  }, [employee, navigate])

  useEffect(()=>{
    return () =>{
      dispatch(setFormErrorsNull());
      dispatch(setEmployeeNull());
    }
  }, [dispatch])

  return (
    <Card>
        <CardHeader title={`Add a new Employee`} sx={{backgroundColor: 'secondary.main', color: '#fff'}}/>
        <InputForm handleSubmit={handleSubmit} formErrors={formErrors}/>
    </Card>
  )
}

export default Add
