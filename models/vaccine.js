const mongoose = require('mongoose');
const { Schema } = mongoose;

const vaccineSchema = new Schema({
    vaccineBrand: String,
    phase: Number,
    date: Date
});

const Vaccine = mongoose.model('Vaccine', vaccineSchema);

module.exports = Vaccine;
