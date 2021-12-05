import React from 'react';
import { Link } from 'react-router-dom';


const Guest_SummaryCard = (props) => {
    const  summary  = props.summary;
  



    return(
        <div className="card-container">
            <div className="desc">
                <h3>
                   
                    Summary
                </h3> 
                  
                   <p>  Flight Number : {summary.Flight_number}</p>
                  
                   <p> Departure Time : { summary.Departure_time}</p>
                
                  <p> Arrival time :  {summary.Arrival_time}</p>
                
                  <p> Departure Date : {summary.Departure_date}</p>
                
                  <p>  Arrival Date : {summary.Arrival_date} </p>
                 
                  <p>  Departure Airport : {summary.Departure_airport}</p>
                
                  <p>  Arrival Airport : {summary.Arrival_airport}</p>
                
                  <p> Cabin :{summary.Cabin}</p>
                  
                  <p> Total Price for Round-trip :{summary.total_price}</p>
                  {/* <h3>
                    
                   Return Flight
                </h3>
                <p>  Flight Number : {summary.Return_Flight_number}</p>
                  
                  <p> Departure Time : { summary.Return_Flight_Departure_time}</p>
                
                  <p> Arrival time :  {summary.Return_Flight_Arrival_time}</p>
                
                  <p> Departure Date : {summary.Return_Flight_Departure_date}</p>
                
                  <p>  Arrival Date : {summary.Return_Flight_Arrival_date} </p>
                 
                  <p>  Departure Airport : {summary.Return_Flight_Departure_airport}</p>
                
                  <p>  Arrival Airport : {summary.Return_Flight_Arrival_airport}</p>
                
                  <p> Cabin :{summary.Cabin}</p>

                  <p> Total Price : {summary.total_price}</p> */}
                  
                  
            
            </div>
        </div>
    )
};

export default Guest_SummaryCard;