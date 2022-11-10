const express = require('express');
const router = express.Router();
const VaccinatedStat = require('../models/vaccinatedStat');
const mongoose = require('mongoose');
const axios = require('axios');
const IsoCode = require('../models/isoCode');

router.get('/:country', async (req, res) => {
    const isoCodeModel = await IsoCode.find({ country: req.params.country })
    const isoCode = isoCodeModel[0].isoCode.toUpperCase();
    const vaccinationIso = {
        method: 'GET',
        url: 'https://covid-19-world-vaccination-data.p.rapidapi.com/',
        params: { iso: isoCode },
        headers: {
            'X-RapidAPI-Key': process.env.RAPID_API_KEY_COUNTRIES,
            'X-RapidAPI-Host': 'covid-19-world-vaccination-data.p.rapidapi.com'
        }
    };

    axios.request(vaccinationIso).then(function (response) {
        console.log(response.data);
        if (response.data.length === 0) {
            return res.json({ message: 'Try another search' })
        }
        return res.json({ vaccinationStat: response.data })

    }).catch(function (error) {
        console.error(error);
    });
})


module.exports = router;