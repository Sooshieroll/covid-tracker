require('dotenv').config();
const express = require('express');
const router = express.Router();
const app = express();
const mongoose = require('mongoose');
const CovidStat = require('./models/covidStat');
const Location = require('./models/location');
const Travel = require('./models/travel');
const User = require('./models/user');
const VaccinatedState = require('./models/vaccinatedStat');
const Vaccine = require('./models/vaccine');
const IsoCode = require('./models/isoCode')

const MONGO_CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING;
mongoose.connect(MONGO_CONNECTION_STRING, { useNewUrlParser: true });
const db = mongoose.connection;



db.once('open', () => {
    console.log(`Connected to MongoDB at HOST: ${db.host} and PORT: ${db.port}`);
});

db.on('error', (error) => {
    console.log(`Database Error: ${error}`);
})



app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to API' });
});

// ================ COVID STATS ROUTES ========================

app.use('/covidstats', require('./controllers/covidStats'));

// ================ LOCATIONS ROUTES ========================

app.use('/locations', require('./controllers/locations'));

// ================ TRAVELS ROUTES ========================

app.use('/travels', require('./controllers/travels'));

// ================ USERS ROUTES ========================

app.use('/users', require('./controllers/users'));

// ================ VACCINATED STATS ROUTES ========================

app.use('/vaccinatedstats', require('./controllers/vaccinatedStats'));

// ================ VACCINES ROUTES ========================

app.use('/vaccines', require('./controllers/vaccines'));


app.get('*', (req, res) => {
    res.json({ message: 'Whatever you were looking for... does not exists.' })
})

app.listen(8000, () => {
    console.log('Running port 8000')
});

