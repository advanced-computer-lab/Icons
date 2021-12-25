
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Grid,Paper, Avatar, TextField, Button, Typography} from '@material-ui/core'
import AirplanemodeActiveOutlinedIcon from '@mui/icons-material/AirplanemodeActiveOutlined';
class SearchFlights extends Component {
    constructor(pros) {
        super(pros);
        this.state = {
            Flight_number: '',
            Departure_time: '',
            Arrival_time:'' ,
            Number_of_Economy_Seats: '',
            Number_of_Business_Class_Seats: '',
            Arrival_airport: '',
            Departure_airport: '',
            Departure_date: '',
            Arrival_date:''
        };
      } 





      onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
      };
      onSubmit = e => {
        e.preventDefault();
    
        const data = {
       
            Flight_number: this.state.Flight_number,
            Departure_time: this.state.Departure_time,
            Arrival_time:this.state.Arrival_time ,
            Number_of_Economy_Seats: this.state.Number_of_Economy_Seats,
            Number_of_Business_Class_Seats: this.state.Number_of_Business_Class_Seats,
            Arrival_airport: this.state.Arrival_airport,
            Departure_airport: this.state.Departure_airport,
            Departure_date: this.state.Departure_date,
            Arrival_date:this.state.Arrival_date
        };



       
        axios
        .post('http://localhost:8000/admin/createe', data)
        .then(res => {
          this.setState({
            Flight_number: '',
            Departure_time: '',
            Arrival_time:'' ,
            Number_of_Economy_Seats: '',
            Number_of_Business_Class_Seats: '',
            Arrival_airport: '',
            Departure_airport: '',
            Departure_date: '',
            Arrival_date:''
          })
          
          this.props.history.push('/search_flight_results');
        
        })
        .catch(err => {
          console.log("Error in CreateFlight!");
        })
    };
 render (){
  const paperStyle={padding :20,height:'105vh',width:400, margin:"20px auto"}
  const avatarStyle={backgroundColor:'#1bbd7e'}
  const btnstyle={margin:'8px 0'}
     return (
        // <div className = 'SearchFlight' >

        <form Validate onSubmit={this.onSubmit}>

<Grid>
      <Paper elevation={10} style={paperStyle}>
          <Grid align='center'>
               <Avatar style={avatarStyle}><AirplanemodeActiveOutlinedIcon/></Avatar>
              <h2>Search Flight</h2>
          </Grid>
          <TextField label='Flight_number' 
          placeholder='Enter Flight_number' 
          name='Flight_number'
          
          value={this.state.Flight_number}
          onChange={this.onChange}
          fullWidth />
          <TextField label='Depature Time'
           placeholder='Enter Depature Time'
           name='Departure_time'
              value={this.state.Departure_time }
              onChange={this.onChange}
            fullWidth />

          <TextField label='Arrival Time' 
          placeholder='Enter Arrival Time '
          name='Arrival_time'
          value={this.state.Arrival_time}
          onChange={this.onChange}
          fullWidth />

          <TextField label='Number of Economy Seats'
           placeholder='Enter Economy seats no.' 
           type={'number'}
           name='Number_of_Economy_Seats'
           value={this.state.Number_of_Economy_Seats}
           onChange={this.onChange}
           fullWidth />

          <TextField label='Number of_Business Class Seats'
          type={'number'}
           placeholder='Enter Bussiness seats no.' 
           name='Number_of_Business_Class_Seats'
           value={this.state.Number_of_Business_Class_Seats}
           onChange={this.onChange}
           fullWidth />
          <TextField label='Arrival Airport' 
          placeholder='Enter Arrival Airport' 
          name='Arrival_airport'
          value={this.state.Arrival_airport}
          onChange={this.onChange}
          fullWidth />
          <TextField label='Departure Airport'
           placeholder='Departure Airport'
           name='Departure_airport'
           value={this.state.Departure_airport}
           onChange={this.onChange}
            fullWidth />
          <h4>Depature Date</h4>
          <TextField  
          name='Departure_date'
          value={this.state.Departure_date}
          onChange={this.onChange}
            type={'date'}
            fullWidth />
          <h4>Arrival Date</h4>
          <TextField 
           name='Arrival_date'
           value={this.state.Arrival_date}
           onChange={this.onChange}
              type={'date'}
              fullWidth />

          <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Search</Button>
          
          
      </Paper>
  </Grid>

                        
       </form>
     )
 }
}



export default SearchFlights;
