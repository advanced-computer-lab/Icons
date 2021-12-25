
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';

import { Grid,Paper, Avatar, TextField, Button, Typography} from '@material-ui/core'
import AirplanemodeActiveOutlinedIcon from '@mui/icons-material/AirplanemodeActiveOutlined';


class User_Login extends Component {
    constructor() {
        super();
        this.state = {
         
         
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
       
           
            UserName:this.state.UserName,
             Password:this.state.Password
        };
  

        axios
        .post('http://localhost:8000/user/login', data)
        .then(res => {
          this.setState({
           
            UserName:'',
           Password:''
          })
          console.log(res.data)
          // this.props.history.push('/search/'+res.data);
          // this.props.history.push('/login')
          this.props.history.push('/Home/'+res.data)
        })
        .catch(err => {
        //   console.log("Error in CreateFlight!");
        console.log(err)
      alert("Invalid Username or password") 
     
      
     
        })
    };
 render (){
  const paperStyle={padding :20,height:'70vh',width:280, margin:"40px auto"}
  const avatarStyle={backgroundColor:'#1bbd7e'}
  const btnstyle={margin:'8px 0'}
     return (



      <Grid>
      <Paper elevation={10} style={paperStyle}>
          <Grid align='center'>
               <Avatar style={avatarStyle}><AirplanemodeActiveOutlinedIcon/></Avatar>
              <h2>Login</h2>
          </Grid>
          <form noValidate onSubmit={this.onSubmit}>
          < TextField
          name = "UserName"
           label='UserName' 
          placeholder='Enter username' 
          
          onChange={this.onChange}
          required 
          value={this.state.UserName}
          fullWidth required/>
         
          <TextField label='Password' 
          name = "Password"
          placeholder='Enter password' 
          type='password' 
          value={this.state.Password}
           onChange={this.onChange}
           required 
          fullWidth required/>
        
        

          <Button
          
           type='submit'
           color='primary' 
           variant="contained" 
           style={btnstyle} fullWidth>Login</Button>
          
           </form>
          <Typography > Do you have an account ?
               <Link to="/sign_up" >
                  Register 
          </Link>
          </Typography>
      </Paper>
  </Grid>


        // <div className = 'CreateFlight' >

        // <form noValidate onSubmit={this.onSubmit}>
                
        
        
             
                 
        //                 <div className='form-group'>
        //                   <input
        //                     type='text'
        //                     placeholder='UserName'
        //                     name='UserName'
        //                     className='form-control'
        //                     value={this.state.UserName}
        //                     onChange={this.onChange}
        //                   />
        //                 </div>
        //                 <br />
        //                 <div className='form-group'>
        //                   <input
        //                     type='text'
        //                     placeholder='Password'
        //                     name='Password'
        //                     className='form-control'
        //                     value={this.state.Password}
        //                     onChange={this.onChange}
        //                   />
        //                 </div>
                        
                        
        //                 <br />
        //                 <input
        //                     type="submit"
        //                     className="btn btn-outline-warning btn-block mt-4"
        //                 />
        //  </form>
        //     </div>
     )
 }

}


export default User_Login;
