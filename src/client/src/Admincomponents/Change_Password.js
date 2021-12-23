
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';
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

          this.props.history.push('/');
        })
        .catch(err => {
        //   console.log("Error in CreateFlight!");
        alert("Wrong old Password")
        })
    };
 render (){
     return (
        <div className = 'CreateFlight' >

        <form noValidate onSubmit={this.onSubmit}>
                
        
        
             
                 
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
                        />
         </form>
            </div>
     )
 }

}


export default Change_Password;
