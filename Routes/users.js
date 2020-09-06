const express = require("express");
const router = express.Router();
const User = require('../models/User')
const Token = require('../models/Token')
const bcrypt = require('bcrypt')
const crypto = require('crypto')
const nodemailer = require('nodemailer')
const { check, validationResult } = require('express-validator');
const sendgridTransport = require("nodemailer-sendgrid-transport");
const cloudinary = require("cloudinary").v2;
require('dotenv').config()


cloudinary.config({
    cloud_name: process.env.CLOUD_NAME_CLOUDINARY,
    api_key: process.env.API_KEY_CLOUDINARY,
    api_secret: process.env.API_SECRET_CLOUDINARY
})


router.post("/", [
    check('name', 'Name connot be blank').not().isEmpty(),
    check('email', 'Email cannot be blank').isEmail(),
    check('password', 'Password must be at least 3 characters long').isLength({ min: 3 }),
    check('phone', 'Phone Number is not valid').isMobilePhone(),
],

    // cloudinary configuration

    async (req, res) => {
        const errors = await validationResult(req);
        console.log(errors)

        if (!errors.isEmpty()) {
            return res.status(400).json({
                msg: 'Password must be at least 8 characters long OR Email/Phone should be valid ',
                errors: errors.array()
            })
        }
        const { name, email, password, phone, displayPicture } = req.body

            
        try {

            let user = await User.findOne({ email });
            if (user) {
                if (user.isVerified === true) {
                    return res.status(400).json({
                        msg: 'User already exists'
                    })
                }

            }
            let user2 = await User.findOne({ phone });
            if (user2) {
                if (user2.isVerified === true) {
                    return res.status(400).json({
                        msg: 'User already exists'
                    })
                }

            }
            user = await new User({
                name,
                email,
                password,
                phone,
                displayPicture

            })
            // cloudinary.uploader.upload(displayPicture, { public_id: email })
            //     .then((result) => {
            //         response.status(200).send({
            //             message: "success",
            //             result,
            //         });
            //     }).catch((error) => {
            //         response.status(500).send({
            //             message: "failure",
            //             error,
            //         });
            //     });
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(password, salt);

            await user.save();


            let token = await new Token({
                _userID: user._id,
                token: crypto.randomBytes(5).toString('hex')
            })
            await token.save()

            //sending verification code
            const transporter = nodemailer.createTransport(
                sendgridTransport({
                    auth: {
                        api_key: "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",
                    },
                })
            );

            var mailOptions = {
                from: "arihantsingla2020@gmail.com",
                to: `${email}`,
                subject: "Email Verification",
                text: "That was easy!",
                html: "<div style =" +
                    "width:100%; height:100%;  " +
                    "><h1 style=" +
                    "font-weight:500>Hey, " +
                    name +

                    "<br>Welcome to Consultants Service </h1><h1>Thanks for Signing up on our app</h1><h3>Your Code for verification is : " + token.token + " </h3></div><p>If this request is not made by you kindly ignore this mail.</p><p>Regards, <strong>Team E-Consultancy</strong></p>",

            };

            transporter.sendMail(mailOptions, function (error) {
                if (error) {
                    User.deleteOne({ email })
                    console.log(error)
                    return res.status(400).json({ msg: 'try again' });
                } else {
                    console.log("Email sent: ", token.token);
                    res.status(200).json('A verification email has been sent to ' + user.email + '.');
                }
            })
        }
        catch (err) {
            console.log(err);
            return res.status(422).json(err)

        }


    })

module.exports = router;
