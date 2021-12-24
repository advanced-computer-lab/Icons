import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Flight4 from './Flight4';
class Sel_Res_Dep extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flights: []
    };
  }


  componentDidMount() {
      
      axios
      .get('http://localhost:8000/user/user_flight_info/'+this.props.match.params.user_id+"/"+this.props.match.params.id2+"/"+this.props.match.params.id)
      .then(res => {
          
        this.setState({
          flights: res.data
        })
      })
      .catch(err => {
        console.log("Error from ShowFlightDetails");
      })
  };


  onSubmit = e => {
    e.preventDefault();
   
if(this.state.flights.Availlable_Number_of_Economy_Seats ==0 && this.props.match.params.id3 == "Economy"){
    alert("There is no availlable seats !!!!")
}

else if(this.state.flights.Availlable_Number_of_Business_Seats ==0 && this.props.match.params.id3 == "Bussiness"){
    alert("There is no availlable seats !!!!")
}
else {
  this.props.history.push('/edit_dep_seats/'+this.props.match.params.user_id+'/'+this.props.match.params.id+"/"+this.props.match.params.id2);
}
  };

  handleSubmit = e =>{
    e.preventDefault();
    
  }
  

  render() {

    console.log(this.state.flights)
    const flights= this.state.flights;
    console.log("PrintFlight: " + flights);
    let flightList;

    if(!flights) {
      flightList = "there is no flight record!";
    } else {
      flightList = flights.map((flight) =>
        <Flight4 flight={flight}  />
      );
    }

return (
  <div className="ShowFlightsList">
  
  
  <br/>

  <br/>

    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <br />
          <h2 className="display-4 text-center"> Selected Departure Flight</h2>
          
        </div>

      </div>

      <div className="list">
            {flightList}
            <button   type="submit" onClick = {this.onSubmit} className="btn btn-outline-info btn-lg btn-block">Edit Seat</button>
            <br />
            <br />
            <button   type="submit" onClick = {this.handleSubmit} className="btn btn-outline-info btn-lg btn-block">Edit Flight</button>
      </div>
    </div>
  </div>
);
  }
}

export default Sel_Res_Dep;