import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { blue } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    secondary: {
      main: blue[500],
    }
  },
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
