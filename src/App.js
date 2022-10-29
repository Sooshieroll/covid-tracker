import React, { useEffect, useState } from 'react';
// import { Route, Switch, Redirect, BrowserRouter as Router } from 'react-router-dom';
// import jwt_decode from 'jwt-decode';
// import setAuthToken from './utils/setAuthToken';
import './App.css';
// import BarChart from './components/BarChart';
import { UserData } from './Data'
import { Bar } from 'react-chartjs-2'

import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'

ChartJS.register(
  CategoryScale, 
  LinearScale, 
  BarElement, 
  Title, 
  Tooltip, 
  Legend
)


function App() {

  const [chartData, setChartData] = useState({
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData({
      labels: ['John', 'George', 'Michael', 'Oreo'],
      datasets: [{
        label: 'Who let the dogs out?',
        data: [12, 55, 34, 120, 187],
        borderColor: 'rgb(5,162,235)',
        backgroundColor: 'rgb(53, 152, 235, .4)',
      },
    ],

    });
    setChartOptions({
      responsive: true,
      plugins: {
        legend: {
          position: 'top'
        },
        title: {
          display: true,
          text: 'Who let the dogs out',
        },
      },
  });
}, []);

  return (
    <div className="App">
      <Bar options={chartOptions} data={chartData} />
    </div>
  );
}

export default App;
