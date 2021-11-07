const express = require("express");
const app = express();
const cors= require ('cors');
const mongoose = require('mongoose');

app.use(cors())
app.options('*',cors)
const port = process.env.PORT || "8000";


const MongoURI = 'mongodb+srv://test123:test123@cluster0.nf446.mongodb.net/AdvancedComputerLab?retryWrites=true&w=majority' ;



mongoose.connect(MongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(result =>console.log("MongoDB is now connected") )
.catch(err => console.log(err));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())

const flightRoutes = require('./Routes/flightRoute');


app.use('/admin',flightRoutes);


app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
  });