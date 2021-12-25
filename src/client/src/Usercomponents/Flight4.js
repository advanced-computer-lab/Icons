import React from 'react';
import { Link } from 'react-router-dom';


const Flight4 = (props) => {
    const  flight  = props.flight;

    return(
        <div className="flight-container">
       
            <div className="desc">
               
               
        
        
                
                <p> Flight Number : { flight.Flight_number } </p>
                 
                  <p> Departure Date : {flight.Departure_date}</p>
                  
                  <p> Arrival Date : {flight.Arrival_date}</p>
                
                  <p> Departure time :  {flight.Departure_time}</p>
                
                  <p> Arrival Time : {flight.Arrival_time}</p>
                
                  <p>  Departure Airport : {flight.Departure_airport} </p>
                  
                  <p> Arrival Airport : {flight.Arrival_airport}</p>
                
                  <p> Bussiness class seats :{flight.Number_of_Business_Class_Seats}</p>

                  <p>Economy seats : {flight.Number_of_Economy_Seats}</p>

                  <p>Availlable Economy seats : {flight.Availlable_Number_of_Economy_Seats}</p>

                  <p>Availlable Bussiness  seats : {flight.Availlable_Number_of_Business_Class_Seats}</p>

                  <p>Economy Seat price : {flight.Economy_price}</p>

                  <p>Bussiness Seat price : {flight.Bussiness_price }</p>
                  
                  <p>Flight Duration : {flight.flight_duration}</p>

            </div>
        </div>
    )
};

export default Flight4;