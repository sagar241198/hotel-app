const jwt = require('jsonwebtoken');
const cookies = require('cookie-parser');
const env = require('dotenv').config();
exports.requireSignIn = (req, res, next) => {
   
    if(req.cookies.tokenId){
       
        const token =req.cookies.tokenId;
        const user = jwt.verify(token, process.env.SECRETE_KEY);
        // console.log(user)
        req.user = user;
      
    }else{
        return res.status(400).json('Authorization is required')
    }
    next();
}