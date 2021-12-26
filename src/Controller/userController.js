const User = require('../models/Users');

// const user_create = (req, res) => {
//     const user= new User({
//         FirstName:"Administrator",
//         LastName:"Administrator",
//         Email:"Administrator",
//         PassportNumber:"Administrator",
//        HomeAddress:"Administrator",
//        CountryCode:"Administrator",
//        PhoneNumber:"Administrator",
//        UserName:"Administrator",
//        Password:"Administrator"

//       })
//     user.save()
//       .then(result => {
//         res.send(result);
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   }





//   module.exports = {
//     user_create
  // }

  const update_user = (req,res)=>{
    User.findByIdAndUpdate(req.params.id,req.body).then(result =>{
      
       
        res.status(200).send("user info updated ");
        console.log('User is Updated successfully !' );
    }).catch(err => {
        console.log(err);
        
      });

  };
  const user_info = (req,res) =>{
    User.findById(req.params.id).then(result =>{
      res.send(result)
      res.status(200)
    }).catch(err =>{
       console.log(err);
    });
  };

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'youremail@gmail.com',
    pass: 'yourpassword'
  }
});

var mailOptions = {
  from: 'youremail@gmail.com',
  to: 'myfriend@yahoo.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

module.exports = {

  update_user,
  user_info ,


}

const guest_summary=  async (req,res)=>{
  const seating3 = await Flights.find({Flight_number: flightno1})  
  . then(result => { 
if(cabin == "Economy"){
     pricy = Number(temp7) * Number(result[0].Economy_price);   
 //    pricy = pricy *2;
}
else {
 pricy = Number(temp7) * Number(result[0].Bussiness_price); 
//  pricy = pricy *2;
}

})
const seating4 = await Flights.find({Flight_number: req.params.id})  
. then(result => { 
if(cabin == "Economy"){
   pricy = Number(temp7) * Number(result[0].Economy_price)  + pricy;  
  // pricy = pricy *2; 
}
else {
pricy = Number(temp7) * Number(result[0].Bussiness_price)  + pricy ; 
// pricy = pricy *2;
}
pricy = pricy + "";

})

  var x   = [];

  console.log("HELLOOOO")
  console.log(pricy);
  
  const seating = await Flights.find({Flight_number: flightno1},{ Bussiness_price :0,flight_duration :0,Economy_price :0, Availlable_Number_of_Economy_Seats:0, Availlable_Number_of_Business_Class_Seats:0, __v:0,createdAt:0,updatedAt:0,Number_of_Business_Class_Seats:0,_id:0})  
  . then(result => { 

 x[0] = result[0];


})
const seating2 = await Flights.find({Flight_number:  req.params.id},{ Bussiness_price :0,flight_duration :0,Economy_price :0, Availlable_Number_of_Economy_Seats:0, Availlable_Number_of_Business_Class_Seats:0, __v:0,createdAt:0,updatedAt:0,Number_of_Business_Class_Seats:0,_id:0})  .then(result => {

const xxx = [{Flight_number:flightno1 , Cabin:cabin , Departure_time:x[0].Departure_time,Arrival_time:x[0].Arrival_time,Departure_date:x[0].Departure_date,Arrival_date:x[0].Arrival_date,Departure_airport:x[0].Departure_airport,Arrival_airport:x[0].Arrival_airport ,total_price:pricy},
            {Arrival_time:result[0].Arrival_time,Flight_number:req.params.id , Cabin:cabin , Departure_time:result[0].Departure_time,Departure_date:result[0].Departure_date, Arrival_date:result[0].Arrival_date,Departure_airport:result[0].Departure_airport,Arrival_airport:result[0].Arrival_airport  , total_price:pricy}]


  res.send(xxx)  ;
 

})
}

const deparute_flightno = (req,res)=>{ // SAVE DEPARTURE FLIGHT NUMBER //
  flightno1 = req.params.id

 
}
const return_flightno = (req,res)=>{ // SAVE RETURN FLIGHT NUMBER //
  flightno2 = req.params.id
 
 
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
    
              temp11 = result ;
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
              
              
                  temp11 = result ;
              })
              .catch(err => {
                  console.log(err)
                  
              });
        }


    }


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