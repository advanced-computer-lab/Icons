import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


class Thankyou extends Component {
  constructor(props) {
    super(props);
  
  }

  componentDidMount() {
 
    axios                             
    .get('http://localhost:8000/user/save_reservation/'+this.props.match.params.user_id+"/"+this.props.match.params.id+"/"+this.props.match.params.id2)
    .then(res => {
        
       
    })
    .catch(err =>{
      console.log('Error from ShowFlightsList');
    })
  

    axios
    .get('http://localhost:8000/user/adjust_seats/'+this.props.match.params.user_id+"/"+this.props.match.params.id+"/"+this.props.match.params.id2)
    .then(res => {
        
       
    })
    .catch(err =>{
      console.log('Error from ShowFlightsList');
    })
    axios
    .get('http://localhost:8000/user/adjust_seats_db/'+this.props.match.params.user_id+"/"+this.props.match.params.id+"/"+this.props.match.params.id2)
    .then(res => {
        
       
    })
    .catch(err =>{
      console.log('Error from ShowFlightsList');
    })
    
   

};
   
onSubmit = e => {
  e.preventDefault();
 
  this.props.history.push('/');
// if(this.props.match.params.id == "undefined"){
// alert('you need to login')

// this.props.history.push('/test2')
// }
// else {
//   this.props.history.push('/Departure_seats/'+this.props.match.params.user_id+'/'+this.props.match.params.id+"/"+this.props.match.params.id2);
// }
};


  render() {
 

    return (
      <div className="ShowBookList">
        <div className="container">
        <h2>
            Thank you for dealing with us , we wish you happy and safe flight !
             
        </h2>
  <p>  
  if you plan to travel internationally, you will need to get a COVID-19 viral test (regardless of vaccination status or citizenship) no more than 1 day before you travel by air into the United States. You must show your negative result to the airline before you board your flight.
   If you recently recovered from COVID-19, you may instead travel with documentation of recovery from COVID-19 (i.e., your positive COVID-19 viral test result on a sample taken no more than 90 days before the flight’s departure from a foreign country and a letter from a licensed healthcare provider or a public health official stating that you were cleared to travel).
          </p>
          <p>
          You are considered fully vaccinated:

2 weeks (14 days) after your dose of an accepted single-dose vaccine
2 weeks (14 days) after your second dose of an accepted 2-dose series
2 weeks (14 days) after you received the full series of an accepted COVID-19 vaccine (not placebo) in a clinical trial
2 weeks (14 days) after you received the full series of a Novavax (or Covovax) COVID-19 vaccine (not placebo) in a phase 3 clinical trial
2 weeks (14 days) after you received 2 doses of any “mix-and-match” combination of accepted COVID-19 vaccines administered at least 17 days apart*
If you don’t meet these requirements, you are NOT fully vaccinated.

 CDC has not recommended the use of mix-and-match COVID-19 vaccine primary series. However, such strategies are increasingly common in many countries outside of the United States. Therefore, for the of purpose of interpreting vaccination records for travel to the United States, CDC will accept combinations of accepted COVID-19 vaccines.
          </p>
        </div>
        {/* <Link to={`/summary/${this.props.match.params.user_id}`}>
     <button type="button">
         Proceed 
     </button>
 </Link> */}
 <button type="submit" onClick = {this.onSubmit} className="btn btn-outline-info btn-lg btn-block">proceed</button>
 
      </div>
    );
  }
}

export default Thankyou;