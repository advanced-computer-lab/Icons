 import React from 'react';
import { Link } from 'react-router-dom';



const UserCard = (props) => {
    const  user  = props.user;

    return(
        <div className="flight-container">
       
            <div className="desc">
            {/* <h1>
                   
                 YOU SHOULD BE LOGGED IN ORDER TO CHOOSE SEATS 
               </h1> 
                <h2>
                    <Link to={`/Departure_seats/${user._id}`}>
                        

                    <p> Login </p>
                    </Link>
                  
                </h2> */}
               
        
               <h1>
                   
                            Login
                 </h1> 
                  <h2>
                      <Link to={`/search/${user._id}`}>
                          
  
                      <p> Login </p>
                      </Link>
                
                      <Link to={`/search/undefined`}>
                          
  
                          <p> contiune as guest </p>
                          </Link>
                      </h2>
                  
            </div>
        </div>
    )
};

export default UserCard;