import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Flight from './Flight';

class ViewSearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flights: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:8000/admin/search')
      .then(res => {
        this.setState({
          flights: res.data
        })
      })
      .catch(err =>{
        console.log('Error from ShowFlightsList');
      })
  };


  render() {
    const flights= this.state.flights;
    console.log(this.state.flights)
    console.log("PrintFlight: " + flights);
    let flightList;

    if(!flights) {
      flightList = "there is no flight record!";
    } else {
      flightList = flights.map((flight) =>
        <Flight flight={flight}  />
      );
    }

    return (
      <div className="ShowFlightsList">
        <Link to="/"> Show FlightList </Link>
      <br/>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />
              <h2 className="display-4 text-center"> Search Results </h2>
              
            </div>

          </div>

          <div className="list">
                {flightList}
          </div>
        </div>
      </div>
    );
  }
}

export default ViewSearchResults;