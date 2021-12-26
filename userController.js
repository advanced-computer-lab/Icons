const user_Reservations= (req,res) =>{ 
    
    Reservations.find({User_id:req.params.user_id}).then(result => {
    
      res.send(result)
      res.status(200)
    })
    .catch(err => {
      console.log(err)
    });
    }

///////////////////////////////////////////////////////////////
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

        ///////////////////////////////////////////////////////////

        const user_Reservations_info= (req,res) =>{ 
    
            Reservations.find({_id
              :req.params.id}).then(result =>{
              res.send(result)
              res.status(200)
            }).catch(err =>{
               console.log(err);
            });
            }