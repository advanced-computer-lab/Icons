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
  
    axios
    .get('http://localhost:8000/user/helper7/'+this.props.match.params.user_id)
    
    .then(res => {
        this.setState({
            summarys: res.data
           })
        
    })
    .catch(err =>{
      console.log('Error from ShowFlightsList');
    })
   

    if(this.state.summarys.length == 0){
        
      this.setState({})
    }
};
   


  render() {
    const summarys = this.state.summarys;
console.log(summarys)
    let summaryList;

    if(!summarys) {
      summaryList = "there is Current_Reservations!";
    } else {
      summaryList = summarys.map((summary) =>
        <CurrentReservationsCard summary={summary}  />
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
          {/* <Link to={`/Reservation_Info/${summaryList._id}`}>
     <button type="button">
         Proceed 
     </button>
 </Link> */}
        </div>
      </div>
    );
  }
}

export default CurrentReservations;