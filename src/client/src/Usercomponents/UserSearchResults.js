import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Flight2 from '../Admincomponents/Flight2';

class  UserSearchResults  extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      flights: []
    
     
    
    };
  }

  componentDidMount() {
    
    axios
      .get('http://localhost:8000/user/search_Results')
      .then(res => {
        this.setState({
          flights: res.data
          
          
          
        })
      })
      .catch(err =>{
        console.log('Error from ShowFlightsList');
      })
    
  };

  handledelete = (id) =>{
    if(window.confirm("Are you sure you want to book this flight ")==false){

    }
    else {
  this.props.history.push('/returnflight_results/'+this.props.match.params.user_id+'/'+id);
    }
};
  render() {
 


    const flights= this.state.flights;
    console.log("PrintFlight: " + flights);
    let flightList;
   
    if(!flights) {
      flightList = "there is no flight record!";
     } else {
      flightList = flights.map((flight) =>
        <Flight2 flight={flight} handledelete = {this.handledelete} />
        
      );
    
      }
    

    return (
      <div className="ShowFlightsList">
       
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

export default UserSearchResults;