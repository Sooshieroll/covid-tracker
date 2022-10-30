require('dotenv').config();
const mongoose = require('mongoose');
const Location = require('../models/location');
const axios = require('axios');

// connect to datbase
const MONGO_CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING;
mongoose.connect(MONGO_CONNECTION_STRING, { useNewUrlParser: true });
const db = mongoose.connection;

db.once('open', () => {
    console.log(`Connected to MongoDB at HOST: ${db.host} and PORT: ${db.port}`);
});

db.on('error', (error) => {
    console.log(`Database Error: ${error}`);
});


const location = {
    method: 'GET',
    url: 'https://spott.p.rapidapi.com/places',
    // params: { type: 'CITY', skip: '0', country: 'US,CA', limit: '1', q: 'New York' },
    headers: {
        'X-RapidAPI-Key': '096786359dmshf50b115415a56c4p1941d9jsn1ac864538b7d',
        'X-RapidAPI-Host': 'spott.p.rapidapi.com'
    }
};
