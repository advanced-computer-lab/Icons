
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';
import { Grid,Paper, Avatar, TextField, Button, Typography} from '@material-ui/core'
import AirplanemodeActiveOutlinedIcon from '@mui/icons-material/AirplanemodeActiveOutlined';
class Change_Password extends Component {
    constructor() {
        super();
        this.state = {
         
         
            NewPassword:'',
            Password:'' 

        };
      } 





      onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
      };
       onSubmit = e => {
        e.preventDefault();
    
        const data = {
       
           
            NewPassword:this.state.NewPassword,
             Password:this.state.Password
        };
  

        axios
        .post('http://localhost:8000/user/change_password/'+this.props.match.params.id, data)
        .then(res => {
          this.setState({
           
            UserName:'',
           Password:''
          })

          // this.props.history.push('/');
        })
        .catch(err => {
        //   console.log("Error in CreateFlight!");
        alert("Wrong old Password")
        })
        alert("password changed sucessfully")
        this.props.history.push('/');
    };
 render (){
  const paperStyle={padding :20,height:'70vh',width:280, margin:"50px auto"}
  const avatarStyle={backgroundColor:'#1bbd7e'}
  const btnstyle={margin:'8px 0'}
     return (
      

        <form noValidate onSubmit={this.onSubmit}>



<Grid >
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}><AirplanemodeActiveOutlinedIcon/></Avatar>
                    <h2>Update Password</h2>
                
                </Grid>
               
                
               
                <TextField  label='Old Password'
                         placeholder='Enter Your Old Password' 
                             name='Password'
                           
                            value={this.state.Password}
                            onChange={this.onChange}
                type={'password'}
                fullWidth required/>
                
           
                <TextField label='New Password'
                   name='NewPassword'
 
                   value={this.state.NewPassword}
                   onChange={this.onChange}
               
                type={'password'}
                fullWidth required/>

              <h4></h4>
                <Button type='submit'
                 color='primary' 
                 variant="contained" 
                 style={btnstyle}
                  fullWidth>Update</Button>
                
                
            </Paper>
        </Grid>




        
{/*         
             
                 
                        <div className='form-group'>
                          <input
                            type='text'
                            placeholder='NewPassword'
                            name='NewPassword'
                            className='form-control'
                            value={this.state.NewPassword}
                            onChange={this.onChange}
                          />
                        </div>
                        <br />
                        <div className='form-group'>
                          <input
                            type='text'
                            placeholder='Password'
                            name='Password'
                            className='form-control'
                            value={this.state.Password}
                            onChange={this.onChange}
                          />
                        </div>
                        
                        
                        <br />
                        <input
                            type="submit"
                            className="btn btn-outline-warning btn-block mt-4"
                        /> */}
         </form>
            // </div>
     )
 }

}


export default Change_Password;
