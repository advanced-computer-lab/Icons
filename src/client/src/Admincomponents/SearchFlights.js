
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
class SearchFlights extends Component {
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
            Arrival_date:''
        };
      } 





      onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
      };
      onSubmit = e => {
        e.preventDefault();
    
        const data = {
       
            Flight_number: this.state.Flight_number,
            Departure_time: this.state.Departure_time,
            Arrival_time:this.state.Arrival_time ,
            Number_of_Economy_Seats: this.state.Number_of_Economy_Seats,
            Number_of_Business_Class_Seats: this.state.Number_of_Business_Class_Seats,
            Arrival_airport: this.state.Arrival_airport,
            Departure_airport: this.state.Departure_airport,
            Departure_date: this.state.Departure_date,
            Arrival_date:this.state.Arrival_date
        };



       
        axios
        .post('http://localhost:8000/admin/createe', data)
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
            Arrival_date:''
          })
          
          this.props.history.push('/search_flight_results');
        
        })
        .catch(err => {
          console.log("Error in CreateFlight!");
        })
    };
 render (){
     return (
        <div className = 'SearchFlight' >

        <form Validate onSubmit={this.onSubmit}>
                        <div className='form-group'>
                          <input
                            type='text'
                          //  required = 'true'
                            placeholder='Flight_number'
                            name='Flight_number'
                            className='form-control'
                            value={this.state.Flight_number}
                            onChange={this.onChange}
                          />
                        </div>
                        <br />
        
        
                        <div className='form-group'>
                          <input
                            type='text'
                            
                            placeholder='Departure_time'
                            name='Departure_time'
                         //   required = 'true'
                            className='form-control'
                            value={this.state.Departure_time }
                            onChange={this.onChange}
                          />
                        </div>
                        <br />
                        <div className='form-group'>
                          <input
                            type='text'
                       //     required = 'true'
                            placeholder='Arrival_time'
                            name='Arrival_time'
                            className='form-control'
                            value={this.state.Arrival_time}
                            onChange={this.onChange}
                          />
                        </div>
                        <br />
        
        
                        <div className='form-group'>
                          <input
                            type='number'
                         //   required = 'true'
                            placeholder='Number_of_Economy_Seats'
                            name='Number_of_Economy_Seats'
                            className='form-control'
                            value={this.state.Number_of_Economy_Seats}
                            onChange={this.onChange}
                          />
                        </div>
                        <br />
                        <div className='form-group'>
                          <input
                            type='number'
                      //      required = 'true'
                            placeholder='Number_of_Business_Class_Seats'
                            name='Number_of_Business_Class_Seats'
                            className='form-control'
                            value={this.state.Number_of_Business_Class_Seats}
                            onChange={this.onChange}
                          />
                        </div>
                        <br />
                        <div className='form-group'>
                          <input
                            type='text'
                      //      required = 'true'
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
                        //    required = 'true'
                            placeholder='Departure_airport'
                            name='Departure_airport'
                            className='form-control'
                            value={this.state.Departure_airport}
                            onChange={this.onChange}
                          />
                        </div>
                        <br />
                        <div className='form-group'>
                          <input
                            type='date'
                         //   required = 'true'
                            placeholder='Departure_date'
                            name='Departure_date'
                            className='form-control'
                            value={this.state.Departure_date}
                            onChange={this.onChange}
                          />
                        </div>
                        <br />
                        <div className='form-group'>
                          <input
                            type='date'
                         //   required = 'true'
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


export default SearchFlights;
