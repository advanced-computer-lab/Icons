const Flights = require('../Models/flights');
//create , serach , edit , delete , show all //




//CREATE FLIGHT //
const flight_create = (req, res) => {
  console.log(req.body)
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
      
    flights.save()
      .then(result => {
        res.send(result);
      })
      .catch(err => {
        console.log(err);
        console.log(req.body)
        console.log('hello')
       
      });
  }

//SEARCH FOR SPECIFIC FLIGHT //
  const flight_find = (req, res) => {
   Flights.find({   Flight_number: req.body.Flight_number,
     Departure_time: (req.params.Departure_time),
     Arrival_time:(req.params.Arrival_time),
     Arrival_airport: req.body.Arrival_airport ,
     Departure_airport: req.body.Departure_time  ,
     Departure_date: Date.parse(req.params.Departure_date),
      Arrival_date: Date.parse(req.params.Arrival_date)
      }).then(result => {
    //   res.send(result)
    console.log(result)
    })
    .catch(err => {
        console.log(err)
    });
  }
// SHOW ALL AVAILLABLE FLIGHTS//
  const flight_findall = (req, res) => {
    Flights.find().then(result => {
         res.send(result)
     })
     .catch(err => {
         console.log(err)
     });
   }


  //  const flight_update = (req, res) => {
  //   const id = req.params.id;
  //   User.findById(id).update({Name :'SALAH'})
  //     .then(result => {
  //       res.redirect('/all');
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // }




module.exports = {
    flight_create,
    flight_find,
    flight_findall
   
    
  }

