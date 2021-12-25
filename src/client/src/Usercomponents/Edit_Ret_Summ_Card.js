import React from 'react';
import { Link } from 'react-router-dom';


const Edit_Ret_Summ_Card = (props) => {
    const  summary  = props.summary;
  
    var str='' ;

    for(var i =0 ;i<summary.Seats.length;i++){
        if(i==0){
            str = summary.Seats[0]+" , "
         
        }
        else if(i== summary.Seats.length -1 ){
          str =str + summary.Seats[i]
       
        }
        else {
          str =str + summary.Seats[i]+" , "
         
        }
        console.log(str)
       }


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
                  <p>  Chosen Return  Seats : {str}   </p>
             
                  
                  
            
            </div>
        </div>
    )
};

export default  Edit_Ret_Summ_Card;