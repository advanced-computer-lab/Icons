const Users = require('../Models/users');
const Flights = require('../Models/flights');
const Seats = require('../Models/seats');
const Reservations = require('../Models/reservations');

const update_user = (req,res)=>{
    Users.findByIdAndUpdate(req.params.id,req.body).then(result =>{
      
       
        res.status(200).send("user info updated ");
        console.log('User is Updated successfully !' );
    }).catch(err => {
        console.log(err);
        
      });

  };
  const user_info = (req,res) =>{
    Users.findById(req.params.id).then(result =>{
      res.send(result)
      res.status(200)
    }).catch(err =>{
       console.log(err);
    });
  };
  const user_summary_helper5 = async (req,res) =>{ 

    Seats.find({user_id :carla,Flight_number:flightno2}).then(result => {
      helper3 = result ;
  console.log("CARALLAAAA");
  console.log(result.length)
        for(var jjj=0; jjj<result.length;jjj++){
          
          x[jjj] = (result[jjj].seat_row +""+result[jjj].seat_number )
          x_id[jjj]= (result[jjj].seat_id)
          }
    Seats.find({user_id :carla,Flight_number:flightno1}).then(result => {
      helper4 = result ;
      console.log(result.length)
    
          for(var jj=0; jj<result.length;jj++){
          
          y[jj] = (result[jj].seat_row +""+result[jj].seat_number )
          y_id[jj]= (result[jj].seat_id)
          }
    Flights.find({Flight_number:flightno2}).then(result => {
      helper2 = result ;
   
    
    Flights.find({Flight_number:flightno1}).then(result => {
      helper1 = result ;
  
 
 
const reservations = new Reservations ({ User_id : carla ,
  Departure_Flight_number:(flightno1),
  Return_Flight_number:flightno2,
  Departure_Flight_Departure_time:helper1[0].Departure_time,
  Departure_Flight_Arrival_time: helper1[0].Arrival_time ,
  Departure_Flight_Arrival_date: helper1[0].Arrival_date,
  Departure_Flight_Departure_date:(helper1[0].Departure_date),
  Cabin:cabin,
  Return_Flight_Arrival_airport:helper2[0].Arrival_airport,
  Return_Flight_Departure_airport:helper2[0].Departure_airport,
  Return_Flight_Arrival_date:(helper2[0].Arrival_date),
  Return_Flight_Departure_date:(helper2[0].Departure_date),
  total_price :pricy,
  booking_number:booking_number,
  Departure_Flight_Arrival_airport:helper1[0].Arrival_airport,
  Departure_Flight_Departure_airport:helper1[0].Departure_airport,
  Return_Flight_Arrival_time: helper2[0].Arrival_time,
  Return_Flight_Departure_time:helper2[0].Departure_time,
  Departure_seats :y ,

    Departure_seats_id :  y_id,
     
    Return_seats_id: x_id ,

    Return_seats :x
        
   


})
})
reservations.save()
.then(result => {
  helper5 = result._id

 res.send(result._id)


})
})
})
})
}

const user_summary_helper6 = (req,res) =>{ 
  console.log(helper5)
  Reservations.find({_id:helper5}).then(result => {
console.log(megan)
    megan = result 
    res.send(result)
    
    
    })
}
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
module.exports = {
  update_user,
  user_info ,
  user_summary_helper5  ,
       user_summary_helper6 ,
       send_mail
}