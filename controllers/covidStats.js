require('dotenv').config();
const express = require('express');
const router = express.Router();
const CovidStat = require('../models/covidStat');
const mongoose = require('mongoose');
const axios = require('axios');


router.get('/', (req, res) => {
    res.json({ message: 'Hello' })
})

router.get('/US', (req, res) => {
    return axios.get(`https://api.covidactnow.org/v2/country/US.json?apiKey=${process.env.COVID_API_KEY}`)
        .then(response => {
            console.log('Covid Stats for the US');
            // console.log(response.data.find(state => state.state === 'CA').actuals);
            // console.log(Object.keys(response));
            console.log(response.data);
            return res.json({ countryStat: response.data })
        })
        .catch(error => {
            console.log('error', error);
            res.json({ message: 'Error occured, please try again' })
        })
})

router.get('/state/:state', (req, res) => {
    return axios.get(`https://api.covidactnow.org/v2/state/CA.json?apiKey=${process.env.COVID_API_KEY}`)
        .then(response => {
            console.log(`Covid Stats for `);
            // console.log(response.data.find(state => state.state === 'CA').actuals);
            // console.log(Object.keys(response));
            console.log(response.data);
            return res.json({ stateStat: response.data })
        })
        .catch(error => {
            console.log('error', error);
            res.json({ message: 'Error occured, please try again' })
        })
})

router.get('/county/:county', (req, res) => {
    return axios.get(`https://api.covidactnow.org/v2/county/---.json?apiKey=${process.env.COVID_API_KEY}`)
        .then(response => {
            console.log(`Covid Stats for `);
            // console.log(response.data.find(state => state.state === 'CA').actuals);
            // console.log(Object.keys(response));
            console.log(response.data);
            return res.json({ countyStat: response.data })
        })
        .catch(error => {
            console.log('error', error);
            res.json({ message: 'Error occured, please try again' })
        })

})







module.exports = router;