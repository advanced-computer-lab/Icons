const Flights = require('../Models/flights');
//create , serach , edit , delete , show all //
var temp ;

//CREATE FLIGHT //
const flight_create = async  (req, res) => {
  var temp1 =  Number(req.body.Number_of_Economy_Seats)
  var  temp2 = Number(req.body.Number_of_Business_Class_Seats)
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

     x.push({id:i,number:j,isSelected:false,isReserved:false})
    

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

     x2.push({id:i,number:jj,isSelected:false,isReserved:false})
    

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


//------------------------------------------------------------------------------------------------------//
     const flights =   await new Flights({
    
        Flight_number: req.body.Flight_number,
        Departure_time: (req.body.Departure_time),
        Arrival_time:(req.body.Arrival_time) ,
        Number_of_Economy_Seats: Number(req.body.Number_of_Economy_Seats),
        Number_of_Business_Class_Seats: Number(req.body.Number_of_Business_Class_Seats),
        Arrival_airport: req.body.Arrival_airport,
        Departure_airport: req.body.Departure_airport,
        Departure_date: Date.parse(req.body.Departure_date),
        Arrival_date: Date.parse(req.body.Arrival_date),
        Economy_price :req.body.Economy_price,
        Baggage_allowance :req.body.Baggage_allowance,
        Bussiness_price :req.body.Bussiness_price,
        Availlable_Number_of_Business_Class_Seats: Number(req.body.Number_of_Business_Class_Seats),
        Availlable_Number_of_Economy_Seats: Number(req.body.Number_of_Economy_Seats),
        flight_duration :'2:30',
        Seats_Bussiness:rows2,
        Seats_Economy:rows
        
     } )

    flights.save()
      .then(result => {


        //____________________________________________________________________________________________________________________//
       
       
      
    
       res.send(result)
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
    // Adjust_seats
 
  }

