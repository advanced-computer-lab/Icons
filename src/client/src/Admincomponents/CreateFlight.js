
import React, { Component } from 'react';

import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
import AirplanemodeActiveOutlinedIcon from '@mui/icons-material/AirplanemodeActiveOutlined';

import axios from 'axios';
class CreateFlight extends Component {
    constructor() {
        super();
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
        .post('http://localhost:8000/admin/create', data)
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
          this.props.history.push('/');
        })
        .catch(err => {
          console.log("Error in CreateFlight!");
        })
    };
 render (){
  const paperStyle={padding :20,height:'30%',width:'30%', margin:"20px auto"}
  const avatarStyle={backgroundColor:'#1bbd7e'}
  const btnstyle={margin:'8px 0'}
     return (
      <form noValidate onSubmit={this.onSubmit}>
      <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}><AirplanemodeActiveOutlinedIcon/></Avatar>
                    <h2>Create Flight</h2>
                </Grid>
                <TextField label='Flight_number'
                 placeholder='Enter Flight_number'
                 name='Flight_number'
                 value={this.state.Flight_number}
                 onChange={this.onChange}
                  fullWidth required/>
                <TextField label='Depature Time'
                 placeholder='Enter Depature Time'
                 name='Departure_time'
                value={this.state.Departure_time }
                 onChange={this.onChange}
                 fullWidth required/>
                <TextField label='Arrival Time' 
                placeholder='Enter Arrival Time' 
                name='Arrival_time'
                value={this.state.Arrival_time}
                onChange={this.onChange}
                 fullWidth required/>
                <TextField label='Number of Economy Seats'

                placeholder='Enter Economy seats no.'
                name='Number_of_Economy_Seats'
                            
                            value={this.state.Number_of_Economy_Seats}
                            onChange={this.onChange}
                type={'number'}
                 fullWidth required/>
                <TextField label='Number of_Business Class Seats'
                 placeholder='Enter Bussiness seats no.' 
                 name='Number_of_Business_Class_Seats'

                            value={this.state.Number_of_Business_Class_Seats}
                            onChange={this.onChange}
                 type={'number'}
                 fullWidth required/>
                <TextField label='Arrival Airport' 
                placeholder='Enter Arrival Airport'
                name='Arrival_airport'
                           
                            value={this.state.Arrival_airport}
                            onChange={this.onChange}
                 fullWidth required/>
                <TextField label='Departure Airport' 
                placeholder='Departure Airport' 
                name='Departure_airport'
                           
                            value={this.state.Departure_airport}
                            onChange={this.onChange}
                fullWidth required/>
              <h4>Departure Date</h4>
                <TextField 
                type={'date'}
                name='Departure_date'
                           
                            value={this.state.Departure_date}
                            onChange={this.onChange}
                 fullWidth required/>
                 <h4>Arrival Date</h4>
                <TextField 
                type={'date'}
                 placeholder='Enter Arrival Date'
                 name='Arrival_date'
                 
                 value={this.state.Arrival_date}
                 onChange={this.onChange}
                  fullWidth required/>
                  <TextField label='Business Class Price'
                 placeholder='Enter Bussiness price' 
                 name='Bussiness_price'
                            
                 value={this.state.Bussiness_price}
                 onChange={this.onChange}
                 type={'number'}
                 fullWidth required/>
                 <TextField label='Economy Class Price'
                 placeholder='Enter Economy price' 
                 name='Economy_price'
                           
                            value={this.state.Economy_price}
                            onChange={this.onChange}
                 
                 type={'number'}
                 fullWidth required/>
                 <TextField label='Baggage Allowance'

                 placeholder='Baggage Allowance' 
                 name='Baggage_allowance'
                            
                            value={this.state.Baggage_allowance}
                            onChange={this.onChange}
                 type={'number'}
                 fullWidth required/>
                  <TextField label='Trip duration'
                 placeholder='Baggage Allowance' 
                 fullWidth required/>
                <Button type='submit' 
                color='primary' 
                variant="contained" 
                style={btnstyle} fullWidth>Create</Button>
                
                
            </Paper>
        </Grid>
        </form>
            
     )
 }

}


export default CreateFlight;
