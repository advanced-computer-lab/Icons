import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ReservationInfoCard from './ReservationInfoCard'
class Reservation_Info extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flights: []
      
    };
  }


  componentDidMount() {
     
       axios
      .get('http://localhost:8000/user/reservation_info/'+this.props.match.params.user_id+"/"+this.props.match.params.id)
      .then(res => {
         
        this.setState({
          flights: res.data
        })
      })
      .catch(err => {
        console.log("Error from ShowFlightDetails");
      })
      
  };

  onDeleteClick (id) {
   
    axios
    .get('http://localhost:8000/user/send_mail/'+this.props.match.params.user_id+"/"+this.props.match.params.id)
      .then(res => {
     
       
      })
      .catch(err => {
     
      })


    axios
    .delete('http://localhost:8000/user/delete_reservation/'+this.props.match.params.id)
      .then(res => {
        alert("Reservation is canceled sucessfully !!")
        this.props.history.push('/Current_Reservations/'+this.props.match.params.user_id);
      })
      .catch(err => {
     
      })
  };

  

  render() {

    const flights = this.state.flights;
   
    
 
        let summaryList;
    
        if(!flights) {
          summaryList = "there is no Reservation record!";
        } else {
          summaryList = flights.map((summary) =>
            <ReservationInfoCard summary={summary} res_id = {this.props.match.params.id} />
        
          );
        }
    return (
      <div>

     <div>
       {summaryList}
     </div>
    <br/>


          
            <div className="col-md-6">
            <div className='delete-button'   >
              <button type="button" className="btn btn-outline-danger btn-lg btn-block" onClick={ () => { if(window.confirm('Are you sure you want to cancel this reservation ?') == true ) {
                this.onDeleteClick(flights._id) ; 
              };}}  >Delete Flight</button>
              </div>
              <br />
            </div>
            </div>

           
    );
  }
}

export default Reservation_Info;