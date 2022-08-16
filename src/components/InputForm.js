import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Button,
  Box,
  Container,
  CardActions,
  Snackbar,
  Alert,
} from "@mui/material";
import { MobileDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import CardContent from "@mui/material/CardContent";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import React, { useEffect, useState } from "react";
import Loading from "./Loading";

const InputForm = ({ employee, handleSubmit, formErrors }) => {
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    birthDate: new Date("2000-01-01"),
    martialStatus: "single",
    ssnCode: "",
    address: "",
    city: "",
    postalCode: "",
    email: "",
    personalPhone: "",
    homePhone: "",
    image: null,
  });
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    if (formData.image) {
      try {
        setImageUrl(URL.createObjectURL(formData.image));
      } catch {
        setImageUrl(formData.image);
      }
    }

    return () => {
      URL.revokeObjectURL(formData.image);
    };
  }, [formData.image]);

  useEffect(() => {
    if (employee) {
      setFormData({
        ...employee,
      });
    }
    setLoading(false);
  }, [employee]);

  return (
    <Box
      component={"form"}
      onSubmit={handleSubmit}
      encType="multipart/form-data"
    >
      <Loading open={loading} />
      <CardContent>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "center",
            alignItems: { xs: "center", sm: "flex-start" },
          }}
        >
          <Box
            width={"40%"}
            mr={"10px"}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {formData.image && imageUrl && (
              <img src={imageUrl} alt={formData.image.name} width={"100%"} />
            )}
            <Snackbar
              open={formErrors.image ? true : false}
              autoHideDuration={5000}
            >
              <Alert severity="error" sx={{ width: "100%" }}>
                Image:{" "}
                {formErrors.image ? formErrors.image.map((error) => error) : ""}
              </Alert>
            </Snackbar>
            <input
              accept="image/*"
              type="file"
              id="image"
              style={{ display: "none" }}
              name="image"
              onChange={(e) =>
                setFormData({ ...formData, image: e.target.files[0] })
              }
            />
            <label
              htmlFor="image"
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "10px",
              }}
            >
              <Button variant="contained" color="custom" component="span">
                Upload Image
              </Button>
            </label>
          </Box>
          <Container>
            <Grid container spacing={2} sx={{ mt: 1 }}>
              <Grid item>
                <TextField
                  id="firstName"
                  name="firstName"
                  label="First name"
                  error={formErrors.firstName ? true : false}
                  helperText={formErrors.firstName ? formErrors.firstName : ""}
                  variant="outlined"
                  required
                  color="secondary"
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
                />
              </Grid>
              <Grid item>
                <TextField
                  id="lastName"
                  name="lastName"
                  label="Last name"
                  variant="outlined"
                  required
                  error={formErrors.lastName ? true : false}
                  helperText={formErrors.lastName ? formErrors.lastName : ""}
                  color="secondary"
                  value={formData.lastName}
                  onChange={(e) =>
                    setFormData({ ...formData, lastName: e.target.value })
                  }
                />
              </Grid>
              <Grid item>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <MobileDatePicker
                    label="Birth Date"
                    inputFormat="dd/MM/yyyy"
                    value={formData.birthDate}
                    onChange={(value) =>
                      setFormData({ ...formData, birthDate: value })
                    }
                    renderInput={(params) => (
                      <TextField
                        name="birthDate"
                        {...params}
                        error={formErrors.birthDate ? true : false}
                        required
                        helperText={
                          formErrors.birthDate ? formErrors.birthDate : ""
                        }
                        color="secondary"
                      />
                    )}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item>
                <FormControl>
                  <InputLabel id="martial-status-label" color="secondary">
                    Martial Status
                  </InputLabel>
                  <Select
                    labelId="martial-status-label"
                    name="martialStatus"
                    defaultValue="single"
                    label="Martial Status"
                    sx={{ minWidth: 170 }}
                    color="secondary"
                    value={formData.martialStatus}
                    error={formErrors.martialStatus ? true : false}
                    required
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        martialStatus: e.target.value,
                      })
                    }
                  >
                    <MenuItem value={"married"}>Married</MenuItem>
                    <MenuItem value={"single"}>Single</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item>
                <TextField
                  id="ssn"
                  name="ssnCode"
                  label="SSN Code"
                  variant="outlined"
                  color="secondary"
                  error={formErrors.ssnCode ? true : false}
                  helperText={formErrors.ssnCode ? formErrors.ssnCode : ""}
                  required
                  value={formData.ssnCode}
                  onChange={(e) =>
                    setFormData({ ...formData, ssnCode: e.target.value })
                  }
                />
              </Grid>
              <Grid item>
                <TextField
                  id="address"
                  name="address"
                  label="Address"
                  error={formErrors.address ? true : false}
                  helperText={formErrors.address ? formErrors.address : ""}
                  variant="outlined"
                  color="secondary"
                  required
                  value={formData.address}
                  onChange={(e) =>
                    setFormData({ ...formData, address: e.target.value })
                  }
                />
              </Grid>
              <Grid item>
                <TextField
                  id="city"
                  name="city"
                  label="City"
                  error={formErrors.city ? true : false}
                  helperText={formErrors.city ? formErrors.city : ""}
                  variant="outlined"
                  color="secondary"
                  required
                  value={formData.city}
                  onChange={(e) =>
                    setFormData({ ...formData, city: e.target.value })
                  }
                />
              </Grid>
              <Grid item>
                <TextField
                  id="postal_code"
                  name="postalCode"
                  label="Postal Code"
                  error={formErrors.postalCode ? true : false}
                  helperText={
                    formErrors.postalCode ? formErrors.postalCode : ""
                  }
                  variant="outlined"
                  color="secondary"
                  required
                  value={formData.postalCode}
                  onChange={(e) =>
                    setFormData({ ...formData, postalCode: e.target.value })
                  }
                />
              </Grid>
              <Grid item>
                <TextField
                  id="email"
                  name="email"
                  label="Email"
                  error={formErrors.email ? true : false}
                  helperText={formErrors.email ? formErrors.email : ""}
                  variant="outlined"
                  type={"email"}
                  required
                  color="secondary"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </Grid>
              <Grid item>
                <TextField
                  id="personal_phone"
                  name="personalPhone"
                  label="Personal Phone"
                  error={formErrors.personalPhone ? true : false}
                  helperText={
                    formErrors.personalPhone ? formErrors.personalPhone : ""
                  }
                  variant="outlined"
                  type={"tel"}
                  required
                  color="secondary"
                  value={formData.personalPhone}
                  onChange={(e) =>
                    setFormData({ ...formData, personalPhone: e.target.value })
                  }
                />
              </Grid>
              <Grid item>
                <TextField
                  id="home_phone"
                  name="homePhone"
                  label="Home Phone"
                  error={formErrors.homePhone ? true : false}
                  helperText={formErrors.homePhone ? formErrors.homePhone : ""}
                  variant="outlined"
                  type={"tel"}
                  required
                  color="secondary"
                  value={formData.homePhone}
                  onChange={(e) =>
                    setFormData({ ...formData, homePhone: e.target.value })
                  }
                />
              </Grid>
            </Grid>
          </Container>
        </Box>
      </CardContent>
      <CardActions sx={{ float: "right" }}>
        <Button color="secondary" variant="contained" type="submit">
          Save
        </Button>
      </CardActions>
    </Box>
  );
};

export default InputForm;
