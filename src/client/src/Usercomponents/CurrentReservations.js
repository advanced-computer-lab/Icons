import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import CurrentReservationsCard from './CurrentReservationsCard'

class CurrentReservations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      summarys: [

      ]
    };
  }

  componentDidMount() {
  console.log(this.props.match.params.user_id)
  
    axios
    .get('http://localhost:8000/user/current_reservations/'+this.props.match.params.user_id+"/"+this.props.match.params.id)
    
    .then(res => {
        this.setState({
            summarys: res.data
           })
        
    })
    .catch(err =>{
      console.log('Error from ShowFlightsList');
    })
   

    
};
   
handledelete = (id) =>{
  this.props.history.push('/Reservation_Info/'+this.props.match.params.user_id+'/'+id);
};

  render() {
  
    const summarys = this.state.summarys;
console.log(summarys)
    let summaryList;

    if(!summarys) {
      summaryList = "there is Current_Reservations!";
    } else {
      summaryList = summarys.map((summary) =>
        <CurrentReservationsCard summary={summary} handledelete = {this.handledelete} />
     
      );
    

    }

    return (
      <div className="ShowBookList">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />
              <h2 className="display-4 text-center">My Reservations </h2>
            </div>

           

          </div>

          <div className="list">
                {summaryList}
          </div>
      
        </div>
      </div>
    );
  }
}

export default CurrentReservations;