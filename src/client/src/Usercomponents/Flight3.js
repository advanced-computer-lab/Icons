import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import UserCard from '../Usercomponents/UserCard';
import ViewUsers from '../Usercomponents/ViewUsers';


const Flight3 = (props) => {
    const  flight  = props.flight;
    
    return(
        <div className="flight-container">
       
            <div className="desc">
                <h2>
                    
                    <Link to={`/Guest_Summary/${flight.Flight_number}`}   onClick={ (event) => { if(window.confirm('Are you sure you want to book this Return flight ?') == false) {
                       event.preventDefault();
                   
        
              };}}  >
                    <p> { flight.Flight_number } </p>
                    </Link>
                </h2>
               
        
        
                
                
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
            </div>
        </div>
    )
};

export default Flight3;