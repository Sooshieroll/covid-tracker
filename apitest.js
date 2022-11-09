const axios = require('axios');
const express = require('express');
require('dotenv').config();
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

// const options = {
//     method: 'GET',
//     url: 'https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/country-report-iso-based/UnitedStates/us',
//     headers: {
//         'X-RapidAPI-Key': (`${process.env.RAPID_API_KEY_COUNTRIES}`),
//         'X-RapidAPI-Host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
//     }
// }

// axios.request(options).then(function (response) {
//     console.log(response.data);
// }).catch(function (error) {
//     console.error(error);
// });

// const isoCodes = {
//     method: 'GET',
//     url: 'https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/countries-name-ordered',
//     headers: {
//         'X-RapidAPI-Key': (`${process.env.RAPID_API_KEY_COUNTRIES}`),
//         'X-RapidAPI-Host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
//     }
// }

// axios.request(isoCodes).then(function (response) {
//     console.log(response.data);
// }).catch(function (error) {
//     console.error(error);
// });

// async function addFipsCodes() {
// const fipsCodes = {
//     method: 'GET',
//     url: 'https://fips-code-api.herokuapp.com/api/index',
// }

// axios.request(fipsCodes).then(function (response) {

//     console.log(Object.keys(response));
//     console.log(response.data)
//     FipsCodes.insertMany()
//         .then(res => {
//             console.log(res);
//         }).catch(err => {
//             console.log('Error', err);
//         })
// }).catch(function (error) {
//     console.error(error);
// });


// addFipsCodes();

// const countriesIso = {
//     method: 'GET',
//     url: 'https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/country-report-iso-based/Brazil/bra',
//     headers: {
//         'X-RapidAPI-Key': process.env.RAPID_API_KEY_COUNTRIES,
//         'X-RapidAPI-Host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
//     }
// };

// axios.request(countriesIso).then(function (response) {
//     console.log(response.data);
// }).catch(function (error) {
//     console.error(error);
// }); 



const options = {
    method: 'GET',
    url: 'https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/vaccines/get-fda-approved-vaccines',
    headers: {
        'X-RapidAPI-Key': '',
        'X-RapidAPI-Host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
    }
};

axios.request(options).then(function (response) {
    console.log(response.data);
}).catch(function (error) {
    console.error(error);
});

