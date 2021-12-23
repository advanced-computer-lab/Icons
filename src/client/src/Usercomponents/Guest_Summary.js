import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Guest_SummaryCard from './Guest_SummaryCard'

class Guest_Summary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      summarys: [

      ],
      
    };
  }

  componentDidMount() {
   
    axios
    .get('http://localhost:8000/user/guest_summary/'+this.props.match.params.user_id+'/'+this.props.match.params.id+"/"+this.props.match.params.id2)
    .then(res => {
      
      this.setState({
        summarys: res.data
       })
      
    })

   
    
      
};
   
onSubmit = e => {
  e.preventDefault();
 

if(this.props.match.params.id == "undefined"){
alert('you need to login')

this.props.history.push('/test2')
}
else {
  this.props.history.push('/Departure_seats/'+this.props.match.params.user_id+'/'+this.props.match.params.id+"/"+this.props.match.params.id2);
}
};

  render() {


    const summarys = this.state.summarys;
    
console.log(summarys)
    let summaryList;

    if(!summarys) {
      summaryList = "there is no Reservation record!";
    } else {
      summaryList = summarys.map((summary) =>
        <Guest_SummaryCard summary={summary}  />
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
         
     <button type="submit" onClick = {this.onSubmit} className="btn btn-outline-info btn-lg btn-block">proceed</button>
        </div>
        
      </div>
    );
  }
}

export default Guest_Summary;