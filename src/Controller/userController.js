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

  const user_regisertaion = async(req,res) =>{
    console.log("true")
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