
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
import AirplanemodeActiveOutlinedIcon from '@mui/icons-material/AirplanemodeActiveOutlined';

class UpdateFlight extends Component {
  constructor(props) {
    super(props);
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




  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get('http://localhost:8000/admin/flight_info/'+this.props.match.params.id)
      .then(res => {
        // this.setState({...this.state, book: res.data})
        this.setState({
          Flight_number: res.data.Flight_number,
        Departure_time: res.data.Departure_time,
        Arrival_time:res.data.Arrival_time ,
        Number_of_Economy_Seats: res.data.Number_of_Economy_Seats,
        Number_of_Business_Class_Seats: res.data.Number_of_Business_Class_Seats,
        Arrival_airport: res.data.Arrival_airport,
        Departure_airport: res.data.Departure_airport,
        Departure_date: res.data.Departure_date,
        Arrival_date:res.data.Arrival_date
        })
        console.log(res.data.Flight_number + ' ' + this.state.Flight_number)
      })
      .catch(err => {
        console.log("Error from UpdateflightInfo");
      })
  };
 

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
      .post('http://localhost:8000/admin/update/'+this.props.match.params.id, data)
      .then(res => {
        
      })
      
      .catch(err => {
        alert('Something went wrong! ... error in update flight');
        console.log("Error in flight!");
      })
      
      alert('Flight was updated successfully'); 
      this.props.history.push('/view_all');
  };


  render() {
    const paperStyle={padding :20,height:'30%',width:'30%', margin:"20px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}
    return (
      <form noValidate onSubmit={this.onSubmit}>
      <Grid>
          <Paper elevation={10} style={paperStyle}>
              <Grid align='center'>
                   <Avatar style={avatarStyle}><AirplanemodeActiveOutlinedIcon/></Avatar>
                  <h2>Update Flight</h2>
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
              type={'number'}
              placeholder='Enter Economy seats no.' 
              name='Number_of_Economy_Seats'
              
              value={this.state.Number_of_Economy_Seats}
              onChange={this.onChange}
              fullWidth required/>
              <TextField label='Number of_Business Class Seats' 
              type={'number'}
              name='Number_of_Business_Class_Seats'
              
              value={this.state.Number_of_Business_Class_Seats}
              onChange={this.onChange}
              placeholder='Enter Bussiness seats no.'

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
              name='Arrival_date'
                        
                          value={this.state.Arrival_date}
                          onChange={this.onChange}
                
               fullWidth required/>
              <Button type='submit'
               color='primary'
                variant="contained" 
                style={btnstyle} fullWidth>Update</Button>
              
              
          </Paper>
      </Grid>
      </form>
    );
  }
}

export default UpdateFlight;
