
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
          this.props.history.push('/');
        })
        .catch(err => {
          console.log("Error in CreateFlight!");
        })
    };
 render (){
     return (
        <div className = 'CreateFlight' >

        <form noValidate onSubmit={this.onSubmit}>
                        <div className='form-group'>
                          <input
                            type='text'
                            placeholder='FirstName'
                            name='FirstName'
                            className='form-control'
                            value={this.state.FirstName}
                            onChange={this.onChange}
                          />
                        </div>
                        <br />
        
        
                        <div className='form-group'>
                          <input
                            type='text'
                            placeholder='LastName'
                            name='LastName'
                            className='form-control'
                            value={this.state.LastName }
                            onChange={this.onChange}
                          />
                        </div>
                        <br />
                        <div className='form-group'>
                          <input
                            type='text'
                            placeholder='Email'
                            name='Email'
                            className='form-control'
                            value={this.state.Email}
                            onChange={this.onChange}
                          />
                        </div>
                        <br />
        
        
                        <div className='form-group'>
                          <input
                            type='text'
                          
                            placeholder='HomeAddress'
                            name='HomeAddress'
                            className='form-control'
                            value={this.state.HomeAddress}
                            onChange={this.onChange}
                          />
                        </div>
                        <br />
                        <div className='form-group'>
                          <input
                            type='text'
                          
                            placeholder='PassportNumber'
                            name='PassportNumber'
                            className='form-control'
                            value={this.state.PassportNumber}
                            onChange={this.onChange}
                          />
                        </div>
                        <br />
                        <div className='form-group'>
                          <input
                            type='text'
                            placeholder='PhoneNumber'
                            name='PhoneNumber'
                            className='form-control'
                            value={this.state.PhoneNumber}
                            onChange={this.onChange}
                          />
                        </div>
                        <br />
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


export default Sign_Up;
