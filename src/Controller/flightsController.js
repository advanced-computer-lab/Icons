const Flights = require('../Models/flights');
//create , serach , edit , delete , show all //
const Seats = require('../Models/seats');
var temp ;
var temp1;
var temp2;
var flno;
//CREATE FLIGHT //
const flight_create = (req, res) => {

    const flights= new Flights({
    
        Flight_number: req.body.Flight_number,
        Departure_time: (req.body.Departure_time),
        Arrival_time:(req.body.Arrival_time) ,
        Number_of_Economy_Seats: Number(req.body.Number_of_Economy_Seats),
        Number_of_Business_Class_Seats: Number(req.body.Number_of_Business_Class_Seats),
        Arrival_airport: req.body.Arrival_airport,
        Departure_airport: req.body.Departure_airport,
        Departure_date: Date.parse(req.body.Departure_date),
        Arrival_date: Date.parse(req.body.Arrival_date)
        
        
     } )
     temp1 = Number(req.body.Number_of_Economy_Seats)
     temp2 = Number(req.body.Number_of_Business_Class_Seats)
      flno = req.body.Flight_number
    flights.save()
      .then(result => {
        res.send(result);
        res.status(200)
      })
      .catch(err => {
        console.log(err);
        console.log(req.body)
        console.log('hello')
       
      });
  }




//SEARCH FOR SPECIFIC FLIGHT //
  const flight_find = (req, res) => {
  
  if(req.body.Number_of_Business_Class_Seats ==''){
    delete req.body.Number_of_Business_Class_Seats
  }
  if(req.body.Number_of_Economy_Seats ==''){
    delete req.body.Number_of_Economy_Seats
  }
  if(req.body.Flight_number ==''){
    delete req.body.Flight_number
  }
  if(req.body.Arrival_date==''){
    delete req.body.Arrival_date
  }
  if(req.body.Arrival_time==''){
    delete req.body.Arrival_time
  }
  if(req.body.Departure_airport==''){
    delete req.body.Departure_airport
  }
  if(req.body.Arrival_airport==''){
    delete req.body.Arrival_airport
  }
  if(req.body.Departure_time==''){
    delete req.body.Departure_time
  }
  if(req.body.Departure_date==''){
    delete req.body.Departure_date
  }
   
   Flights.find(req.body)








   
   .then(result => { 
      res.send(result)
      res.status(200)
        console.log(result)
        console.log(req.body)
       temp = result ;
    })
    .catch(err => {
        console.log(err)
        
    });
  }
// SHOW ALL AVAILLABLE FLIGHTS//
  const flight_findall = (req, res) => {
    Flights.find().then(result => {
         res.send(result)
         res.status(200)
     })
     .catch(err => {
         console.log(err)
     });
   }


   const flight_findall2 = ( req,res) => {
    
    res.send(temp);
   }


//update flight //
  const update_flight = (req,res)=>{
    Flights.findByIdAndUpdate(req.params.id,req.body).then(result =>{
      
        //   res.send(result)
        res.status(200).send("flight updated ");
        console.log('The flight is Updated successfully !' );
    }).catch(err => {
        console.log(err);
        
      });

  };

  //Deleting an existing flight //
  const delete_flight = (req,res)=>{
  Flights.findByIdAndRemove(req.params.id).then(result =>{

        res.status(200).send("flight Deleted ");
        console.log("The flight is deleted successfully !");
    }).catch(err => {
        console.log(err);
      });

  };

const flight_info = (req,res) =>{
  Flights.findById(req.params.id).then(result =>{
    res.send(result)
    res.status(200)
  }).catch(err =>{
     console.log(err);
  });
};


module.exports = {
    flight_create,
    flight_find,
    flight_findall,
    delete_flight,
    update_flight,
    flight_info,
    flight_findall2
 
  }

