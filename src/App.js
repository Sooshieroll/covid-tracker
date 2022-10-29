import React, { useEffect, useState } from 'react';
// import { Route, Switch, Redirect, BrowserRouter as Router } from 'react-router-dom';
// import jwt_decode from 'jwt-decode';
// import setAuthToken from './utils/setAuthToken';
import './App.css';
import BarChart from './components/BarChart';
import DoughnutChart from './components/DoughnutChart';
import LineChart from './components/LineChart';
import PieChart from './components/PieChart';
// import { UserData } from './Data'


function App() {

  return (
    <div className="App">
      <BarChart />
      <DoughnutChart />
      <LineChart />
      <PieChart />
    </div>
  );
}

export default App;
