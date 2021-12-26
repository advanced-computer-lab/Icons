import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid,Paper, Avatar, TextField, Button, Typography} from '@material-ui/core'
import AirplanemodeActiveOutlinedIcon from '@mui/icons-material/AirplanemodeActiveOutlined';

import axios from 'axios';
class Sign_Up extends Component {
    constructor() {
        super();
        this.state = {
         
            FirstName:'',
            LastName:'',
            Email:'',
            HomeAddress:'' ,
            PassportNumber:'',
            PhoneNumber:'',
            UserName:'',
            Password:'' 

        };
      } 





      onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
      };
       onSubmit = e => {
        e.preventDefault();
    
        const data = {
       
            FirstName:this.state.FirstName,
            LastName:this.state.LastName,
            Email:this.state.Email,
            HomeAddress:this.state.HomeAddress ,
            PassportNumber:this.state.PassportNumber,
            PhoneNumber:this.state.PhoneNumber,
            UserName:this.state.UserName,
             Password:this.state.Password
        };
  

        axios
        .post('http://localhost:8000/user/sign_up', data)
        .then(res => {
          this.setState({
            FirstName:'',
            LastName:'',
            Email:'',
            HomeAddress:'' ,
            PassportNumber:'',
            PhoneNumber:'',
            UserName:'',
           Password:''
          })
          this.props.history.push('/login')
        })
        .catch(err => {
          console.log("Error in CreateUser!");
        })
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
                  <h2>Register</h2>
              </Grid>
              <form noValidate onSubmit={this.onSubmit}>
              <TextField label='First Name'  name='FirstName'
               value={this.state.FirstName}
                onChange={this.onChange} placeholder='Enter Your First Name' fullWidth required/>
              <TextField label='Last Name' value={this.state.LastName }
                                onChange={this.onChange} name='LastName' placeholder='Enter Your Last Name' fullWidth required/>
              <TextField  unique label='Email' value={this.state.Email} onChange={this.onChange}
               name='Email' placeholder='Enter Your Email' type='email' fullWidth required/>
    
    
    
    
              <TextField label='Username' value={this.state.UserName}
      onChange={this.onChange}  unique name='UserName' placeholder='Enter username' fullWidth required/>
              <TextField label='Password' value={this.state.Password} onChange={this.onChange} name='Password' placeholder='Enter password' type='password' fullWidth required/>
             
              <TextField label='Passport Number'  value={this.state.PassportNumber} onChange={this.onChange}
                                  name='PassportNumber'  unique  placeholder='EnterYour  Passport Number' fullWidth required/>
              <TextField label='Phone Number' 
                value={this.state.PhoneNumber}
                onChange={this.onChange} name='PhoneNumber'   placeholder='Enter Your Phone Number' fullWidth required/>
              <TextField label='Home Address' value={this.state.HomeAddress}  onChange={this.onChange} name='HomeAddress' placeholder='Enter Your Home Address' fullWidth required/>
              <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Register</Button>
              </form>
            
          </Paper>
      </Grid>
    
    
    
                        
                               
    
    
    
    
    
    
                                
    
    
    
    
    
         )
     }
    

}


export default Sign_Up;