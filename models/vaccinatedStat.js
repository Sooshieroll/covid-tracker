const mongoose = require('mongoose');
const { Schema } = mongoose;

const vaccinatedStatSchema = new Schema({
    totalVaccinations: Number

});

const VaccinatedStat = mongoose.model('VaccinatedStat', vaccinatedStatSchema);

module.exports = VaccinatedStat;