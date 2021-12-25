import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { Grid,Paper, Avatar, TextField, Button, Typography} from '@material-ui/core'
import AirplanemodeActiveOutlinedIcon from '@mui/icons-material/AirplanemodeActiveOutlined';
class UpdateUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
        
        FirstName: '',
         LastName: '',
        Email:'' ,
       
        PassportNumber:''
    };
  }


  componentDidMount() {
    
    axios
      .get('http://localhost:8000/user/user_info/'+this.props.match.params.id)
      .then(res => {
       
        this.setState({
            FirstName:  res.data.FirstName,
            LastName: res.data.LastName,
            Email:res.data.Email,
            
            PassportNumber:res.data.PassportNumber
       
        })
        
      })
      .catch(err => {
        
      })
  };



  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
        FirstName: this.state.FirstName,
        LastName: this.state.LastName,
        Email:this.state.Email ,
        Password: this.state.Password,
        PassportNumber:this.state.PassportNumber ,
    };

    axios
      .post('http://localhost:8000/user/update/'+this.props.match.params.id, data)
      .then(res => {
      //  this.props.history.push('/');
      })
      
      .catch(err => {
        console.log("Error in User!");
      })
      alert("Inforamtion is updated successfully")
      this.props.history.push('/');
  };


  render() {
    const paperStyle={padding :20,height:'30%',width:'30%', margin:"50px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}
    return (



      <Grid >
      <Paper elevation={10} style={paperStyle}>
          <Grid align='center'>
               <Avatar style={avatarStyle}><AirplanemodeActiveOutlinedIcon/></Avatar>
              <h2>Update Your Information</h2>
          
          </Grid>
         
          <form noValidate onSubmit={this.onSubmit}>
         
          <TextField  label='First Name'
         placeholder={this.state.FirstName}
                 name='FirstName'
                    
                    value={this.state.FirstName}
                    onChange={this.onChange}
          fullWidth />
          
     
          <TextField label='Last Name'
          
                placeholder={this.state.LastName}
                name='LastName'
                value={this.state.LastName}
                onChange={this.onChange}
          fullWidth />

          <TextField label='Passport Number'
          placeholder='Enter Your Passport Number' 
                    name='PassportNumber'
                    value={this.state.PassportNumber}
                    onChange={this.onChange}
          fullWidth />
          <TextField label='Email'
          placeholder='Enter Your Email' 
                    name='Email'
                    value={this.state.Email}
                    onChange={this.onChange}
          fullWidth />
          
          <h4></h4>
          <Button type='submit'
           color='primary' 
           variant="contained" 
           style={btnstyle}
            fullWidth>Update</Button>
          
          </form>
      </Paper>
  </Grid>

 




    );
  }
}

export default UpdateUser;