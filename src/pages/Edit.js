import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import InputForm from "../components/InputForm";
import { useNavigate, useParams } from "react-router-dom";
import {
  getEmployee,
  setFormErrorsNull,
  updateEmployee,
} from "../redux/ducks/employee";

const Edit = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();
  const { employee } = useSelector((state) => state.employees);
  const { formErrors } = useSelector((state) => state.employees);
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    dispatch(getEmployee(id));
    return () => {
      dispatch(setFormErrorsNull());
    };
  }, [dispatch, id]);

  useEffect(() => {
    if (formSubmitted && Object.keys(formErrors).length === 0) {
      navigate(`/detail/${id}`);
    }
  }, [formErrors]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      id,
      form: event.target,
    };
    dispatch(updateEmployee(data));
    setFormSubmitted(true);
  };
  return (
    <Card>
      <CardHeader
        title={`Update Employee`}
        sx={{ backgroundColor: "secondary.main", color: "#fff" }}
      />
      {employee && (
        <InputForm
          employee={employee}
          handleSubmit={handleSubmit}
          formErrors={formErrors}
        />
      )}
    </Card>
  );
};

export default Edit;
