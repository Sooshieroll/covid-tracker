const mongoose = require('mongoose');
const { Schema } = mongoose;

const covidStatSchema = new Schema({
    actuals: {
        cases: Number,
        deaths: Number,
        positiveTests: Number,
        negativeTests: Number
    },
    location: {
        country: String,
        state: String,
        county: String
    }
});
module.exports = mongoose.model('CovidStat', covidStatSchema);

