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
    .get('http://localhost:8000/user/helper6')
    .then(res => {
      
      this.setState({
        summarys: res.data
       })
      
    })
   
    .catch(err =>{
      console.log('Error from ShowFlightsList');
    })
console.log(this.state.summarys)
      
   if(this.state.summarys.length == 0){
     this.setState({})
   }
   
};
   


  render() {
  console.log(this.props.match.params.user_id)

 
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
          <Link to={`/Current_Reservations/${this.props.match.params.user_id}`}>
     <button type="button">
         Proceed 
     </button>
 </Link>
        </div>
        
      </div>
    );
  }
}

export default Summary;