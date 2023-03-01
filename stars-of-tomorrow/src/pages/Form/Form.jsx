import React, { useState } from 'react';
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux"
import { setLogin } from '../../state';
import { loginSchema } from '../../schemas/index.js';
import { registerSchema } from '../../schemas/index.js';
import { Box, Button, TextField, Typography, useMediaQuery, useTheme, createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    // main green
    primary: {
      main: '#f2cd00'
    }
  },
  components: {
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontFamily: 'Oswald, sans-serif',
        },
      },
    },
  },
});

const initialValuesRegister = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  scoutId: "",
}; 

const initialValuesLogin = {
  scoutId: "",
  password: "",
}; 


const Form = () => {
  const [pageType, setPageType] = useState("login");
  const { palette } = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  const isLogin = pageType === "login";
  const isRegister = pageType === "register";

  const register = async (values, onSubmitProps) => {
    const formData = new FormData();

    const savedScoutResponse = await fetch (
      "http://localhost:3000/auth/register", 
      {
        method: "POST",
        body: formData,
      }
    )
    const savedScout = await savedScoutResponse.json();
    onSubmitProps.resetForm();

    if(savedScout) {
      setPageType("login")
    } 
  };

  const login = async (values, onSubmitProps) => {
    const loggedInResponse = await fetch("http://localhost:3000/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    const loggedIn = await loggedInResponse.json();
    onSubmitProps.resetForm();
    if (loggedIn) {
      dispatch(
        setLogin({
          user: loggedIn.scout,
          token: loggedIn.token,
        })
      );
      navigate("/Events")
    }
  };

  const handleFormSubmit = async(values, onSubmitProps) => {
    if (isLogin) await login(values, onSubmitProps);
    if (isRegister) await register(values, onSubmitProps);
  };

  return (
    <ThemeProvider theme={theme}>
    <Formik
      onSubmit={handleFormSubmit}
      initialValues={isLogin ? initialValuesLogin : initialValuesRegister}
      validationSchema={isLogin ? loginSchema : registerSchema}
    >
      {({
        values,
        errors,
        touched,
        handleSubmit,
        handleBlur,
        handleChange, 
        resetForm,
      }) => (
        <form onSubmit={handleSubmit}>
          <Box
            paddingTop= '2rem'
            display="grid"
            gap="30px"
            gridTemplateColumns="repeat(4, minmax(0, 1fr))"
            sx={{
              "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
            }}
          >
            {isRegister && (
              <>
              <TextField 
              label="First Name"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.firstName}
              name="firstName"
              error={
                Boolean(touched.firstName) && Boolean(errors.firstName)
              }
              helperText={touched.firstName && errors.firstName}
              sx={{ gridColumn: "span 2", fontFamily: 'Oswald, sans-serif', }}
              />
              <TextField 
              label="Last Name"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.lastName}
              name="lastName"
              error={
                Boolean(touched.lastName) && Boolean(errors.lastName)
              }
              helperText={touched.lastName && errors.lastName}
              sx={{ gridColumn: "span 2" }}
              />
              <TextField 
              label="Email"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.email}
              name="email"
              error={
                Boolean(touched.email) && Boolean(errors.email)
              }
              helperText={touched.email && errors.email}
              sx={{ gridColumn: "span 4" }}
              />
              </>
            )}

            <TextField 
              label="Scout Id"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.scoutId}
              name="scoutId"
              error={Boolean(touched.scoutId) && Boolean(errors.scoutId)}
              helperText={touched.scoutId && errors.scoutId}
              sx={{ gridColumn: "span 4" }}
            />
            <TextField 
              label="Password"
              type="password"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.password}
              name="password"
              error={Boolean(touched.password) && Boolean(errors.password)}
              helperText={touched.password && errors.password}
              sx={{ gridColumn: "span 4" }}
            />
          </Box>

          {/* Buttons */}
          <Box>
            <Button
              fullWidth
              type="submit"
              sx={{
                fontFamily: 'Oswald, sans-serif',
                m: "2rem 0",
                p: "1rem",
                backgroundColor: 'black',
                color: 'white',
                "&:hover": {color: 'black', backgroundColor: '#f2cd00' },
              }}
            >
              {isLogin ? "LOGIN" : "REGISTER "}
            </Button>
            <Typography
              onClick={() => {
                setPageType(isLogin ? "register" : "login");
                resetForm();
              }}
              sx={{
                fontFamily: 'Oswald, sans-serif',
                textDecoration: "none",
                color: 'black',
                "&:hover": {
                  cursor: "pointer",
                  color: 'black',
                },
              }}
            >
              {isLogin
                ? "First Time Scout? Sign Up here."
                : "Already Scouted before? Login here."}
            </Typography>
          </Box>
        </form>
      )} 
    </Formik>
    </ThemeProvider>
  );
};

export default Form
