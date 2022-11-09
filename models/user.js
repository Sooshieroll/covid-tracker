const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        default: 'No name provided'
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minLength: 8
    },
    date: {
        type: Date,
        default: Date.now()
    }
});

userSchema.methods.sayHello = function () {
    return `Hello, my name is ${this.name}`;
}

module.exports = mongoose.model('User', userSchema);

