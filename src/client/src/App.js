
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

import Return_Seats from './Usercomponents/Return_Seats';
import UpdateUser from './Usercomponents/UpdateUser';
import Guest_Summary from './Usercomponents/Guest_Summary';

import Sign_Up from './Admincomponents/Sign_Up';
import User_Login from './Admincomponents/User_Login';
import Change_Password from './Admincomponents/Change_Password';
import Sel_Res_Dep from './Usercomponents/Sel_Res_Dep';
import Edit_Deperature_seats from './Usercomponents/Edit_Deperature_seats';

import Sel_Res_Return from './Usercomponents/Sel_Res_Return';
import Edit_Return_seats from './Usercomponents/Edit_Return_seats';

import Edit_Flight_Search from './Usercomponents/Edit_Flight_Search';
import Edit_Flight_Search_Results from './Usercomponents/Edit_Flight_Search_Results';
import Edit_Flight_Departure_seats from './Usercomponents/Edit_Flight_Departure_seats';    

import Edit_Departure_Summary from './Usercomponents/Edit_Departure_Summary';  


import Edit_Flight_Search_Return from './Usercomponents/Edit_Flight_Search_Return'; 

import Edit_Flight_Return_Search_Results from './Usercomponents/Edit_Flight_Return_Search_Results'; 
import Edit_Flight_Return_seats from './Usercomponents/Edit_Flight_Return_Seats'; 
import Edit_Return_Summary from './Usercomponents/Edit_Return_Summary';   
import User_Home from './Usercomponents/User_Home';   
import Home from './Admincomponents/Home';
import GuestHome from './Usercomponents/GuestHome';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Route  exact path='/Home' component={GuestHome} />
        <Route  path='/Admin_Home' component={Home} />
        <Route  path='/view_all' component={ViewFlights} />
          <Route path='/create_flight' component={CreateFlight} />
          <Route path='/update_flight/:id' component={UpdateFlight} />
          <Route path='/flight_info/:id' component={FlightInfo} />
          <Route path='/search_flight' component={SearchFlights} />
          <Route  path='/search_flight_results' component={ViewSearchResults} />

          <Route path='/search/:user_id' component={UserSearch} />
          <Route path='/search_results/:user_id' component={UserSearchResults} />
          <Route path='/returnflight_results/:user_id/:id' component={UserSearchReturn} />
          
          <Route path='/Departure_seats/:user_id/:id/:id2' component={Departure_Seats} />
          <Route path='/Return_seats/:user_id/:id/:id2' component={Return_Seats} />
         
          <Route path='/summary/:user_id/:id/:id2' component={Summary} />
          <Route path='/Current_Reservations/:user_id' component={CurrentReservations} />
          <Route path='/Thankyou/:user_id/:id/:id2' component={Thankyou} />
          <Route path='/Reservation_Info/:user_id/:id' component={Reservation_Info}/>
          <Route path='/Update_Info/:user_id' component={UpdateUser} />
          <Route path='/Guest_Summary/:user_id/:id/:id2' component={Guest_Summary} />

  
          <Route path='/sign_up' component={Sign_Up} />
          <Route path='/login' component={User_Login} />
          <Route path='/change_password/:id' component={Change_Password} />

          <Route path='/res_dep_flight/:user_id/:id/:id2/:id3/:id4' component={Sel_Res_Dep} />
          <Route path='/edit_dep_seats/:user_id/:id/:id2' component={Edit_Deperature_seats} />

          <Route path='/res_return_flight/:user_id/:id/:id2/:id3/:id4' component={Sel_Res_Return} />

          <Route path='/edit_return_seats/:user_id/:id/:id2' component={Edit_Return_seats} /> 

          <Route path='/edit_flight_search/:user_id/:id/:id2/:id3/:id4' component={Edit_Flight_Search} />
          <Route path='/edit_flight_search_results/:user_id/:id/:id2/:id3' component={Edit_Flight_Search_Results} />
          <Route path='/edit_flight_dep_seats/:user_id/:id/:id2/:id3/:id4' component={Edit_Flight_Departure_seats} />
          <Route path='/edit_flight_dep_summary/:user_id/:id/:id2/:id3/:id4' component={Edit_Departure_Summary} />



          <Route path='/edit_flight_search_return/:user_id/:id/:id2/:id3/:id4' component={Edit_Flight_Search_Return} />
          <Route path='/edit_flight_return_search_results/:user_id/:id/:id2/:id3' component={Edit_Flight_Return_Search_Results} />

          <Route path='/edit_flight_return_seats/:user_id/:id/:id2/:id3/:id4' component={Edit_Flight_Return_seats} />
          <Route path='/edit_flight_return_summary/:user_id/:id/:id2/:id3/:id4' component={Edit_Return_Summary} />


        </div>
      </Router>
    );
  }
}

export default App;