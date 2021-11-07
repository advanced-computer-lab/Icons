import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CreateFlight from './Admincomponents/CreateFlight';
import FlightInfo from './Admincomponents/FlightInfo';
import UpdateFlight from './Admincomponents/UpdateFlight';

class App extends Component  {
  render (){
  return (
    <Router>
        <div>
        <Route path='/create_flight' component={CreateFlight} />
        <Route path='/update_flight/:id' component={UpdateFlight}/>
          <Route path='/flight_info/:id' component={FlightInfo} />
    
        </div>
      </Router>
  );
  }
}

export default App;