import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { blue, green, red } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: "#fff",
      danger: red[700],
    },
    secondary: {
      main: blue[500],
    },
    custom: {
      main: green[500],
      contrastText: '#fff',
    }
  },
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
