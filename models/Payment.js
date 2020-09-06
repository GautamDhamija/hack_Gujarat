const mongoose = require('mongoose')

const paymentSchema = mongoose.Schema({
    amount: {
        type: Number,
        required: true
    },
    senderID: {
        type: Number,//user mongo unique ID
        required: true
    },
    receiverID: {
        type: Number, //receivercmongo unique ID
        required: true
    }


})
const Payment = mongoose.model('token', paymentSchema)
module.exports = Payment