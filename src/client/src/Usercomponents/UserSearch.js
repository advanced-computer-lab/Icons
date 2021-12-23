import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
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
     return (
        <div className = 'UserSearchFlight' >

        <form Validate onSubmit={this.onSubmit}>
                      
        
        
                   
                        <br />
                        <br />
                        <div className='form-group'>
                        <label for="cabin">Cabin class: </label>
                        <select name = 'cabin' id = 'cabin' value ={this.state.cabin} onChange={this.onChange}>
                        <  option  value='Economy' >Economy</option>
                        <option value='Bussiness'>Bussines</option>
                        
                         
                        </select>
                      
                        
                        
                        </div>
                        <br />
   
                        <div className='form-group'>
                         
                          <input
                            type='number'
                            min="1"
                            required 
                            placeholder=' Number_of_Adults '
                            name='number_of_people'
                            className='form-control'
                            value={this.state.number_of_people}
                            onChange={this.onChange}
                          />
                        </div>
                        <br />
                        <div className='form-group'>
                          
                          <input
                            type='number'
                           min="0"
                            required 
                            placeholder='number_of_children:'
                            name='number_of_children'
                            className='form-control'
                            value={this.state.number_of_children}
                            onChange={this.onChange}
                          />
                        </div>
                        <br />
                       
                        <div className='form-group'>
                          <input
                            type='text'
                            required 
                            placeholder='Arrival_airport'
                            name='Arrival_airport'
                            className='form-control'
                            value={this.state.Arrival_airport}
                            onChange={this.onChange}
                          />
                        </div>
                        <br />
                        <div className='form-group'>
                          <input
                            type='text'
                            required 
                            placeholder='Departure_airport'
                            name='Departure_airport'
                            className='form-control'
                            value={this.state.Departure_airport}
                            onChange={this.onChange}
                          />
                        </div>
                        <br />
                        <div className='form-group'>
                          <label>
                            Departure Date :
                            </label>
                            
                          <input
                            type='date'
                            required 
                            placeholder='Departure_date'
                            name='Departure_date'
                            className='form-control'
                            value={this.state.Departure_date}
                            onChange={this.onChange}
                          />
                        </div>
                        <br />
                        <div className='form-group'>
                        <label>
                            Arrival Date :
                           
                            </label>
                            
                          <input 
                            type='date'
                            required 
                            placeholder='Arrival_date'
                            name='Arrival_date'
                            className='form-control'
                            value={this.state.Arrival_date}
                            onChange={this.onChange}
                          />
                        </div>
                        <br />
                        <input
                            type="submit"
                            className="btn btn-outline-warning btn-block mt-4"
                            value='search'
                        />
         </form>
            </div>
     )
 }

}


export default UserSearch;
