import React, { useEffect, useState } from 'react';
// import { Route, Switch, Redirect, BrowserRouter as Router } from 'react-router-dom';
// import jwt_decode from 'jwt-decode';
// import setAuthToken from './utils/setAuthToken';
import './App.css';
import BarChart from './components/BarChart';
import DoughnutChart from './components/DoughnutChart';
import LineChart from './components/LineChart';
import PieChart from './components/PieChart';
import Home from './components/Home';
import Header from './components/header/Header';
// import { UserData } from './Data'


function App() {

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
