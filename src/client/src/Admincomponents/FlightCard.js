import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { Link } from 'react-router-dom';
import { IconButton, Typography } from '@mui/material';
import React from 'react';



export default function FlightCard({flight}){
    

    return(
            <div>
                 <Card elevation={5}>
                     <CardHeader
                        action={
                            <IconButton>
                                <Link to={`/flight_info/${flight._id}`}>
                            <p> { flight.Flight_number } </p>
                             </Link>
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
                     </CardContent>
                     
                 </Card>
            </div>
    )
}