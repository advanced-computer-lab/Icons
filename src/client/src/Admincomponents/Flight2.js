import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import UserSearchResults from '../Usercomponents/UserSearchResults';

const Flight2 = (props) => {

    const  flight  = props.flight;
    // const history = useHistory()

  console.log(props)
    return(
        <div className="flight-container">
       
            <div className="desc">
          
        
        
                
              
                  <p> Departure Date : {flight.Departure_date}</p>
                  
                  <p> Arrival Date : {flight.Arrival_date}</p>
                
                  <p> Departure time :  {flight.Departure_time}</p>
                
                  <p> Arrival Time : {flight.Arrival_time}</p>
                
                  <p>  Departure Airport : {flight.Departure_airport} </p>
                  
                <p> Arrival Airport : {flight.Arrival_airport}</p>
                
        
                <p>Availlable Economy seats : {flight.Availlable_Number_of_Economy_Seats}</p>

                 <p>Availlable Bussiness  seats : {flight.Availlable_Number_of_Business_Class_Seats}</p>

           <p>Economy Seat price : {flight.Economy_price}</p>

           <p>Bussiness Seat price : {flight.Bussiness_price }</p>
 
            <p>Flight Duration : {flight.flight_duration}</p> 
            
            <p>Baggae allowance : {flight. Baggage_allowance }</p>  
            <button onClick={()=> props.handledelete(flight.Flight_number)}>
                choose
            </button>
            </div>
        </div>
    )
};

export default Flight2;
