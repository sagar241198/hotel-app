const mongoose = require('mongoose');
const env = require('dotenv').config();

mongoose.connect(process.env.DATABASE,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log("database is connected");
    }).catch(() => {
        console.log("database is not connected");
    })

