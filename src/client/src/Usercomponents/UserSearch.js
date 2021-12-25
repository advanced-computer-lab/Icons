import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Grid,Paper, Avatar, TextField, Button, Typography} from '@material-ui/core'
import AirplanemodeActiveOutlinedIcon from '@mui/icons-material/AirplanemodeActiveOutlined';
class UserSearch extends Component {
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
            Arrival_date:'',
            cabin:'' ,
            number_of_people:'',
            number_of_children:''
            
        };
      } 


    
       

      onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
      };
      onSubmit = e => {
        e.preventDefault();
       
 
     if(this.state.cabin===''){
   
    this.state.Number_of_Economy_Seats = Number(this.state.number_of_people) + Number(this.state.number_of_children)
    this.state.Number_of_Economy_Seats = this.state.Number_of_Economy_Seats + ""
  }
     
     else if (this.state.cabin ==='Bussiness'){
      this.state.Number_of_Business_Class_Seats = Number(this.state.number_of_people) + Number(this.state.number_of_children)
      this.state.Number_of_Business_Class_Seats = this.state.Number_of_Business_Class_Seats + ""
    }
    if(this.state.Arrival_date < this.state.Departure_date){
      alert('deparutre date must be greater or equal to arrival date ')
    }
    else {
    
        const data = {
       
            Flight_number: this.state.Flight_number,
            Departure_time: this.state.Departure_time,
            Arrival_time:this.state.Arrival_time ,
            Number_of_Economy_Seats: this.state.Number_of_Economy_Seats,
            Number_of_Business_Class_Seats: this.state.Number_of_Business_Class_Seats,
            Arrival_airport: this.state.Arrival_airport,
            Departure_airport: this.state.Departure_airport,
            Departure_date: this.state.Departure_date,
            Arrival_date:this.state.Arrival_date,
          
        };


        
       
        axios
        .post('http://localhost:8000/user/search', data)
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
            Arrival_date:'',
           cabin :'',
            number_of_people:'',
            number_of_children:''
          })
        if(res.data.length == 0){
         alert('no flights matches your search criteria')
        }
        else {
         this.props.history.push('/search_results/'+this.props.match.params.user_id);
        }
        })
      
        .catch(err => {
          console.log("Error in SearchFlight!");
        })
      }
     
    };
 render (){
  

   
  const paperStyle={padding :20,height:'30%',width:'30%', margin:"20px auto"}
  const avatarStyle={backgroundColor:'#1bbd7e'}
  const btnstyle={margin:'8px 0'}
  
     return (

     
      <Grid>
      <Paper elevation={10} style={paperStyle}>
          <Grid align='center'>
               <Avatar style={avatarStyle}><AirplanemodeActiveOutlinedIcon/></Avatar>
              <h2>Search Flight</h2>
          </Grid>
          <div className='form-group'>
                  <label for="cabin">Cabin class: </label>
                  <select name = 'cabin' id = 'cabin' value ={this.state.cabin} onChange={this.onChange}>  
                  <  option  value='Economy' >Economy</option>
                  <option value='Bussiness'>Bussines</option>
                  
                   
                  </select>
                  </div>
          <TextField label='Number of Adults' 
          placeholder='Enter Number of adults' 
          name='number_of_people'
          min="1" 
         value={this.state.number_of_people}
            onChange={this.onChange}
          fullWidth required/>
          <TextField label='Number of children'
           placeholder='Number of children'
           min="0"
           required 
          
           name='number_of_children'
          
           value={this.state.number_of_children}
           onChange={this.onChange}
            fullWidth required/>
          <TextField label='Arrival Airport' 
           name='Arrival_airport'
           
           value={this.state.Arrival_airport}
           onChange={this.onChange}
          placeholder='Enter Arrival Airport '
          fullWidth required/>
          <TextField label='Depature Airport'
           placeholder='Enter Depature Airport' 
           name='Departure_airport'
           
           value={this.state.Departure_airport}
           onChange={this.onChange}
           fullWidth required/>

         <h4>Depature date</h4>
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
              className='form-control'
              value={this.state.Arrival_date}
              onChange={this.onChange}
              fullWidth required/>
              

          <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Search</Button>
          
          
      </Paper>
  </Grid>


     )
  
 }

}


export default UserSearch;