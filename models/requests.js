const mongoose = require('mongoose')

const requestSchema = mongoose.Schema({
    by_name: {
        type: String,
        required: true
    },
    to_name: {
        type: String,
        required: true,
    },
    by_email: {
        type: String,
        default: null
    },
    to_email: {
        type: String,
        required: true
    },
    by_number: {
        type: Number,
        required: true
    },
    to_number: {
        type: Number,
    },
    time: {
        type: String,
    }

})
const request = mongoose.model('request', requestSchema)
module.exports = request