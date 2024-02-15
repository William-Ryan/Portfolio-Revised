import React from 'react';
import { Route, Routes } from "react-router-dom"

import Home from "./Components/Home.jsx"

import { makeStyles } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Home />}/>
      </Routes>
    </div>
  );
}

export default App;