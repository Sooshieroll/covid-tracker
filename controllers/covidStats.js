require('dotenv').config();
const express = require('express');
const router = express.Router();
const CovidStat = require('../models/covidStat');
const mongoose = require('mongoose');
const axios = require('axios');
const IsoCode = require('../models/isoCode');
const FipsCode = require('../models/fipsCode');


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
    return axios.get(`https://api.covidactnow.org/v2/state/${req.params.state}.json?apiKey=${process.env.COVID_API_KEY}`)
        // return axios.get(`https://api.covidactnow.org/v2/state/CA.json?apiKey=${process.env.COVID_API_KEY}`)
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


router.get('/county/:county', async (req, res) => {
    const fipsCodeModel = await FipsCode.findOne({ name: req.params.county + ' County' })
    const fipsCode = fipsCodeModel.fips
    // console.log(fipsCode);
    // console.log(req.params.county);
    return axios.get(`https://api.covidactnow.org/v2/county/${fipsCode}.json?apiKey=${process.env.COVID_API_KEY}`)
        // return axios.get(`https://api.covidactnow.org/v2/county/01019.json?apiKey=${process.env.COVID_API_KEY}`)
        .then(response => {
            console.log(`Covid Stats for`, req.params.county + ' County');
            // console.log(response.data);
            return res.json({ countyStat: response.data })
        })
        .catch(error => {
            console.log('error', error);
            res.json({ message: 'Error occured, please try again' })
        })

})

router.get('/country/:country', async (req, res) => {
    const isoCodeModel = await IsoCode.find({ country: req.params.country })
    const isoCode = isoCodeModel[0].isoCode
    const countryIso = {
        method: 'GET',
        url: `https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/country-report-iso-based/${req.params.country}/${isoCode}`,
        // url: `https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/country-report-iso-based/Canada/can`,
        headers: {
            'Access': 'application/json',
            'Content-type': 'application/json',
            'X-RapidAPI-Key': process.env.RAPID_API_KEY_COUNTRIES,
            'X-RapidAPI-Host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
        }
    };

    axios.request(countryIso).then(function (response) {
        // console.log(response.data);
        // return res.send(JSON.stringify({ response.data }))
        console.log(response.data)
        return res.json(response.data)
    }).catch(function (error) {
        console.error('Error', error);
    });

})

module.exports = router;