const express = require("express");
const mongoose = require('mongoose');
const flightRoutes = require('./Routes/flightRoute');
const userRoutes = require('./Routes/userRoute');
const  nodemailer = require('nodemailer');
const cors = require('cors')
require('dotenv').config();
const app = express();
const port = process.env.PORT || "8000";
const smtpTransport = require('nodemailer-smtp-transport');

const MongoURI  = process.env.MONGOLAB_URI ;


mongoose.connect(MongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(result =>console.log("MongoDB is now connected") )
.catch(err => console.log(err));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())



app.use('/user',userRoutes);
app.use('/admin',flightRoutes);




app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
  });