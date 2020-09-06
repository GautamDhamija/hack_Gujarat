const express = require("express");
const router = express.Router();
const Token = require('../models/Token')
const Consultant = require('../models/Consultant')
router.post("/", async (req, res) => {

    let token = await Token.findOne({ token: req.body.token });
    if (!token) {

        res.status(400).json(
            {
                msg: 'We were unable to find a valid token. Your token my have expired.'
            });
    }

    let consultant = await Consultant.findOne({
        _id: token._userID,
        email: req.body.email
    })
    if (!consultant) {

        res.status(400).json({
            msg: 'We were unable to find a consultant for this token.'
        });
    }

    if (consultant.isVerified) {
        res.status(400).json({
            msg: 'This consultant has already been verified.'
        });
    }
    consultant.isVerified = true;
    await consultant.save();
    res.status(200).json({
        msg: "The account has been verified. Please log in."
    });
})
module.exports = router