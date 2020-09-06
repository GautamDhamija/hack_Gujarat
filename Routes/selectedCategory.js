const express = require('express')
const router = express.Router()
const Consultant = require('../models/Consultant')
const checkToken = require('../middleware/auth')

router.get("/:category", checkToken, async function (req, res) {
    console.log(req.params.category);
    try {
        const consultants = await Consultant.find({ category: req.params.category })
        res.status(200).send(consultants)
    }
    catch (error) {
        console.log(error);
        res.status(500).send('server error')
    }
})


module.exports = router