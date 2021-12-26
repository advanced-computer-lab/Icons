import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';



const Flight3 = (props) => {
    const  flight  = props.flight;
    
    return(
        <div className="flight-container">
       
            <div className="desc">
           
               
        
        
                
                   <p> Flight Number : {flight.Flight_number} </p>
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
                             delete
                     </button>
            </div>
        </div>
    )
};

export default Flight3;
// import axios from 'axios';
// import React from 'react';
// import { Link } from 'react-router-dom';
// import FlightCard3 from './FlightCard3';
// import { Container, Grid } from '@mui/material';




// const Flight3 = (props) => {
//     const  flight  = props.flight;
    
//     return(
//         <div className="flight-container">
       
//             <div className="desc">
//             <Container  columnSpacing={{md: 3, lg: 4}} rowSpacing={2} spacing={3}>
//                 <Grid container margin={10} paddingLeft={30}>
//                     <Grid item md={6}>    
//                      {/* <FlightCard3 flight = {flight}> 
//                      </FlightCard3>   */}
//                        <FlightCard3 flight = {flight} handledelete = {this.handledelete}></FlightCard3>
//                   </Grid>
//                 </Grid>
//              </Container>
//             </div>
//         </div>
//     )
// };

// export default Flight3;