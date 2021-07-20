const express = require('express');
const newUser = require('../model/user');
const bcrypt = require('bcrypt');
const env = require('dotenv').config();
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const newBooking = require('../model/Booking')
const newReviews = require('../model/Reviews');
const { requireSignIn } = require('../commonMiddleWare/index')
const AuthRoutes = express.Router();

AuthRoutes.post('/userResister', (req, res) => {
    const { name, email, password } = req.body;
    newUser.findOne({ email }).exec((err, userExist) => {
        if (userExist) {
            res.status(400).json({ message: "user already exist" })
        } else {
            const newuser = new newUser({ name, email, password })
            newuser.save((err, data) => {
                if (err) {
                    res.status(400).json({ error: err })
                } else {
                    res.status(200).json({ data: data });
                }
            })
        }
    })
});
AuthRoutes.post('/userLogin', (req, res) => {
    const { email, password } = req.body;
    newUser.findOne({ email }).exec((err, data) => {
        if (err || !data) {
            return res.status(400).json({ message: "User Doen not exist" })
        } else {
            const isTrue = bcrypt.compareSync(password, data.hash_password)
            if (isTrue) {
                let token = jwt.sign({ id: data._id }, process.env.SECRETE_KEY, { expiresIn: '1d' });
                // console.log(token)
                res.cookie("tokenId", token, { expires: new Date(Date.now() + 25892000), httpOnly: true })
                return res.status(200).json({ message: "SignIn successfull" });
            } else {
                return res.status(401).json({ message: "email or password is inccorect" });
            }
        }
    })
});
AuthRoutes.post('/logout',(req,res)=>{
    res.clearCookie('tokenId',{ domain :"localhost"});
    res.status(200).send('You have LogOut Now')
});
AuthRoutes.post('/booking', requireSignIn, (req, res) => {
    newUser.findOne({ _id: req.user.id }).exec((err, user) => {
        if (err) {
            res.status(400).json({ message: "plz Login or create an account" })
        } else {
            const { name, email, number, RoomSuit, Bed, CheckIn, CheckOut } = req.body
            const booked = new newBooking({
                user: req.user.id,
                name, email, number, RoomSuit, Bed, CheckIn, CheckOut
            })
            booked.save((err, data) => {
                if (err) {
                    res.status(401).json({ message: "somthing hass error" })
                } else {
                    res.status(200).json(data);
                }
            })
        }
    })
});

AuthRoutes.post('/reviews', requireSignIn, (req, res) => {
    const { name, review } = req.body;
    const Reviews = new newReviews({
        user: req.user.id,
        name, review
    });
    Reviews.save((err, data) => {
        if (err) {
            res.status(400).json({ message: "somthing hass error" })
        } else {
            res.status(200).json({ message: data })
        }
    })
})

AuthRoutes.post('/get_reviews',(req,res)=>{
    newReviews.find().exec((err,data)=>{
        if(err){
            res.status(400).json({ message: "somthing hass error" })
        }else{
            res.status(200).json(data);
        }
    })
})

AuthRoutes.get('/Booking_info',requireSignIn,(req,res)=>{
    newBooking.find({user:req.user.id}).exec((err,data)=>{
        if(err){
            res.status(400).json({ message: "You have not booked yet...!" })
        }else{
            res.status(200).json(data);
        }
    })
})
AuthRoutes.post('/Booking_Cancel',(req,res)=>{
    newBooking.findOneAndDelete({_id:req.body.itemId}).exec((err,data)=>{
        if(err){
            res.status(400).json({ message: "sorry some error is there in server" })
        }else{
            res.status(200).json({message:"deletion done"});
        }
    })
})
module.exports = AuthRoutes;