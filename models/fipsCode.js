const mongoose = require('mongoose');

const fipsCodeSchema = new mongoose.Schema({
    name: String,
    fips: String,
    stateFips: String,
    state: String,
    abbrev: String
})

const FipsCode = mongoose.model('FipsCode', fipsCodeSchema);

module.exports = FipsCode;