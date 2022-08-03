import React from 'react';
import { useSelector } from 'react-redux/es/exports';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import InputForm from '../components/InputForm';
import { useParams } from 'react-router-dom';


const Edit = () => {
    const { employees } = useSelector((state) => state.employees);
    const { id } = useParams();
    const employee = employees.find((employee) => employee.id == id)
  return (
    <Card>
        <CardHeader title={`Update Employee`} sx={{backgroundColor: 'secondary.main', color: '#fff'}}/>
        <InputForm employee={employee} update={true}/>
    </Card>
  )
}

export default Edit
