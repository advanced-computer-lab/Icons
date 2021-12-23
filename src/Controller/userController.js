const Users = require('../Models/users');
const Flights = require('../Models/flights');

const Reservations = require('../Models/reservations');
const  nodemailer = require('nodemailer');
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
require('dotenv').config();
var temp;
var temp1;
var temp2;
var temp3;
var temp4;
var temp5 ;
var temp7 ;
var flightno1;
var flightno2;
var cabin;
var loggedin;
var carla;
var helper1;
var helper2;
var helper5;
var x = [] 
var x_id = []
var y = [] 
var y_id = []
var dep_chosen_id = []
var dep_chosen = []
var return_chosen = []
var return_chosen_id = []
var megan;
var mail_user ;
var temp100;
var no_of_availlable_seats;
var no_of_availlable_seats2;
var  booking_number;
var pricy = 0;
booking_number =   Math.floor(100000 + Math.random() * 900000);
booking_number = booking_number + ""

const user_flight_find = (req, res) => {

  temp5 = false; 
    temp1 = req.body.Arrival_airport;
    temp2 = req.body.Departure_airport;
    temp3 = req.body.Arrival_date;
    temp4 = req.body.Arrival_time;

  
    if(req.body.Number_of_Business_Class_Seats ==''){
      // delete req.body.Number_of_Business_Class_Seats
     temp5=true;
    }
  
    if(temp5 ===true){
        temp7 = req.body.Number_of_Economy_Seats;
        cabin='Economy'
    }
    else {
        temp7 = req.body.Number_of_Business_Class_Seats;
        cabin = 'Bussiness'

    }
   
console.log(temp7);   
  
   
   if(temp5 ==true)
   
    Flights.find({     Departure_airport: req.body.Departure_airport,
      Arrival_airport : req.body.Arrival_airport,
     Departure_date: req.body.Departure_date,
     Arrival_date:req.body.Arrival_date,
     Availlable_Number_of_Economy_Seats:{$gte:req.body.Number_of_Economy_Seats }
      
     })

  
     .then(result => { 
        res.send(result)
        res.status(200)
     
          temp = result ;
      })
      .catch(err => {
          console.log(err)
          
      });
      else {
        Flights.find({     Departure_airport: req.body.Departure_airport,
          Arrival_airport : req.body.Arrival_airport,
         Departure_date: req.body.Departure_date,
         Arrival_date:req.body.Arrival_date,
         Availlable_Number_of_Business_Class_Seats :{$gte : req.body.Number_of_Business_Class_Seats}
          
         })
    
      
         .then(result => { 
            res.send(result)
            res.status(200)

              temp = result ;
          })
          .catch(err => {
              console.log(err)
              
          });
      }
    }
    const user_search_result= ( req,res) => {

        res.send(temp);
       }



       const user_search_result_return = (req,res) =>{ 
         

  if(temp5 ===true){

  


        Flights.find({ 
    
            Departure_airport: temp1,
            Arrival_airport : temp2,
           Departure_date: {$gt :temp3},
           Availlable_Number_of_Economy_Seats:{$gte : temp7}
           

            

        })   .then(result => { 
            res.send(result)
            res.status(200)
    
         
           flightno2 =   result.Flight_number
          })
          .catch(err => {
              console.log(err)
              
          });

          }


        
        else {
            
            Flights.find({ 
                Departure_airport: temp1,
                Arrival_airport : temp2,
               Departure_date: {$gt :temp3},
               Availlable_Number_of_Business_Class_Seats:{$gte : temp7}
    
            })   .then(result => { 
                res.send(result)
                res.status(200)
              

              })
              .catch(err => {
                  console.log(err)
                  
              });
        }


    }


  


      // const user_Reservations_info= (req,res) =>{ 
    
      //   Reservations.find({_id
      //     :req.params.id}).then(result =>{
      //     res.send(result)
      //     res.status(200)
      //   }).catch(err =>{
      //      console.log(err);
      //   });
      //   }




        const send_mail = 
      
     
      
       
         async (req, res) => {
          const money = await Reservations.find({_id:req.params.id}).then(result => {
            console.log(result)
            console.log(result[0]._id)
              temp100 = result[0].total_price
          })
          const MAILING = await Users.find({_id:carla}).then(result => {
           
              mail_user = result[0].Email
          })
              
          console.log("hello")
          var transporter = nodemailer.createTransport( {
            host: "smtp-mail.outlook.com", // hostname
            secureConnection: false, // TLS requires secureConnection to be false
            port: 587, // port for secure SMTP
            tls: {
              ciphers:'SSLv3'
          },
            auth: {
                user: "projectacl@hotmail.com",
                pass: "Ultras2007"
            }
            
        });
        
          const msg = {
              from: 'projectacl@hotmail.com', // sender address
              to: mail_user, // list of receivers
            //  to:mail_user
              subject: "Cancelation", // Subject line
              text: "Unfourtanley  you canceled your reservation and these amount will be refunded back to you" + ""+ temp100 // plain text body
          }
          // send mail with defined transport object
          const info = await transporter.sendMail(msg);
        
          console.log("Message sent: %s", info.messageId);
            // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
        
            // Preview only available when sending through an Ethereal account
            console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
            // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
        
          res.send('Email Sent!')
        }

  
      

//_________________________________________________________________________________________________________________________//
const user_regisertaion = async(req,res) =>{
  try {
  const {FirstName,LastName,Email,HomeAddress ,PassportNumber,PhoneNumber,UserName, Password } = req.body;
  
  const oldUser = await Users.findOne({ Email });

  if (oldUser) {
    return res.status(409).send("User Already Exist. Please Login");
  }
  
 var  encryptedPassword = await bcrypt.hash(Password, 10);
 const user = await Users.create({
  FirstName,
  LastName,
  Email,
  HomeAddress ,
  PassportNumber,
  PhoneNumber,
  UserName,
  Password: encryptedPassword
});
const token = jwt.sign(
  { _id: user._id, Email },
  process.env.TOKEN_KEY,
  {
    expiresIn: "2h",
  }
);
console.log(token)
res.send(token)
  }
  catch(err) {

  }
}
//___________________________________________________________________________________________________________________///
const user_login = async(req,res)=>{
  try {
  const { UserName, Password } = req.body;
  const user = await Users.findOne({ UserName });
  if (user && (await bcrypt.compare(Password, user.Password))) {
    // Create token
    const token = jwt.sign(
      { _id: user._id,UserName},
      process.env.TOKEN_KEY,
      {
        expiresIn: "2h",
      }
    );

    res.send(user._id)
  }
  else {
  res.status(400).send("Invalid Credentials");
  }
} catch (err) {
  console.log(err);
}
}
//_____________________________________________________________________________________________________________________///
const user_change_password = async(req,res)=>{
 
try {

var pass_new = req.body.NewPassword ;
var pass_old = req.body.Password;
const user = await Users.findOne({_id: req.params.id} );


if(user && (await bcrypt.compare(pass_old,user.Password))){
 
  var  encryptedPassword = await bcrypt.hash(pass_new, 10);  
  const user_new = await Users.findByIdAndUpdate({_id:req.params.id},{Password:encryptedPassword})

}
else {
  res.status(400).send("Invalid Credentials");
}


res.send("done!!!!!!!!!!")

}catch(err){

}
}
//_____________________________________________________________________________________________________________________///
const user_guest_summary = async (req,res)=>{

  try {
  
  var x = []
  var y = []
  console.log(temp7)
  const helper1 = await Flights.find({Flight_number:req.params.id}).then(result =>{
    x[0] = result[0];
    if(cabin == "Economy"){
      pricy = Number(temp7) * Number(result[0].Economy_price)  ;  
      console.log(pricy)
  }
  else {
  pricy = Number(temp7) * Number(result[0].Bussiness_price) ; 
 
  }
  })
  const helper2 =  await Flights.find({Flight_number:req.params.id2}).then(result =>{
    y[0] = result[0];

    if(cabin == "Economy"){
      pricy = Number(temp7) * Number(result[0].Economy_price)  + pricy;  

      
  }
  else {
  pricy = Number(temp7) * Number(result[0].Bussiness_price)  + pricy ; 
 
  }


  })
  pricy = pricy + ""
  console.log(pricy)
  const xxx = [{Flight_number:req.params.id , Cabin:cabin , Departure_time:x[0].Departure_time,Arrival_time:x[0].Arrival_time,Departure_date:x[0].Departure_date,Arrival_date:x[0].Arrival_date,Departure_airport:x[0].Departure_airport,Arrival_airport:x[0].Arrival_airport ,total_price:pricy},
  {Arrival_time:y[0].Arrival_time,Flight_number:req.params.id2 , Cabin:cabin , Departure_time:y[0].Departure_time,Departure_date:y[0].Departure_date, Arrival_date:y[0].Arrival_date,Departure_airport:y[0].Departure_airport,Arrival_airport:y[0].Arrival_airport  , total_price:pricy}]
     res.send(xxx)  ;
  }
  catch(err){
 console.log(err)
  }

}


// _________________________________________________________________________________________________________________________-//
const user_seats = async (req,res)=>{ // send number of pasengers to know number of seats which will be reserved //
  try {
  res.send(temp7);
  }
  catch(err){
console.log(err)
  }
 }


const Flight_Departure_seats = async (req,res) =>{
  try {
    // var selectedbyuser = []
    // const res = await Reservations.find({User_id:req.params.user_id}).then(result =>{
    //   selectedbyuser[0] = result[0].Departure_seats_id
    // })
    if(cabin == 'Economy'){
const seats = await Flights.find({Flight_number:req.params.id}).then(result =>{


   res.send(result[0].Seats_Economy);
})

    }
    else {
      const seats = await Flights.find({Flight_number:req.params.id}).then(result =>{
     //   console.log(result[0].Seats_Bussiness[0][1])
    //  result[0].Seats_Bussiness[0][1]={id: 2, number: 2, isSelected: false, isReserved: true}
     console.log(result[0].Seats_Bussiness[0][1])
//  console.log(result[0].Seats_Bussiness)
res.send(result[0].Seats_Bussiness);
    
       
   })
  }
   

  }
  catch (err){
    console.log(err)
  }
}
// _____________________________________________________________________________________________________________________//


const Flight_Return_seats = async (req,res) =>{
  try {
    
    if(cabin == 'Economy'){
const seats = await Flights.find({Flight_number:req.params.id2}).then(result =>{
  // res.send(result[0].Seats_Bussiness[0]);
   res.send(result[0].Seats_Economy);
})

    }
    else {
      const seats = await Flights.find({Flight_number:req.params.id2}).then(result =>{
      //  console.log(result[0].Seats_Bussiness[0][0].id)
      //  console.log(dep_chosen_id)
      //  const x  = [1,4,5]
      //  if(x.includes(result[0].Seats_Bussiness[0][0].id)){
      //    console.log("HELLLLLLLOOOO")
      //  }
    //  result[0].Seats_Bussiness[0][1]={id: 2, number: 2, isSelected: false, isReserved: true}
    //  console.log(result[0].Seats_Bussiness[0][1])
//  console.log(result[0].Seats_Bussiness)

res.send(result[0].Seats_Bussiness);
    
       
   })
  }
   

  }
  catch (err){
    console.log(err)
  }
}


// ___________________________________________________________________________________________________________//

const user_save_seats_dep = async (req,res)=>{
try {
dep_chosen = req.body
console.log(req.body)
res.send(true)

}
catch (err){

}
}
// __________________________________________________________________________________________________________________//
const user_save_seats_dep_id= async (req,res)=>{
  try {
  dep_chosen_id = req.body
  console.log(req.body)
  res.send(true)
  
  }
  catch (err){
  
  }
  }
// ___________________________________________________________________________________________________________//
const user_save_seats_return_id = async (req,res)=>{
  try {
  return_chosen_id = req.body
  console.log(req.body)
  res.send(true)
  
  }
  catch (err){
  
  }
  }

// ___________________________________________________________________________________________________________//

const user_save_seats_return = async (req,res)=>{
  try {
  return_chosen = req.body
  console.log(req.body)
  res.send(true)
  
  }
  catch (err){
  
  }
  }



// ___________________________________________________________________________________________________________//

const user_final_summary = async (req,res)=>{ // final iternatiy
  try {
  console.log(true)  
    var x = []
    var y = []
    const helper1 = await Flights.find({Flight_number:req.params.id}).then(result =>{
      x[0] = result[0];
   
    })
    const helper2 =  await Flights.find({Flight_number:req.params.id2}).then(result =>{
      y[0] = result[0];
  
   
  
  
    })
   
  
    const xxx = [{Departure_Flight_number:req.params.id , Cabin:cabin , Departure_Flight_Departure_time:x[0].Departure_time,Departure_Flight_Arrival_time:x[0].Arrival_time,Departure_Flight_Departure_date:x[0].Departure_date,Departure_Flight_Arrival_date:x[0].Arrival_date,Departure_Flight_Departure_airport:x[0].Departure_airport,Departure_Flight_Arrival_airport:x[0].Arrival_airport ,total_price:pricy , dep_seats:dep_chosen,
    Return_Flight_Arrival_time:y[0].Arrival_time,Return_Flight_number:req.params.id2 , Cabin:cabin , Return_Flight_Departure_time:y[0].Departure_time,Return_Flight_Departure_date:y[0].Departure_date, Return_Flight_Arrival_date:y[0].Arrival_date,Return_Flight_Departure_airport:y[0].Departure_airport,Return_Flight_Arrival_airport:y[0].Arrival_airport  , total_price:pricy,return_seats:return_chosen,booking_number:booking_number}]
       res.send(xxx)  ;

  }
  catch (err){

  }
}

//___________________________________________________________________________________________________________________________________________________//

const user_save_reservation = async (req,res)=>{
  console.log("reservations i am heree")
  try {
    var x = []
    var y = []
    const helper1 = await Flights.find({Flight_number:req.params.id}).then(result =>{
      x[0] = result[0];
   
    })
    const helper2 =  await Flights.find({Flight_number:req.params.id2}).then(result =>{
      y[0] = result[0];
  
   
  
  
    })

    const reservations = await new Reservations ({ User_id : req.params.user_id ,
                                                  Departure_Flight_number:req.params.id ,
                                                  Return_Flight_number:req.params.id2,
                                                  Departure_Flight_Departure_time:x[0].Departure_time,
                                                  Departure_Flight_Arrival_time:x[0].Arrival_time,
                                                  Departure_Flight_Arrival_date:x[0].Arrival_date,
                                                  Departure_Flight_Departure_date:x[0].Departure_date,
                                                  Cabin:cabin,
                                                  Return_Flight_Arrival_airport:y[0].Arrival_airport,
                                                  Return_Flight_Departure_airport:y[0].Departure_airport,
                                                  Return_Flight_Arrival_date:y[0].Arrival_date,
                                                  Return_Flight_Departure_date:y[0].Departure_date,
                                                  total_price :pricy,
                                                  booking_number:booking_number,
                                                  Departure_Flight_Arrival_airport:x[0].Arrival_airport,
                                                  Departure_Flight_Departure_airport:x[0].Departure_airport,
                                                  Return_Flight_Arrival_time:y[0].Arrival_time,
                                                  Return_Flight_Departure_time:y[0].Departure_time,
                                                  Departure_seats:dep_chosen,
                                                  Departure_seats_id:dep_chosen_id,
                                                  Return_seats_id:return_chosen_id,
                                                  Return_seats:return_chosen

    })
    reservations.save().then(result =>{
      res.send(result)
    })
  }
  catch(err){
    console.log(err)
  }
}


//___________________________________________________________________________________________________________________________________________________//

const update_user = (req,res)=>{
  Users.findByIdAndUpdate(req.params.user_id,req.body).then(result =>{
    
     
      res.status(200).send("user info updated ");
      console.log('User is Updated successfully !' );
  }).catch(err => {
      console.log(err);
      
    });

};


// _________________________________________________________________________________________________________________________________________________//
const user_info = (req,res) =>{
  Users.findById(req.params.id).then(result =>{
    res.send(result)
    res.status(200)
  }).catch(err =>{
     console.log(err);
  });
};
//____________________________________________________________________________________________________________________________________________________//
  

const adjust_seats = async (req,res) => {
  try {
    if(cabin == "Economy"){
   const seating = await Flights.findOneAndUpdate({Flight_number:req.params.id},{$inc : {Availlable_Number_of_Economy_Seats : -temp7}})
   const seating2 = await Flights.findOneAndUpdate({Flight_number:req.params.id2},{$inc : {Availlable_Number_of_Economy_Seats : -temp7}})

    }
    else {
      const seating = await Flights.findOneAndUpdate({Flight_number:req.params.id},{$inc : {Availlable_Number_of_Business_Class_Seats : -temp7}})
      const seating2 = await Flights.findOneAndUpdate({Flight_number:req.params.id2},{$inc : {Availlable_Number_of_Business_Class_Seats : -temp7}})
    }
    res.send(true)
  }
  catch (err){
    console.log(err)
  }
}
 
//___________________________________________________________________________________________________________________________________________________________//

const adjust_seats_db = async(req,res)=>{ //in db flights we will set all resrved seats to true (flag is reserved) and we will do another methpd if user tries to edit their selected seats by setting them to isselectd = true  //
  try {
    console.log("helllllo ist adjust seast db")
    var temp1 = 0;
    var temp2 =0;
    if(cabin =="Economy"){
      console.log("economy")
    const no =  await Flights.find({Flight_number:req.params.id}).then(result =>{
       temp1 = result[0].Number_of_Economy_Seats;

    })
    const no2 =  await Flights.find({Flight_number:req.params.id2}).then(result =>{
      temp2 = result[0].Number_of_Economy_Seats;

   })
   console.log(temp1 + " " + temp2)
   console.log(dep_chosen_id)

   const rows = []
   const rows2 = []
   var x = [] 
   var x2 = []
   var l =0;
   var n=0;
   var ll =0;
   var nn=0;
  var j = 1;
  var jj=1;
 
   for(var i = 1 ; i <= temp1 ;i++){
     n++;
     if(l==2){
       i--;
       x.push(null)
       l=0;
       continue ;
     }
 if(dep_chosen_id.includes(i)==true){
  x.push({id:i,number:j,isSelected:false,isReserved:true})
 }
 else {
  x.push({id:i,number:j,isSelected:false,isReserved:false})
 }
 
    j++;
    l++;
    if(n==8){
     j=1;
     rows.push(x);
     x = [] 
     n=0;
     l=0;
    }
   }
   if(x.length >0){
     rows.push(x);
    }
     for(var i = 1 ; i <= temp2 ;i++){
     nn++;
     if(ll==2){
       i--;
       x2.push(null)
       ll=0;
       continue ;
     }
     
     if(return_chosen_id.includes(i)==true ){
       console.log("we found a chosen seat")
      x2.push({id:i,number:jj,isSelected:false,isReserved:true})
     }
     else {
      x2.push({id:i,number:jj,isSelected:false,isReserved:false})
     }
 
      
     
 
    jj++;
    ll++;
    if(nn==8){
     jj=1;
     rows2.push(x2);
     x2 = [] 
     nn=0;
     ll=0;
    }
   }
   if(x2.length >0){
     rows2.push(x2);
    }
  const z = await  Flights.findOneAndUpdate({Flight_number:req.params.id},{Seats_Economy:rows}).then(result =>{
     
    })
  const z2 =  await  Flights.findOneAndUpdate({Flight_number:req.params.id2},{Seats_Economy:rows2}).then(result =>{
     
    })
    res.send(true)
  }
  else {

    const no =  await Flights.find({Flight_number:req.params.id}).then(result =>{
      temp1 = result[0].Number_of_Business_Class_Seats;

   })
   const no2 =  await Flights.find({Flight_number:req.params.id2}).then(result =>{
     temp2 = result[0].Number_of_Business_Class_Seats;

  })
  const rows = []
  const rows2 = []
  var x = [] 
  var x2 = []
  var l =0;
  var n=0;
  var ll =0;
  var nn=0;
 var j = 1;
 var jj=1;

  for(var i = 1 ; i <= temp1 ;i++){
    n++;
    if(l==2){
      i--;
      x.push(null)
      l=0;
      continue ;
    }
if(dep_chosen_id.includes(i)==true ){
 x.push({id:i,number:j,isSelected:false,isReserved:true})
}
else {
 x.push({id:i,number:j,isSelected:false,isReserved:false})
}

   j++;
   l++;
   if(n==8){
    j=1;
    rows.push(x);
    x = [] 
    n=0;
    l=0;
   }
  }
  if(x.length >0){
    rows.push(x);
   }
    for(var i = 1 ; i <= temp2 ;i++){
    nn++;
    if(ll==2){
      i--;
      x2.push(null)
      ll=0;
      continue ;
    }
    if(return_chosen_id.includes(i)==true ){
     x2.push({id:i,number:jj,isSelected:false,isReserved:true})
    }
    else {
     x2.push({id:i,number:jj,isSelected:false,isReserved:false})
    }

     
    

   jj++;
   ll++;
   if(nn==8){
    jj=1;
    rows2.push(x2);
    x2 = [] 
    nn=0;
    ll=0;
   }
  }
  if(x2.length >0){
    rows2.push(x2);
   }
 const z = await  Flights.findOneAndUpdate({Flight_number:req.params.id},{Seats_Bussiness:rows}).then(result =>{
    
   })
 const z2 =  await  Flights.findOneAndUpdate({Flight_number:req.params.id2},{Seats_Bussiness:rows2}).then(result =>{
    
   })
   res.send(true)
    

  }
    

  }
  catch (err){

  }

}


// ___________________________________________________________________________________________________________________________________//



const user_Reservations_info = async  (req,res) =>{ 
    
  Reservations.find({_id
    :req.params.id}).then(result =>{
    res.send(result)
    res.status(200)
  }).catch(err =>{
     console.log(err);
  });
  }

  // _________________________________________________________________________________________________________________________________//

 const user_Reservations = async (req,res) =>{ 
    
    Reservations.find({User_id:req.params.user_id}).then(result => {
    
      res.send(result)
      res.status(200)
    })
    .catch(err => {
      console.log(err)
    });
    }

    // _____________________________________________________________________________________________________________________________________//

const edit_dep_seats = async (req ,res) =>{

  // Flights.find({Flight_number:"A3",Seats_Economy:{$elemMatch:{$elemMatch:{id:200}}}}).then(result =>{
   
  //  console.log(result)
  //   res.send(result)
  // })
  // const rows = [
  //   [{ number: 1, isSelected: true }, {number: 2}, null, {number: '3', isReserved: true, orientation: 'east'}, {number: '4', orientation: 'west'}, null, {number: 5}, {number: 6}],
  //   [{ number: 1, isReserved: true }, {number: 2, isReserved: true}, null, {number: '3', isReserved: true, orientation: 'east'}, {number: '4', orientation: 'west'}, null, {number: 5}, {number: 6}],
  //   [{ number: 1 }, {number: 2}, null, {number: 3, isReserved: true, orientation: 'east'}, {number: '4', orientation: 'west'}, null, {number: 5}, {number: 6}],
  //   [{ number: 1 }, {number: 2}, null, {number: 3, orientation: 'east'}, {number: '4', orientation: 'west'}, null, {number: 5}, {number: 6}],
  //   [{ number: 1, isReserved: true }, {number: 2, orientation: 'east'}, null, {number: '3', isReserved: true}, {number: '4', orientation: 'west'}, null, {number: 5}, {number: 6, isReserved: true}]
  // ]
  // console.log(rows[0][0]=({ number: 1, isSelected: false }))
  // console.log(rows)
  // Flights.findOneAndUpdate({Flight_number:"A3"},{Seats_Economy:rows}).then(result =>{
  //   res.send(result)
  // })


}


module.exports = {
       user_flight_find,
       user_search_result,
       
       user_search_result_return,
    
       user_Reservations_info,
       send_mail,
   
       user_seats,
       user_regisertaion,
       user_login,
       user_change_password ,
       user_guest_summary ,
       Flight_Departure_seats ,
       Flight_Return_seats ,
       user_save_seats_return ,
       user_save_seats_return_id ,
       user_save_seats_dep ,
       user_save_seats_dep_id ,
       user_final_summary ,
       user_save_reservation ,
       update_user ,
       user_info ,
       adjust_seats  ,
       user_Reservations ,
       user_Reservations_info ,
       adjust_seats_db ,
       edit_dep_seats


      }