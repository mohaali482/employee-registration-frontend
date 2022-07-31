import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Add from './pages/Add';
import Detail from './pages/Detail';
import Home from './pages/Home';
import Container from '@mui/material/Container';
import Edit from './pages/Edit';
import Delete from './pages/Delete';

const App = () => {
  return (
    <Router>
        <Navbar />
        <Container sx={{mt: '2em'}}>
          <Routes>
              <Route exact path='/delete/:id' element={ <Delete />} />
              <Route exact path='/edit/:id' element={ <Edit /> }/>
              <Route exact path='/detail/:id' element={ <Detail /> }/>
              <Route exact path='/add' element={ <Add /> }/>
              <Route exact path='/' element={ <Home /> }/>
          </Routes>
        </Container>
    </Router>
  )
}

export default App