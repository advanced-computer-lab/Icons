import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CreateFlight from './Admincomponents/CreateFlight';
import FlightInfo from './Admincomponents/FlightInfo';
import SearchFlights from './Admincomponents/SearchFlights';

class App extends Component  {
  render (){
  return (
    <Router>
        <div>
        <Route path='/create_flight' component={CreateFlight} />
        <Route path='/flight_info/:id' component={FlightInfo} />
          <Route path='/search_flight' component={SearchFlights} />
    
        </div>
      </Router>
  );
  }
}

export default App;