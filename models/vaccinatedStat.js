const mongoose = require('mongoose');
const { Schema } = mongoose;

const vaccinatedStatSchema = new Schema({
    survivorPercentage: Number,
    vaccinatedPercentage: Number
});

const VaccinatedStat = mongoose.model('VaccinatedStat', vaccinatedStatSchema);

module.exports = VaccinatedStat;