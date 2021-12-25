
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CreateFlight from './Admincomponents/CreateFlight';
import FlightInfo from './Admincomponents/FlightInfo';

import SearchFlights from './Admincomponents/SearchFlights';
import UpdateFlight from './Admincomponents/UpdateFlight';
import ViewFlights from './Admincomponents/ViewFlights';
import ViewSearchResults from './Admincomponents/ViewSearchResults';

import CurrentReservations from './Usercomponents/CurrentReservations';
import Reservation_Info from './Usercomponents/Reservation_Info';
import Summary from './Usercomponents/Summary';
import Departure_Seats from './Usercomponents/Departure_Seats';

import Thankyou from './Usercomponents/Thankyou';
import UserSearch from './Usercomponents/UserSearch';
import UserSearchResults from './Usercomponents/UserSearchResults';
import UserSearchReturn from './Usercomponents/UserSearchReturn';
import ViewUsers from './Usercomponents/ViewUsers';
import Return_Seats from './Usercomponents/Return_Seats';
import UpdateUser from './Usercomponents/UpdateUser';
import Guest_Summary from './Usercomponents/Guest_Summary';


import navbar from './Admincomponents/Navbar';
import usernav from './Usercomponents/User_Home';
import Sign_Up from './Admincomponents/Sign_Up';
import User_Login from './Admincomponents/User_Login';
import Edit_Flight_Search from './Usercomponents/Edit_Flight_Search';
import Edit_Flight_Search_Return from './Usercomponents/Edit_Flight_Search_Return';
import Change_Password from './Admincomponents/Change_Password';


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
          <Route  path='/search_flight_results' component={ViewSearchResults} />
          <Route path='/search/:user_id' component={UserSearch} />
          <Route path='/search_results' component={UserSearchResults} />
          <Route path='/returnflight_results/:id' component={UserSearchReturn} />
          <Route path='/Departure_seats/:user_id' component={Departure_Seats} />
          <Route path='/Return_seats/:user_id' component={Return_Seats} />
          <Route path='/show/:id' component={ViewUsers} />
          <Route path='/summary/:user_id' component={Summary} />
          <Route path='/Current_Reservations/:user_id' component={CurrentReservations} />
          <Route path='/Thankyou/:user_id' component={Thankyou} />
          <Route path='/Reservation_Info/:id/:user_id' component={Reservation_Info}/>
          <Route path='/Update_Info/:id' component={UpdateUser} />
          <Route path='/Guest_Summary/:id' component={Guest_Summary} />
          
          <Route path='/sign_up' component={Sign_Up} />
          <Route path='/login' component={User_Login} />
          <Route path='/change_passowrd/:id' component={Change_Password} />
          
          <Route path='/navbar' component={navbar} />
          <Route path='/usernav' component={usernav}/>
         
          <Route path='/edit_flight_search/:user_id/:id/:id2/:id3/:id4' component={Edit_Flight_Search} />
        


          <Route path='/edit_flight_search_return/:user_id/:id/:id2/:id3/:id4' component={Edit_Flight_Search_Return} />

          
            

            


          
        </div>
      </Router>
    );
  }
}

export default App;