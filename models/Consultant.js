const mongoose = require('mongoose')

const consultantSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    displayPicture: {
        type: String
    },

    date: {
        type: Date,
        default: Date.now(),
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    lastPayments: [{
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: "Payment"
    }],

    qualification: [{
        type: String,
        required: true
    }],
    fees:{
        type: Number,
        required: true
    },
    location:{
        type: String,
        required: true
    },
    consultancyCount: {
        type: Number,
        default: 0
    },
    feedback: [{
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: "Feedback"
    }]
})
const Consultant = mongoose.model('consultant', consultantSchema)
module.exports = Consultant