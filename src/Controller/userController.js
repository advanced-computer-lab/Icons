const Users = require('../Models/users');
const Flights = require('../Models/flights');
const Seats = require('../Models/seats');
const Reservations = require('../Models/reservations');
const  nodemailer = require('nodemailer');
var temp;
var temp1;
var temp2;
var temp3;
var temp4;
var temp5 ;
var temp7 ;
var temp11;
var seats ;
var flightno1;
var flightno2;
var cabin;
var loggedin;
var carla;
var reserve_id;
var helper1;
var helper2;
var helper3;
var helper4;
var helper5;
var x = [] 
var x_id = []
var y = [] 
var y_id = []
var megan;
var mail_user ;
var temp100;
var no_of_availlable_seats;
var no_of_availlable_seats2;
var  booking_number;
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


    const deparute_flightno = (req,res)=>{ // SAVE DEPARTURE FLIGHT NUMBER //
      flightno1 = req.params.id
    
     
    }
    const return_flightno = (req,res)=>{ // SAVE RETURN FLIGHT NUMBER //
      flightno2 = req.params.id
     
     
    }
    const calculate_price = (req,res)=>{
   



    }
  
    const adjust_seats = async (req,res)=>{

      const seating = await Flights.find({Flight_number: flightno1}).then(result => {
        no_of_availlable_seats = (  result[0].Availlable_Number_of_Economy_Seats );
        no_of_availlable_seats = no_of_availlable_seats - temp7;
    })
    const seating2 = await Flights.find({Flight_number: flightno2}).then(result => {
      no_of_availlable_seats2 =   (result[0].Availlable_Number_of_Business_Class_Seats) ;
      no_of_availlable_seats2 = no_of_availlable_seats2 - temp7;
      console.log("hello beautiful people");
      console.log(no_of_availlable_seats2)
      console.log(temp7);
  })
  if(cabin == "Economy"){
      Flights.updateOne({Flight_number: flightno1 },{Availlable_Number_of_Economy_Seats:no_of_availlable_seats})   .then(result => { 
        
            res.status(200)
         
            
          })
          .catch(err => {
              console.log(err)
              
          });
          Flights.updateOne({Flight_number: flightno2 },{Availlable_Number_of_Economy_Seats:no_of_availlable_seats2})   .then(result => { 
        
            res.status(200)
         
            
          })
          .catch(err => {
              console.log(err)
              
          });
        }
        else {
          Flights.updateOne({Flight_number: flightno1 },{Availlable_Number_of_Business_Class_Seats:no_of_availlable_seats})   .then(result => { 
        
            res.status(200)
         
            
          })
          .catch(err => {
              console.log(err)
              
          });
          Flights.updateOne({Flight_number: flightno2 },{Availlable_Number_of_Business_Class_Seats:no_of_availlable_seats2})   .then(result => { 
        
            res.status(200)
         
            
          })
          .catch(err => {
              console.log(err)
              
          });

        }
    }
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
 const user_seats = (req,res)=>{

  res.send(temp7);
 }


const find_seats_departure = (req,res)=>{
  if(cabin == "Economy"){
 var y;
 var  selectedbyuser ;
    var flag = false;   
    const rows = []
    var j = 1; 
    var l = 0 ;
    var n=0;  
    var x = []       
    Flights.find({Flight_number:flightno1},{ Bussiness_price :0,flight_duration :0,Economy_price :0, Availlable_Number_of_Economy_Seats:0, Availlable_Number_of_Business_Class_Seats:0, __v:0,createdAt:0,updatedAt:0,Flight_number:0,Number_of_Business_Class_Seats:0,Arrival_airport:0,Arrival_date:0,Arrival_time:0,Departure_airport:0,Departure_date:0,Departure_time:0,_id:0})  
   . then(result => { 
    
    y = JSON.stringify(result).substring(28,JSON.stringify(result).length - 2)
  
    Seats.find({Flight_number:flightno1,Category:cabin,seat_id:{$lte:y}}).then(result2 =>{

      for( var i =1 ; i<=y;i++){
        selectedbyuser = false;
        flag = false;
        n++;
        if(l==2){
          i--;
          x.push(null)
          l=0;
          continue ;
        }
      for( var jj =0 ; jj<result2.length;jj++){
        if(result2[jj].seat_id == i && result2[jj].user_id == carla){
          selectedbyuser = true;
          break;
        }
           if(result2[jj].seat_id == i){
             console.log(true)
             flag = true ;
             break;
           }
           
    
      }
      if(selectedbyuser == true) {
        x.push({id:i,number:j,isSelected:true,isReserved:false})
      }
     else if(flag == true && selectedbyuser == false){
        x.push({id:i,number:j,isSelected:false,isReserved:true})
      
       }
       else if(flag == false && selectedbyuser == false) {
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

      

    } // OUTER LOOP //
    if(x.length >0){
      rows.push(x);
     }
     
     
     
     
       res.send(rows)
       res.status(200)
   }) //SEATS .FIND //
   
  
  }) //FLIGHTS.FIND //
  

  
  .catch(err =>{
    console.log(err);
 });

  }
else {


var selectedbyuser;
  var y;
  var flag = false;   
  const rows = []
  var j = 1; 
  var l = 0 ;
  var n=0;  
  var x = []       
  Flights.find({Flight_number:flightno1},{   Bussiness_price :0,flight_duration :0,Economy_price :0, Availlable_Number_of_Economy_Seats:0, Availlable_Number_of_Business_Class_Seats:0, __v:0,createdAt:0,updatedAt:0,Flight_number:0,Number_of_Business_Class_Seats:0,Arrival_airport:0,Arrival_date:0,Arrival_time:0,Departure_airport:0,Departure_date:0,Departure_time:0,_id:0})  
 . then(result => { 
  
  y = JSON.stringify(result).substring(28,JSON.stringify(result).length - 2)

  Seats.find({Flight_number:flightno1,Category:cabin,seat_id:{$lte:y}}).then(result2 =>{

    for( var i =1 ; i<=y;i++){
      selectedbyuser = false;
      flag = false;
      n++;
      if(l==2){
        i--;
        x.push(null)
        l=0;
        continue ;
      }
    for( var jj =0 ; jj<result2.length;jj++){
      if(result2[jj].seat_id == i && result2[jj].user_id == carla){
        selectedbyuser = true;
        break;
      }
         if(result2[jj].seat_id == i){
           console.log(true)
           flag = true ;
           break;
         }
         
  
    }
    if(selectedbyuser == true) {
      x.push({id:i,number:j,isSelected:true,isReserved:false})
    }
   else if(flag == true && selectedbyuser == false){
      x.push({id:i,number:j,isSelected:false,isReserved:true})
    
     }
     else if(flag == false && selectedbyuser == false) {
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

    

  } // OUTER LOOP //

  if(x.length >0){
    rows.push(x);
   }
   
   
   
   
     res.send(rows)
     res.status(200)
 }) //SEATS .FIND //
 

}) //FLIGHTS.FIND //



.catch(err =>{
  console.log(err);
});



} // else //





}  // method //










const save_seats =  async (req,res)=>{
   const seats= new Seats({
    
    Flight_number: flightno1,
    seat_id:req.body.seat_id,
    Category:cabin,
    user_id:carla,
    seat_number: req.body.seat_number,
    seat_row :req.body.seat_row
    
    
 } )

await seats.save()
  .then(result => {
  
  console.log(result);
    res.status(200)
 

  })
  .catch(err => {
    console.log(err);
    console.log(req.body)
    console.log('hello')
   
  });
  

}
const save_seats2 = (req,res)=>{
  const seats= new Seats({
    
    Flight_number: flightno2,
    seat_id:req.body.seat_id,
    Category:cabin,
    user_id:carla,
    seat_number: req.body.seat_number,
    seat_row :req.body.seat_row
    
    
    
    
 } )

seats.save()
  .then(result => {
  //  console.log(result)
    res.status(200)
 
   console.log('hello')
  })
  .catch(err => {
    console.log(err);
    console.log(req.body)
    console.log('hello')
   
  });
  

}


const delete_seats = (req,res)=>{
  
  Seats.deleteOne({Flight_number:flightno1,
                     seat_id: req.body.seat_id,
                       Category: cabin}).then(result => {
                      res.send(result);
                      res.status(200)
                     
                    })
                    .catch(err => {
                      console.log(err);
                      console.log(req.body)
                      console.log('hello')
                     
                    });


}
const delete_seats2 = (req,res)=>{
  
  Seats.deleteOne({Flight_number:flightno2,
                     seat_id: req.body.seat_id,
                       Category: cabin}).then(result => {
                      res.send(result);
                      res.status(200)
                      
                    })
                    .catch(err => {
                      console.log(err);
                      console.log(req.body)
                      console.log('hello')
                     
                    });


}


const find_seats_return = (req,res)=>{
  if(cabin == "Economy"){
    var y;
    var  selectedbyuser ;
       var flag = false;   
       const rows = []
       var j = 1; 
       var l = 0 ;
       var n=0;  
       var x = []       
       Flights.find({Flight_number:flightno2},{  Bussiness_price :0,flight_duration :0,Economy_price :0, Availlable_Number_of_Economy_Seats:0, Availlable_Number_of_Business_Class_Seats:0, __v:0,createdAt:0,updatedAt:0,Flight_number:0,Number_of_Business_Class_Seats:0,Arrival_airport:0,Arrival_date:0,Arrival_time:0,Departure_airport:0,Departure_date:0,Departure_time:0,_id:0})  
      . then(result => { 
     console.log(result);  
       y = JSON.stringify(result).substring(28,JSON.stringify(result).length - 2)
     
       Seats.find({Flight_number:flightno2,Category:cabin,seat_id:{$lte:y}}).then(result2 =>{
   
         for( var i =1 ; i<=y;i++){
           selectedbyuser = false;
           flag = false;
           n++;
           if(l==2){
             i--;
             x.push(null)
             l=0;
             continue ;
           }
         for( var jj =0 ; jj<result2.length;jj++){
           if(result2[jj].seat_id == i && result2[jj].user_id == carla){
             selectedbyuser = true;
             break;
           }
              if(result2[jj].seat_id == i){
                console.log(true)
                flag = true ;
                break;
              }
              
       
         }
         if(selectedbyuser == true) {
           x.push({id:i,number:j,isSelected:true,isReserved:false})
         }
        else if(flag == true && selectedbyuser == false){
           x.push({id:i,number:j,isSelected:false,isReserved:true})
         
          }
          else if(flag == false && selectedbyuser == false) {
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
   
         
   
       } // OUTER LOOP //
       if(x.length >0){
         rows.push(x);
        }
        
        
        
        
          res.send(rows)
          res.status(200)
      }) //SEATS .FIND //
      
     
     }) //FLIGHTS.FIND //
     
   
     
     .catch(err =>{
       console.log(err);
    });
   
     }
   else {
   
   
   var selectedbyuser;
     var y;
     var flag = false;   
     const rows = []
     var j = 1; 
     var l = 0 ;
     var n=0;  
     var x = []       
     Flights.find({Flight_number:flightno2},{   Bussiness_price :0,flight_duration :0,Economy_price :0, Availlable_Number_of_Economy_Seats:0, Availlable_Number_of_Business_Class_Seats:0, __v:0,createdAt:0,updatedAt:0,Flight_number:0,Number_of_Business_Class_Seats:0,Arrival_airport:0,Arrival_date:0,Arrival_time:0,Departure_airport:0,Departure_date:0,Departure_time:0,_id:0})  
    . then(result => { 
     
     y = JSON.stringify(result).substring(28,JSON.stringify(result).length - 2)
   
     Seats.find({Flight_number:flightno2,Category:cabin,seat_id:{$lte:y}}).then(result2 =>{
   
       for( var i =1 ; i<=y;i++){
         selectedbyuser = false;
         flag = false;
         n++;
         if(l==2){
           i--;
           x.push(null)
           l=0;
           continue ;
         }
       for( var jj =0 ; jj<result2.length;jj++){
         if(result2[jj].seat_id == i && result2[jj].user_id == carla){
           selectedbyuser = true;
           break;
         }
            if(result2[jj].seat_id == i){
              console.log(true)
              flag = true ;
              break;
            }
            
     
       }
       if(selectedbyuser == true) {
         x.push({id:i,number:j,isSelected:true,isReserved:false})
       }
      else if(flag == true && selectedbyuser == false){
         x.push({id:i,number:j,isSelected:false,isReserved:true})
       
        }
        else if(flag == false && selectedbyuser == false) {
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
   
       
   
     } // OUTER LOOP //
   
     if(x.length >0){
       rows.push(x);
      }
      
      
      
      
        res.send(rows)
        res.status(200)
    }) //SEATS .FIND //
    
   
   }) //FLIGHTS.FIND //
   
   
   
   .catch(err =>{
     console.log(err);
   });
   
   
   
   } 
 }

 const user_findall = (req, res) => {
  Users.find().then(result => {
       res.send(result)
       res.status(200)
   })
   .catch(err => {
       console.log(err)
   });
 }
const save_userid = (req,res)=>{
  carla = req.params.user_id
  console.log(carla)

}




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
reservations.save()
.then(result => {
  helper5 = result._id

 res.send(result._id)


})
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
const user_summary_helper7 = (req,res) =>{ 
  Reservations.deleteMany().then(result => {
  
    res.send(result)
    res.status(200)
  })
  .catch(err => {
    console.log(err)
  });
  }
  const user_Reservations= (req,res) =>{ 
    
    Reservations.find({User_id:req.params.user_id}).then(result => {
    
      res.send(result)
      res.status(200)
    })
    .catch(err => {
      console.log(err)
    });
    }

    const delete_Reservation = (req,res)=>{
      Reservations.find({_id:req.params.id})
      .then(result =>{
    
        
         Seats.deleteMany({user_id:carla ,Flight_Number:result.Departure_Flight_number,seat_id:result.Departure_seats_id }).then(result =>{
    
        
      
    }).catch(err => {
        console.log(err);
      });

      Seats.deleteMany({user_id:carla ,Flight_Number:result.Return_Flight_number,seat_id:result.Return_seats_id }).then(result =>{
    
        
      
      }).catch(err => {
          console.log(err);
        });
      }).catch(err => {
          console.log(err);
        });
   



      Reservations.findByIdAndDelete(req.params.id).then(result =>{
    
            res.status(200).send("flight Deleted ");
          
        }).catch(err => {
            console.log(err);
          });

    



      };


      const user_Reservations_info= (req,res) =>{ 
    
        Reservations.find({_id
          :req.params.id}).then(result =>{
          res.send(result)
          res.status(200)
        }).catch(err =>{
           console.log(err);
        });
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
      
          const helper10 = (req,res) =>{ 
        
            loggedin = req.params.user_id
            carla = loggedin
            console.log(loggedin);
            }
            const helper11 = (req,res) =>{ 
             console.log(loggedin);
              res.send(loggedin)

              }


    module.exports = {
       user_flight_find,
       user_search_result,
       update_user,
       user_info ,
       user_search_result_return,
       user_seats,
       find_seats_return,
       find_seats_departure,
       save_seats ,
       delete_seats,
       deparute_flightno,
       return_flightno,
       user_findall,
       save_userid ,
       save_seats2 ,
       delete_seats2,
       user_summary_helper5  ,
       user_summary_helper6 ,
       user_summary_helper7,
       user_Reservations,
       delete_Reservation,
       user_Reservations_info,
       send_mail,
       adjust_seats,
       guest_summary,
       calculate_price,
       helper10,
       helper11
   

      }