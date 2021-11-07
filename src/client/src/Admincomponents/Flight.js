import React from 'react';
import { Link } from 'react-router-dom';


const Flight = (props) => {
    const  flight  = props.flight;

    return(
        <div className="flight-container">
       
            <div className="desc">
                <h2>
                    <Link to={`/flight_info/${flight._id}`}>
                    <p> { flight.Flight_number } </p>
                    </Link>
                </h2>
               
        
        
                
                
                  <p> Deaprture Date : {flight.Departure_date}</p>
                  
                  <p> Arrival Date : {flight.Arrival_date}</p>
                
                  <p> Departure time :  {flight.Departure_time}</p>
                
                  <p> Arrival Time : {flight.Arrival_time}</p>
                
                  <p>  Departure Airport : {flight.Departure_airport} </p>
                  
                <p> Arrival Airport : {flight.Arrival_airport}</p>
                
                  <p> Bussiness class seats :{flight.Number_of_Business_Class_Seats}</p>

                  <p>Economy seats : {flight.Number_of_Economy_Seats}</p>
                

            </div>
        </div>
    )
};

export default Flight;