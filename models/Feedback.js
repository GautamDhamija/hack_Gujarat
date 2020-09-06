const mongoose = require('mongoose')

const feedbackSchema = mongoose.Schema({
    feedback: {
        type: String,
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
const Feedback = mongoose.model('token', feedbackSchema)
module.exports = Feedback