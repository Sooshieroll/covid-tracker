const mongoose = require('mongoose');
const { Schema } = mongoose;

const locationSchema = new Schema({
    country: String,
    state: String,
    county: String
});

const Location = mongoose.model('Location', locationSchema);

module.exports = Location;