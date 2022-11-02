const mongoose = require('mongoose');

const isoCodeSchema = new mongoose.Schema({
    country: String,
    isoCode: String
})

const IsoCode = mongoose.model('IsoCode', isoCodeSchema);

module.exports = IsoCode;