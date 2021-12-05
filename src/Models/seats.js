const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const seatsSchema = new Schema({
    Flight_number: {
    type: String,
    required: true

  },
  Category:{
      type:String
  },

user_id :{
    type: String
},
 seat_id : {
     type :  Number
 },
 seat_number:{
   type:Number
 },
 seat_row :{
 type:String
 },
 
}, { timestamps: false });

const Seats = mongoose.model('Seats', seatsSchema);
module.exports = Seats;
