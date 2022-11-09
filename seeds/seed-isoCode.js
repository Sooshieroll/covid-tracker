require('dotenv').config();
const mongoose = require('mongoose');
const IsoCode = require('../models/isoCode');
const axios = require('axios');

const MONGO_CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING;
mongoose.connect(MONGO_CONNECTION_STRING, { useNewUrlParser: true });
const db = mongoose.connection;


db.once('open', () => {
    console.log(`Connected to MongoDB at HOST: ${db.host} and PORT: ${db.port}`);
});

db.on('error', (error) => {
    console.log(`Database Error: ${error}`);
})

async function addIsoCodes() {
    const isoCodes = {
        method: 'GET',
        url: 'https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/countries-name-ordered',
        headers: {
            'X-RapidAPI-Key': (`${process.env.RAPID_API_KEY_COUNTRIES}`),
            'X-RapidAPI-Host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
        }
    }

    axios.request(isoCodes).then(function (response) {
        console.log(response.data);
        let arr = response.data.map(c => {
            return { country: c.Country, isoCode: c.ThreeLetterSymbol }
        })
        IsoCode.insertMany(arr)
            .then(res => {
                console.log(res);
            }).catch(err => {
                console.log('Error', err);
            })
    }).catch(function (error) {
        console.error(error);
    });
}


