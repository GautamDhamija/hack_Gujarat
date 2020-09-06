const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    displayPicture: {
        type: String,
        default: null
    },
    phone: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now(),
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    recentConsults: [{
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: "Consultant"
    }],
    lastPayments: [{
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: "Payment"
    }],

})
const User = mongoose.model('user', userSchema)
module.exports = User