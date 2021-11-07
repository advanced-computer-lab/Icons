const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  FirstName: {
    type: String,
    required: true,
  },
  LastName: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
    unique:true 
  },

  HomeAddress: {
    type: String,
    required: true
  },
  PassportNumber: {
    type: String,
    required: true,
    unique:true 
  },

  PhoneNumber: [{
    type: String,
    required: true
  }],
  UserName : {
    type: String,
    required: true,
    unique:true
  },
  Password : {
    type: String,
    required: true,
   
  }
  
}, { timestamps: true });

const User = mongoose.model('User', userSchema);
module.exports = User;