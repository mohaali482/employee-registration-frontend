import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import InputForm from '../components/InputForm';
import { useNavigate, useParams } from 'react-router-dom';
import { getEmployee, updateEmployee } from '../redux/ducks/employee';


const Edit = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();
  useEffect(()=>{
    dispatch(getEmployee(id));
  }, [dispatch])
  const { employee } = useSelector((state) => state.employees)
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      id,
      form: event.target
    }
    dispatch(updateEmployee(data))
    navigate(`/detail/${id}`)
  }
  return (
    <Card>
        <CardHeader title={`Update Employee`} sx={{backgroundColor: 'secondary.main', color: '#fff'}}/>
        {employee && <InputForm employee={employee} handleSubmit={handleSubmit}/>}
    </Card>
  )
}

export default Edit
