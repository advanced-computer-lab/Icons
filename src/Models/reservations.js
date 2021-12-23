const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reservationsSchema = new Schema({
   User_id :{
       type:String,
       required:true
   },
    
    Departure_Flight_number: {
    type: String,
    required: true

  },
  Return_Flight_number: {
    type: String,
    required: true
  },
  Departure_Flight_Departure_time: {
    type: String,
    required: true
  },
  Return_Flight_Departure_time: {
    type: String,
    required: true
  },
 Return_Flight_Arrival_time: {
    type: String ,
    required: true,
  },
  Departure_Flight_Arrival_time: {
    type: String ,
    required: true,
  },
  Departure_Flight_Arrival_date: {
    type: Date,
    required: true
  },
  Departure_Flight_Departure_date: {
    type: Date,
    required: true
  },
  Cabin: {
    type: String,
    required: true
  },
 Departure_Flight_Arrival_airport:{
  type: String,
  required: true
  },
  Departure_Flight_Departure_airport:{
    type: String,
    required: true
    },

 
 Return_Flight_Arrival_airport: {
    type: String,
    required: true
  },
  Return_Flight_Departure_airport: {
    type: String,
    required: true
  },
  Return_Flight_Arrival_date: {
    type: Date,
    required: true
  },
  Return_Flight_Departure_date: {
    type: Date,
    required: true
  },
  total_price :{
    type: String,
    required: true
  },
  Departure_seats :[{
      
  
  
      
  }],

  Departure_seats_id :[{
    // type: String,
    // required: true
  }],
  Return_seats_id: [{
    // type: String,
    // required: true
  }],

  Return_seats :[{
      

}],
  booking_number:{
      type:String,
      required:true
  }
}, { timestamps: true });

const Reservations = mongoose.model('Reservations', reservationsSchema);
module.exports = Reservations;