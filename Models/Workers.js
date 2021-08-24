
var mongoose = require('mongoose');


var workersSchema = new mongoose.Schema({
    name: String,
    email: String,
    address: String,
    contact: Number,
    username: String,
    gender: String,
    position: String,
    unit_number: Number,
    date_started: String,
    password: String,
    confirm_password: String,
    created_at: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Wokers", workersSchema);