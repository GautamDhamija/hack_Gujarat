const express = require('express')
const router = express.Router()
const Requests = require('../models/requests')

router.get("/:email", async function (req, res) {
    console.log(req.params.email);
    try {
        const requests = await Requests.find({ by_email : req.params.email })
        res.status(200).send(requests)
    }
    catch (error) {
        console.log(error);
        res.status(500).send('server error')
    }
})

router.get("/consult/:email", async function (req, res) {
    console.log(req.params.email);
    try {
        const requests = await Requests.find({ to_email : req.params.email })
        res.status(200).send(requests)
    }
    catch (error) {
        console.log(error);
        res.status(500).send('server error')
    }
})

router.post("/", async function (req, res) {
    console.log(req.body);
    const { by_name,to_name,by_email,to_email,by_number,to_number,time } = req.body
    try {
        const request = await new Requests({
            by_name,
            by_email,
            by_number,
            to_email,
            to_name,
            to_number,
            time
        })

        
        await request.save()
        res.status(200).json({
            msg: "request saved"
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).send('server error')
    }
})

module.exports = router