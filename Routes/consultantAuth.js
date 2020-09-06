const express = require("express");
const router = express.Router();
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const Consultant = require('../models/Consultant')
const { check, validationResult } = require('express-validator');
const checkToken = require('../middleware/auth')
const config = require('config');
const secret = config.get('secret');
// post
// /api/auth
// public
router.post("/", [
    check('email').isEmail(),
    check('password').isLength({ min: 3 })
],
    async (req, res) => {
        const { email, password } = req.body;
        let consultant = await Consultant.findOne({ email })

        if (!consultant) {
            return res.status(400).json({
                msg: `invalid details`
            })
        }
        let findPass = await bcrypt.compare(password, consultant.password);
        if (!findPass) {
            return res.status(400).json({
                msg: `invalid details`
            })
        }
        const token = jwt.sign({
            data: consultant.id
        }, secret, {
            expiresIn: 360000
        })
        return res.json({
            msg: `consultant saved sucessfully`,
            token: token
        });

    })


// get
// /api/auth
// private
router.get("/", checkToken, async (req, res) => {


    try {
        let consultant = await Consultant.findOne({ _id: req.decoded.data }).select("-password");

        return res.json({ consultant })
    }
    catch (error) {
        return res.status(400).json({
            msg: 'Wrong Token'
        })

    }
})

module.exports = router