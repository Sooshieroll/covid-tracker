require('dotenv').config();
const express = require('express');
const router = express.Router();
const CovidStat = require('../models/covidStat');
const mongoose = require('mongoose');
const axios = require('axios');


router.get('/US', (req, res) => {
    return axios.get(`https://api.covidactnow.org/v2/country/US.json?apiKey=${process.env.COVID_API_KEY}`)

        .then(response => {
            console.log('Covid Stats for the US');
            // console.log(response.data.find(state => state.state === 'CA').actuals);
            // console.log(Object.keys(response));
            console.log(response.data);
            return res.json({ usStat: response.data })
        })
        .catch(error => {
            console.log('error', error);
            res.json({ message: 'Error occured, please try again' })
        })
})


router.get('/state/:state', (req, res) => {
    // return axios.get(`https://api.covidactnow.org/v2/state/${req.query.state}.json?apiKey=${process.env.COVID_API_KEY}`)
    return axios.get(`https://api.covidactnow.org/v2/state/CA.json?apiKey=${process.env.COVID_API_KEY}`)
        .then(response => {
            console.log(`Covid Stats for state`);
            console.log(response.data);
            return res.json({ stateStat: response.data })
        })
        .catch(error => {
            console.log('error', error);
            res.json({ message: 'Error occured, please try again' })
        })
})


router.get('/county/:fips', (req, res) => {
    // return axios.get(`https://api.covidactnow.org/v2/county/${req.query.fips}.json?apiKey=${process.env.COVID_API_KEY}`)
    return axios.get(`https://api.covidactnow.org/v2/county/01019.json?apiKey=${process.env.COVID_API_KEY}`)


        .then(response => {
            console.log(`Covid Stats for county `);
            console.log(response.data);
            return res.json({ countyStat: response.data })
        })
        .catch(error => {
            console.log('error', error);
            res.json({ message: 'Error occured, please try again' })
        })

})

router.get('/country/:country/:isocode', (req, res) => {
    const countryIso = {
        method: 'GET',
        url: `https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/country-report-iso-based/Canada/can`,
        headers: {
            'X-RapidAPI-Key': process.env.RAPID_API_KEY_COUNTRIES,
            'X-RapidAPI-Host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
        }
    };

    axios.request(countryIso).then(function (response) {
        console.log(response.data);
        return res.json({ countryStat: response.data })
    }).catch(function (error) {
        console.error('Error', error);
    });

})




module.exports = router;