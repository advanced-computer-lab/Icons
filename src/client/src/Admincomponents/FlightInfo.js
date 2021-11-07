import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class FlightInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flights: {}
    };
  }


  componentDidMount() {
      // console.log("Print id: " + this.props.match.params.id);
      axios
      .get('http://localhost:8000/admin/flight_info/'+this.props.match.params.id)
      .then(res => {
          // console.log("Print-showBookDetails-API-response: " + res.data);
        this.setState({
          flights: res.data
        })
      })
      .catch(err => {
        console.log("Error from ShowFlightDetails");
      })
  };

  onDeleteClick (id) {
      console.log(id);
    axios
    .delete('http://localhost:8000/admin/delete_flight/'+id)
      .then(res => {
        this.props.history.push("/");
      })
      .catch(err => {
        console.log("Error form ShowFlightDetails_deleteClick");
      })
  };

  

  render() {

    const flights = this.state.flights;
    let FlightItem = <div>
      <table className="table table-hover table-dark">
        {/* <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead> */}
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Flight Number</td>
            <td>{ flights.Flight_number}</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Departure Time</td>
            <td>{ flights.Departure_time }</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Arrival Time</td>
            <td>{ flights.Arrival_time }</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Number Of Economy Seats</td>
            <td>{ flights.Number_of_Economy_Seats }</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>Number Of Business Class Seats</td>
            <td>{ flights.Number_of_Business_Class_Seats }</td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>Arrival Airport</td>
            <td>{ flights.Arrival_airport }</td>
          </tr>
          <tr>
            <th scope="row">7</th>
            <td>Departure Airport</td>
            <td>{ flights.Departure_airport }</td>
          </tr>
          <tr>
            <th scope="row">8</th>
            <td>Arrival Date</td>
            <td>{ flights.Arrival_date }</td>
          </tr>
          <tr>
            <th scope="row">9</th>
            <td>Departure Date</td>
            <td>{ flights.Departure_date }</td>
          </tr>
        </tbody>
      </table>
    </div>

    return (
      <div className="ShowFlightDetails">
        <div className="container">
          <div className="row">
            <div className="col-md-10 m-auto">
              <br /> <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Flights List
              </Link>
            </div>
            <br />
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Flight's Record</h1>
              <p className="lead text-center">
                  View Flight's Info
              </p>
              <hr /> <br />
            </div>
          </div>
          <div> 
                        { FlightItem }
          </div>

          <div className="row">
            <div className="col-md-6">
            <div className='delete-button'   >
              <button type="button" className="btn btn-outline-danger btn-lg btn-block" onClick={ () => { if(window.confirm('Are you sure you want to delete this flight ?') == true ) {
                this.onDeleteClick(flights._id) ; 
              };}}  >Delete Flight</button>
              </div>
              <br />
            </div>
            

            <div className="col-md-6">
              <Link to={`/update_flight/${flights._id}`} className="btn btn-outline-info btn-lg btn-block">
                    Edit Flight
              </Link>
              <br />
            </div>

          </div>
            {/* <br />
            <button type="button" class="btn btn-outline-info btn-lg btn-block">Edit Book</button>
            <button type="button" class="btn btn-outline-danger btn-lg btn-block">Delete Book</button> */}

        </div>
      </div>
    );
  }
}

export default FlightInfo;