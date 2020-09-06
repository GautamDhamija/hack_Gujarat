const express = require('express')
const router = express.Router()
const Consultant = require('../models/Consultant')

router.get("/:category", async function(req,res){
    console.log(req.params.category);
    try {
        const consultants = await Consultant.find({ category: req.params.category })
        res.send(consultants)
    } catch (error) {
        console.log(error);
        res.status(500).send('server error')
    }
})

module.exports = router