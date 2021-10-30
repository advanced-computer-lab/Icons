
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CreateFlight from './Admincomponents/CreateFlight';
import ViewFlights from './Admincomponents/ViewFlights';


class App extends Component  {
  render (){
  return (
    <Router>
        <div>
        <Route exact path='/' component={ViewFlights} />
        <Route path='/create_flight' component={CreateFlight} />
    
        </div>
      </Router>
  );
  }
}

export default App;