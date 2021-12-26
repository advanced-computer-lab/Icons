import React from 'react';
import { Link } from 'react-router-dom';


const ReservationInfoCard = (props) => {
    const  summary  = props.summary;
    var str='' ;
    var str2='';
for(var i =0 ;i<summary.Departure_seats.length;i++){
    if(str !=''){
 str =  str + ", " + summary.Departure_seats[i]
 str2 =  str2 + ", " + summary.Return_seats[i]
    }
 else {
     str = summary.Departure_seats[i]
     str2 = summary.Return_seats[i]
 }
 }



    return(
        <div className="card-container">
            <div className="desc">
                <h3>
                   
                    Departure Flight
                </h3> 
                
              
                    <p> Flight Number : { summary.Departure_Flight_number } </p>
                  
                   {/* <p>  Flight Number : {summary.Departure_Flight_number}</p> */}
                  
                   <p> Departure Time : { summary.Departure_Flight_Departure_time}</p>
                
                  <p> Arrival time :  {summary.Departure_Flight_Arrival_time}</p>
                
                  <p> Departure Date : {summary.Departure_Flight_Departure_date}</p>
                
                  <p>  Arrival Date : {summary.Departure_Flight_Arrival_date} </p>
                 
                  <p>  Departure Airport : {summary.Departure_Flight_Departure_airport}</p>
                
                  <p>  Arrival Airport : {summary.Departure_Flight_Arrival_airport}</p>
                
                  <p> Cabin :{summary.Cabin}</p>
                  <p>  Chosen Departure Seats : {str}   </p>

                  <h3>
                    
                   Return Flight
                </h3>
             
                    <p>  Flight Number : { summary.Return_Flight_number } </p>
                   
                
                  
                  <p> Departure Time : { summary.Return_Flight_Departure_time}</p>
                
                  <p> Arrival time :  {summary.Return_Flight_Arrival_time}</p>
                
                  <p> Departure Date : {summary.Return_Flight_Departure_date}</p>
                
                  <p>  Arrival Date : {summary.Return_Flight_Arrival_date} </p>
                 
                  <p>  Departure Airport : {summary.Return_Flight_Departure_airport}</p>
                
                  <p>  Arrival Airport : {summary.Return_Flight_Arrival_airport}</p>
                
                  <p> Cabin :{summary.Cabin}</p>

                  <p> Total Price : {summary.total_price}</p>
                  
                  <p> Booking Number : {summary.booking_number}</p> 
                  <p>  Chosen Return  Seats : {str2}   </p>
            
            </div>
        </div>
    )
};

export default ReservationInfoCard ;