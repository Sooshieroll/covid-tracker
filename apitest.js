// const axios = require('axios');
// const express = require('express');
// require('dotenv').config();
// const app = express();
// const mongoose = require('mongoose');
// const MONGO_CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING;
// mongoose.connect(MONGO_CONNECTION_STRING, { useNewUrlParser: true });
// const db = mongoose.connection;


// db.once('open', () => {
//     console.log(`Connected to MongoDB at HOST: ${db.host} and PORT: ${db.port}`);
// });

// db.on('error', (error) => {
//     console.log(`Database Error: ${error}`);
// })

// app.use(express.urlencoded({ extended: false }));

// app.get('/', (req, res) => {
//     res.json({ message: 'Welcome to API' });
// });


// const covidResults = axios.get(`https://api.covidactnow.org/v2/states.timeseries.csv?apiKey=${process.env.COVID_API_KEY}`, {
//     cases: 3,
//     newCases: 2,
//     icuBeds: 1
// })


// axios.get(`https://api.covidactnow.org/v2/states.csv?apiKey=${process.env.COVID_API_KEY}`, {
//     params: {
//         fips: req.params.fips

//     }
// })
//     .then((response) => {
//         console.log('Body: ', response.data.fips);
//     }).catch((err) => {
//         console.error(err);
//     })
// res.send('Hello');

// CovidStat.create({
//     cases: req.body.cases,
//     newCases: req.body.newCases,
//     icuBeds: req.body.icuBeds
// })
//     .then(covidstat => {
//         console.log('Covid cases', covidstat);
//         res.json({ covidstat: covidstat });
//     })
//     .catch(error => {
//         console.log('error', error)
//         res.json({ message: 'Error occured, please try again' })
//     });
// });



