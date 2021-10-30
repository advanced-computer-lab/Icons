
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CreateFlight from './Admincomponents/CreateFlight';

class App extends Component  {
  render (){
  return (
    <Router>
        <div>
        <Route path='/create_flight' component={CreateFlight} />
    
        </div>
      </Router>
  );
  }
}

export default App;