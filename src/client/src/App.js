
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CreateFlight from './Admincomponents/CreateFlight';
import FlightInfo from './Admincomponents/FlightInfo';

import SearchFlights from './Admincomponents/SearchFlights';
import UpdateFlight from './Admincomponents/UpdateFlight';
import ViewFlights from './Admincomponents/ViewFlights';
import ViewSearchResults from './Admincomponents/ViewSearchResults';
import UpdateUser from './Usercomponents/UpdateUser';
class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Route exact path='/' component={ViewFlights} />
          <Route path='/create_flight' component={CreateFlight} />
          <Route path='/update_flight/:id' component={UpdateFlight} />
          <Route path='/flight_info/:id' component={FlightInfo} />
          <Route path='/search_flight' component={SearchFlights} />
          <Route path='/search_flight_results' component={ViewSearchResults} />
          <Route path='/update_user' component={UpdateUser} />
          <Route path='/Guest_Summary/:id' component={Guest_Summary} />
          <Route path='/returnflight_results/:id' component={UserSearchReturn} />
        </div>
      </Router>
    );
  }
}

export default App;