import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { Link } from 'react-router-dom';
import { IconButton, Typography } from '@mui/material';
import React from 'react';



export default function FlightCard3({flight}){
    
   //  const  flight  = props.flight;
    return(
            <div>
                 <Card elevation={5}>
                     <CardHeader
                        action={
                            <IconButton>
                                <button onClick={()=> flight.handledelete(flight.Flight_number)}>
                                 choose
                                  </button>
                            </IconButton>
                        }
                        
                        title= { <p>  Departure Airport : {flight.Departure_airport} <br/> Arrival Airport : {flight.Arrival_airport}</p>  }
                     />
                     <CardContent>
                         <Typography>
                             {<p> Departure Date : {flight.Departure_date}</p>}
                         </Typography>
                         <Typography>
                            {<p> Arrival Date : {flight.Arrival_date}</p>}
                         </Typography>
                         <Typography>
                            {<p> Departure time :  {flight.Departure_time}</p>}
                         </Typography>
                         <Typography>
                            {<p> Arrival Time : {flight.Arrival_time}</p>}
                         </Typography>
                         <Typography>
                            { <p>Availlable Economy seats : {flight.Availlable_Number_of_Economy_Seats}</p>}
                         </Typography>
                         <Typography>
                            { <p>Availlable Bussiness  seats : {flight.Availlable_Number_of_Business_Class_Seats}</p>}
                         </Typography>
                         <Typography>
                            { <p>Economy Seat price : {flight.Economy_price}</p>}
                         </Typography>
                         <Typography>
                            {<p>Bussiness Seat price : {flight.Bussiness_price }</p>}
                         </Typography>
                         <Typography>
                            {  <p>Flight Duration : {flight.flight_duration}</p> }
                         </Typography>
                         <Typography>
                            {<p>Baggae allowance : {flight. Baggage_allowance }</p>}
                         </Typography>
                     </CardContent>
                     
                 </Card>
            </div>
    )
}