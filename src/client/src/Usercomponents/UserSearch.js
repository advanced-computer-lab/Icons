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

      onSubmit2 = e => {
        e.preventDefault();
        this.props.history.push('/Current_Reservations/' + this.props.match.params.user_id)   };
      
      onSubmit3 = e => {
       e.preventDefault();
       this.props.history.push('/Update_Info/' + this.props.match.params.user_id)   };

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
  

   
  const paperStyle={padding :20,height:'85vh',width:400, margin:"20px auto"}
  const avatarStyle={backgroundColor:'#1bbd7e'}
  const btnstyle={margin:'8px 0'}
  
     return (

      
      
      <Grid align='center'>
        <Grid item md={6}>
        <Button type='submit'  onClick = {this.onSubmit2}color='primary' variant="contained" style={btnstyle} fullWidth>My Reservations</Button>
        </Grid>
        <Grid item md={6}>
        <Button type='submit'  onClick = {this.onSubmit3}color='primary' variant="contained" style={btnstyle} fullWidth>Edit Personal Information</Button>
        </Grid>
      <Paper elevation={10} style={paperStyle}>
          <Grid align='center'>
               <Avatar style={avatarStyle}><AirplanemodeActiveOutlinedIcon/></Avatar>
              <h2>Search Flight</h2>
          </Grid>
          <form noValidate onSubmit={this.onSubmit}> 
                  <label for="cabin">Cabin class: </label>
                  <select name = 'cabin' id = 'cabin' value ={this.state.cabin} onChange={this.onChange}>  
                  <  option  value='Economy' >Economy</option>
                  <option value='Bussiness'>Bussines</option>
                  
                   
                  </select>

                 
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
          </form>
          
      </Paper>
  </Grid>

        // <div className = 'UserSearchFlight' >

        // <form Validate onSubmit={this.onSubmit}>
                      
        
        
                   
        //                 <br />
        //                 <br />
        //                 <div className='form-group'>
        //                 <label for="cabin">Cabin class: </label>
        //                 <select name = 'cabin' id = 'cabin' value ={this.state.cabin} onChange={this.onChange}>
        //                 <  option  value='Economy' >Economy</option>
        //                 <option value='Bussiness'>Bussines</option>
                        
                         
        //                 </select>
                      
                        
                        
        //                 </div>
        //                 <br />
   
        //                 <div className='form-group'>
                         
        //                   <input
        //                     type='number'
        //                     min="1"
        //                     required 
        //                     placeholder=' Number_of_Adults '
        //                     name='number_of_people'
        //                     className='form-control'
        //                     value={this.state.number_of_people}
        //                     onChange={this.onChange}
        //                   />
        //                 </div>
        //                 <br />
        //                 <div className='form-group'>
                          
        //                   <input
        //                     type='number'
        //                    min="0"
        //                     required 
        //                     placeholder='number_of_children:'
        //                     name='number_of_children'
        //                     className='form-control'
        //                     value={this.state.number_of_children}
        //                     onChange={this.onChange}
        //                   />
        //                 </div>
        //                 <br />
                       
        //                 <div className='form-group'>
        //                   <input
        //                     type='text'
        //                     required 
        //                     placeholder='Arrival_airport'
        //                     name='Arrival_airport'
        //                     className='form-control'
        //                     value={this.state.Arrival_airport}
        //                     onChange={this.onChange}
        //                   />
        //                 </div>
        //                 <br />
        //                 <div className='form-group'>
        //                   <input
        //                     type='text'
        //                     required 
        //                     placeholder='Departure_airport'
        //                     name='Departure_airport'
        //                     className='form-control'
        //                     value={this.state.Departure_airport}
        //                     onChange={this.onChange}
        //                   />
        //                 </div>
        //                 <br />
        //                 <div className='form-group'>
        //                   <label>
        //                     Departure Date :
        //                     </label>
                            
        //                   <input
        //                     type='date'
        //                     required 
        //                     placeholder='Departure_date'
        //                     name='Departure_date'
        //                     className='form-control'
        //                     value={this.state.Departure_date}
        //                     onChange={this.onChange}
        //                   />
        //                 </div>
        //                 <br />
        //                 <div className='form-group'>
        //                 <label>
        //                     Arrival Date :
                           
        //                     </label>
                            
        //                   <input 
        //                     type='date'
        //                     required 
        //                     placeholder='Arrival_date'
        //                     name='Arrival_date'
        //                     className='form-control'
        //                     value={this.state.Arrival_date}
        //                     onChange={this.onChange}
        //                   />
        //                 </div>
        //                 <br />
        //                 <input
        //                     type="submit"
        //                     className="btn btn-outline-warning btn-block mt-4"
        //                     value='search'
        //                 />
        //  </form>
        //     </div>
     )
  
 }

}


export default UserSearch;