require('dotenv').config();
const mongoose = require('mongoose');
const FipsCode = require('../models/fipsCode');
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

async function addFipsCodes() {
    const fipsCodes = {
        method: 'GET',
        url: 'https://fips-code-api.herokuapp.com/api/index',
    }

    axios.request(fipsCodes).then(function (response) {
        console.log(response.data);
        let arr = response.data.map(i => {
            return { name: i.name, fips: i.fips, stateFips: i.stateFips, state: i.state, abbrev: i.abbrev }
        })
        FipsCode.insertMany(arr)
            .then(res => {
                console.log(res);
            }).catch(err => {
                console.log('Error', err);
            })
    }).catch(function (error) {
        console.error(error);
    });
}

// addFipsCodes();