const { json } = require('express');
const express= require('express');
require('./Database/connect');
const newBooking = require('./model/Booking');
const AuthRoutes = require('./routes/Auth');
const env = require('dotenv').config();
const cookieParser = require('cookie-parser');
const app = express();

app.use(function(err,req,res,next){
    console.error(err.stack);
    res.type("text/plain")
    res.status(500);
    res.send("server not rechable 500")
})

app.use(json());
app.use(cookieParser());
app.use(AuthRoutes);
const PORT = process.env.PORT || 8000;
app.get('/',(req,res)=>{
    res.send("this is from server side")
});

if(process.env.MODE_ENV == "production"){
    app.use(express.static("hotel-app/build"));
}
app.listen(PORT,()=>{
    console.log(`server is running on port number ${port}`);
})