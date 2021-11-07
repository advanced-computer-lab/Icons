
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


class UpdateFlight extends Component {
  constructor(props) {
    super(props);
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




  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get('http://localhost:8000/admin/flight_info/'+this.props.match.params.id)
      .then(res => {
        // this.setState({...this.state, book: res.data})
        this.setState({
          Flight_number: res.data.Flight_number,
        Departure_time: res.data.Departure_time,
        Arrival_time:res.data.Arrival_time ,
        Number_of_Economy_Seats: res.data.Number_of_Economy_Seats,
        Number_of_Business_Class_Seats: res.data.Number_of_Business_Class_Seats,
        Arrival_airport: res.data.Arrival_airport,
        Departure_airport: res.data.Departure_airport,
        Departure_date: res.data.Departure_date,
        Arrival_date:res.data.Arrival_date
        })
        console.log(res.data.Flight_number + ' ' + this.state.Flight_number)
      })
      .catch(err => {
        console.log("Error from UpdateflightInfo");
      })
  };
 

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
      .post('http://localhost:8000/admin/update/'+this.props.match.params.id, data)
      .then(res => {
        this.props.history.push('/');
      })
      
      .catch(err => {
        console.log("Error in flight!");
      })
  };


  render() {
    return (
        <div className="UpdateFlight">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show All Flights
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Edit Flight</h1>
              <p className="lead text-center">
                  Update Flight's Info
              </p>
            </div>
          </div>

          <div className="col-md-8 m-auto">
          <form noValidate onSubmit={this.onSubmit}>
            <div className='form-group'>
              <label htmlFor="Flight_number">Flight Number</label>
              <input
                type='text'
                placeholder={this.state.Flight_number}
                name='Flight_number'
                className='form-control'
                value={this.state.Flight_number}
                onChange={this.onChange}
              />
            </div>
            <br />

            <div className='form-group'>
            <label htmlFor="Departure_time">Departure Time</label>
              <input
                type='text'
                placeholder={this.state.Departure_time}
                name='Departure_time'
                className='form-control'
                value={this.state.Departure_time}
                onChange={this.onChange}
              />
            </div>
            <br />

            <div className='form-group'>
            <label htmlFor="Arrival_time">Arrival Time</label>
              <input
                type='text'
                placeholder={this.state.Arrival_time}
                name='Arrival_time'
                className='form-control'
                value={this.state.Arrival_time}
                onChange={this.onChange}
              />
            </div>
            <br />

            <div className='form-group'>
            <label htmlFor="Number_of_Economy_Seats">Number Of Economy Seats</label>
              <input
                type='number'
                placeholder={this.state.Number_of_Economy_Seats}
                name='Number_of_Economy_Seats'
                className='form-control'
                value={this.state.Number_of_Economy_Seats}
                onChange={this.onChange}
              />
            </div>
            <br />

            <div className='form-group'>
            <label htmlFor="Number_of_Business_Class_Seats">Number Of Business Class Seats</label>
              <input
                type='number'
                placeholder={this.state.Number_of_Business_Class_Seats}
                name='Number_of_Business_Class_Seats'
                className='form-control'
                value={this.state.Number_of_Business_Class_Seats}
                onChange={this.onChange}
              />
            </div>
            <br />
            <div className='form-group'>
            <label htmlFor="Arrival_airport">Arrival Airport</label>
              <input
                type='text'
                placeholder={this.state.Arrival_airport}
                name='Arrival_airport'
                className='form-control'
                value={this.state.Arrival_airport}
                onChange={this.onChange}
              />
            </div>
            <br />

            <div className='form-group'>
            <label htmlFor="Departure_airport">Departure Airport</label>
              <input
                type='text'
                placeholder={this.state.Departure_airport}
                name='Departure_airport'
                className='form-control'
                value={this.state.Departure_airport}
                onChange={this.onChange}
              />
            </div>
            <br />

            <div className='form-group'>
            <label htmlFor="Arrival_date">Arrival Date</label>
              <input
                type = 'yyyy-MM-dd'
                placeholder={this.state.Arrival_date}
                name='Arrival_date'
                className='form-control'
                value={this.state.Arrival_date}
                onChange={this.onChange}
              />
            </div>
            <br />

            <div className='form-group'>
            <label htmlFor="Departure_date">Departure Date</label>
              <input
                type='yyyy-MM-dd'
                placeholder={this.state.Departure_date}
                name='Departure_date'
                className='form-control'
                value={this.state.Departure_date}
                onChange={this.onChange}
              />
            </div>
            <br />

            <button type="submit" className="btn btn-outline-info btn-lg btn-block">Update Flight</button>
            </form>
          </div>

        </div>
      </div>
    );
  }
}

export default UpdateFlight;
