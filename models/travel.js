const mongoose = require('mongoose');
const { Schema } = mongoose;

const travelSchema = new Schema({
    location: String,

    restriction: Boolean,


});

const Travel = mongoose.model('Travel', travelSchema);

module.exports = Travel;

