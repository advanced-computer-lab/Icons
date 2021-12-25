import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
import AirplanemodeActiveOutlinedIcon from '@mui/icons-material/AirplanemodeActiveOutlined';


class Edit_Flight_Search extends Component {
    constructor(pros) {
        super(pros);
        this.state = {
           
            Departure_date: '',
            Arrival_date:'',
            cabin:'' 
            
            
        };
      } 


    
       

      onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
      };
      onSubmit = e => {
        e.preventDefault();
       
  var x;
     if(this.state.cabin===''){
        
    x ="Economy"
  }
     
    
    if(this.state.Arrival_date < this.state.Departure_date){
      alert('deparutre date must be greater or equal to arrival date ')
    }
    else {
    
        const data = {
       
           Cabin: x ,
            Departure_date: this.state.Departure_date,
            Arrival_date:this.state.Arrival_date
          
        };


        
       
        axios
        .post('http://localhost:8000/user/edit_search/'+this.props.match.params.user_id+"/"+this.props.match.params.id+"/"+this.props.match.params.id2+"/"+this.props.match.params.id3+"/"+this.props.match.params.id4, data)
        .then(res => {
          this.setState({
          
            Departure_date: '',
            Arrival_date:'',
           cabin :''
            
          })
        if(res.data.length == 0){
         alert('no flights matches your search criteria')
        }
        else {
         this.props.history.push('/edit_flight_search_results/'+this.props.match.params.user_id+"/"+this.props.match.params.id+"/"+this.props.match.params.id2+"/"+this.props.match.params.id4);
        }
        })
      
        .catch(err => {
          console.log("Error in SearchFlight!");
        })
      }
     
    };
 render (){
  const paperStyle={padding :20,height:'105vh',width:400, margin:"20px auto"}
  const avatarStyle={backgroundColor:'#1bbd7e'}
  const btnstyle={margin:'8px 0'}
     return (
    

        <form Validate onSubmit={this.onSubmit}>
                      
        
        
                      <Grid >
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}><AirplanemodeActiveOutlinedIcon/></Avatar>
                    <h2>Search Flight</h2>
                
                </Grid>
                <Grid item>
         
                        <label for="cabin">Cabin class: </label>
                        <select name = 'cabin' id = 'cabin' value ={this.state.cabin} onChange={this.onChange} >  
                        <  option  value='Economy' >Economy</option>
                        <option value='Bussiness'>Bussines</option>
                        
                         
                        </select>
                        
                        </Grid >
                
               <h4>Depature Date</h4>
                <TextField  
                placeholder='Enter Depature date' 
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
                 style={btnstyle}
                  fullWidth>Search</Button>
                
                
            </Paper>
        </Grid>
         </form>
          
     )
 }

}


export default Edit_Flight_Search;
