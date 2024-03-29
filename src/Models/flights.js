const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const flightsSchema = new Schema({
    Flight_number: {
    type: String,
    required: true,
    unique : true 
  },
  Departure_time: {
    type: String,
    required: true
  },
  Arrival_time: {
    type: String ,
    required: true,
  },
  Number_of_Economy_Seats: {
    type: Number,
    required: true
  },
  Number_of_Business_Class_Seats: {
    type: Number,
    required: true
  },
  Availlable_Number_of_Business_Class_Seats: {
    type: Number,
    required: true
  },
 Availlable_Number_of_Economy_Seats: {
    type: Number,
    required: true
  },
  Arrival_airport: {
    type: String,
    required: true
  },
  Departure_airport: {
    type: String,
    required: true
  },
  Arrival_date: {
    type: Date,
    required: true
  },
 Departure_date: {
    type: Date,
    required: true
  },
  Economy_price :{
    type: String,
    required: true
  },
  flight_duration : {
    type: String,
    required: true
  },
  Baggage_allowance : {
    type: String,
    required: true
  },
  Seats_Economy:[{
  
  }],
  Seats_Bussiness:[{
   
  }],
  booked:{//to know whether a booking happend in this flight or not //
 type:String ,
 default:"false"
  },
  Bussiness_price :{
    type: String,
    required: true
  }

}, { timestamps: true });

const Flights = mongoose.model('Flights', flightsSchema);
module.exports = Flights;