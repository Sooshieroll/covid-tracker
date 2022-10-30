import React, { useEffect, useState } from 'react';
// import { Route, Switch, Redirect, BrowserRouter as Router } from 'react-router-dom';
// import jwt_decode from 'jwt-decode';
// import setAuthToken from './utils/setAuthToken';
import './App.css';
import Navbar from './components/navbar/Navbar';
import { Routes, Route, BrowserRouter as Router} from 'react-router-dom';
import BarChart from './components/BarChart';
import DoughnutChart from './components/DoughnutChart';
import LineChart from './components/LineChart';
import PieChart from './components/PieChart';
import Home from './components/Home';
import About from './components/About';


function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
      </Routes>
    </Router>
  );
}

export default App;
