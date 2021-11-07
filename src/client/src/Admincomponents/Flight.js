import React from 'react';
import { Link } from 'react-router-dom';


const Flight = (props) => {
    const  flight  = props.flight;

    return(
        <div className="flight-container">
         
            <div className="desc">
                <h2>
                    <Link to={`/flight-info/${flight.Flight_number}`}>
                        { flight._Flight_number }
                    </Link>
                </h2>
                
                  <p>{flight.Departure_date}</p>
                  
                  <p>{flight.Arrival_date}</p>
                
                  <p>{flight.Departure_time}</p>
                
                  <p>{flight.Arrival_time}</p>
                
                  <p>{flight.Departure_airport}</p>
                
                  <p>{flight.Arrival_airport}</p>
                
                
                

            </div>
        </div>
    )
};

export default Flight;