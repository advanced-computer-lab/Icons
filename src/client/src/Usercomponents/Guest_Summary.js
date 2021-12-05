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
      persons:''
    };
  }

  componentDidMount() {
   
  

    axios
    .get('http://localhost:8000/user/getretrunflightnumber/'+this.props.match.params.id)
    .then(res => {
     
    })
    .catch(err =>{
      console.log('Error from ShowFlightsList');
    })

 
    axios
    .get('http://localhost:8000/user/guest_summary/'+this.props.match.params.id)
    .then(res => {
      
      this.setState({
        summarys: res.data
       })
    })
    .catch(err =>{
      console.log('Error from ShowFlightsList');
    })
    
      // if(this.state.summarys.length == 0){
        
      //   this.setState({})
      // }
    
      axios
      .get('http://localhost:8000/user/send_id')
      .then(res => {
         
        
          const persons = (res.data);
          this.setState({ persons });
       //   console.log(res.data);
      })
      .catch(err => {
        console.log("Error from ShowFlightDetails");
      })
};
   
onSubmit = e => {
  e.preventDefault();
 
console.log(this.state.persons)
 if(this.state.persons == "undefined"){
  this.props.history.push('/login');
 }
 else {
  this.props.history.push('/Departure_seats/'+this.state.persons);
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