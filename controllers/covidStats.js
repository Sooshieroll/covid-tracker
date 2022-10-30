require('dotenv').config();
const express = require('express');
const router = express.Router();
const CovidStat = require('../models/covidStat');
const mongoose = require('mongoose');
const axios = require('axios');


router.get('/', (req, res) => {
    const covidResults = axios.get(`https://api.covidactnow.org/v2/states.json?apiKey=${process.env.COVID_API_KEY}`, [{
        params: {
            actuals: {
                cases: req.params.cases,
                deaths: req.query.deaths,
                positiveTests: req.query.positiveTests,
                negativeTests: req.query.negativeTests
            },
            location: {
                country: req.params.country,
                state: req.params.state,
                county: req.params.county
            }
        }
    }])
        .then(response => {
            console.log('All Covid Stats', response);

        });
})

router.get('/:country', (req, res) => {
    console.log('Find Covid Data By', req.params.country)
    CovidStat.find({ country: req.params.country })
        .then(covidStat => {
            console.log('Here is covid data for', covidStat.country);
            res.json({ covidStat: covidStat });
        })
        .catch(error => {
            console.log('error', error);
            res.json({ message: 'Error occured, please try again' })
        });
});


module.exports = router;