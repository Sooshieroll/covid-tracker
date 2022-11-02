require('dotenv').config();
const express = require('express');
const router = express.Router();
const CovidStat = require('../models/covidStat');
const mongoose = require('mongoose');
const axios = require('axios');



router.get('/:state', (req, res) => {
    return axios.get(`https://api.covidactnow.org/v2/state/${req.query.state}.json?apiKey=${process.env.COVID_API_KEY}`)
        .then(response => {
            console.log('All Covid Stats');
            // console.log(response.data.find(state => state.state === 'CA').actuals);
            // console.log(Object.keys(response));
            console.log(response.data);
            // return res.json({ stateStat: })
        })
        .catch(error => {
            console.log('error', error);
            res.json({ message: 'Error occured, please try again' })
        })
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