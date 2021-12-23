
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';
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
          this.props.history.push('/search/'+res.data);
        })
        .catch(err => {
        //   console.log("Error in CreateFlight!");
      alert("Invalid Username or password") 
      // this.props.history.push('/')
      
     
        })
    };
 render (){
     return (
        <div className = 'CreateFlight' >

        <form noValidate onSubmit={this.onSubmit}>
                
        
        
             
                 
                        <div className='form-group'>
                          <input
                            type='text'
                            placeholder='UserName'
                            name='UserName'
                            className='form-control'
                            value={this.state.UserName}
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
                        />
         </form>
            </div>
     )
 }

}


export default User_Login;
