import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import SummaryCard from './SummaryCard'

class Summary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      summarys: [

      ]
    };
  }

  componentDidMount() {
   
 
    axios
    .get('http://localhost:8000/user/final_summary/'+this.props.match.params.user_id+'/'+this.props.match.params.id+'/'+this.props.match.params.id2)
    .then(res => {
      
      this.setState({
        summarys: res.data
       })
      
    })
   
    .catch(err =>{
      console.log('Error from ShowFlightsList');
    })

   
};
   
onSubmit = e => {
  e.preventDefault();
 
  this.props.history.push('/Thankyou/'+this.props.match.params.user_id+'/'+this.props.match.params.id+"/"+this.props.match.params.id2);

};

  render() {
 

 
    const summarys = this.state.summarys;
    
    
console.log(summarys)
    let summaryList;

    if(!summarys) {
      summaryList = "there is no Reservation record!";
    } else {
      summaryList = summarys.map((summary) =>
        <SummaryCard summary={summary}  />
      );
    

    }

    return (
      <div className="ShowBookList">
       <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />
              <h2 className="display-4 text-center">Summary of Reservation </h2>
            </div>

           

          </div>

          <div className="list">
                { summaryList}
          </div>
          {/* <Link to={`/Current_Reservations/${this.props.match.params.user_id}`}>
     <button type="button">
         Proceed 
     </button>
 </Link> */}
  <button type="submit" onClick = {this.onSubmit} className="btn btn-outline-info btn-lg btn-block">proceed</button>
        </div>
        
      </div>
    );
  }
}

export default Summary;