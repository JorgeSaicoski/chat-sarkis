const express = require('express');
const router = express.Router()
import {User} from "../models/users";
const jwt = require('jsonwebtoken')

router.get('/', )

router.post('/register',async (req, res) => {
    try {
        const user = await User.create({
            name: req.body.name
            email: req.body.email
            password: req.body.password
        })
        res.status(200).json(messages)
    } catch (err){
        console.log(err)
        res.status(404).json({message:error.message})
    }

})

router.post('/login',async (req, res) => {
    try {
        const user = await User.findOne({
            $or:[
                {email: req.body.login},
                {name: req.body.login}
            ]
        })
        if (user){
            if (user.password === req.body.password){
                const token = jwt.sign({
                    name: user.name,
                    email: user.email
                }, 'tU0a3%5w4w!3&*u18*sw')
                res.status(200).json(token)
            } else {
                res.status(404, {message:"Wrong Password"})
            }
        } else {
            res.status(404, {message:"Create a account"})
        }
    } catch (err){
        console.log(err)
        res.status(404).json({message:error.message})
    }

})

module.exports = router