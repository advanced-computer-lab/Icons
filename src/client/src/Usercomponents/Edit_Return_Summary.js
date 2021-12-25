import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Edit_Dep_Summ_Card from './Edit_Dep_Summ_Card'

class Edit_Return_Summary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      summarys: [

      ],
      
    };
  }

  componentDidMount() {
   
    axios
    .get('http://localhost:8000/user/edit_summary_return/'+this.props.match.params.user_id+'/'+this.props.match.params.id+"/"+this.props.match.params.id2+"/"+this.props.match.params.id3+"/"+this.props.match.params.id4)
    .then(res => {
      
      this.setState({
        summarys: res.data
       })
      
    })

   
    
      
};
   
onSubmit = e => {
  e.preventDefault();
 
if(window.confirm("Are you sure you want to confirm this reservtion")==false){

}

else {
  axios
  .get('http://localhost:8000/user/edit_return_db/'+this.props.match.params.user_id+'/'+this.props.match.params.id+"/"+this.props.match.params.id2+"/"+this.props.match.params.id3+"/"+this.props.match.params.id4)
  .then(res => {
      
  })
  axios
  .get('http://localhost:8000/user/edit_res_db2/'+this.props.match.params.user_id+'/'+this.props.match.params.id+"/"+this.props.match.params.id2+"/"+this.props.match.params.id3+"/"+this.props.match.params.id4)
  .then(res => {
       
  })


    alert("Reservation is booked Sucessfully !!")
  this.props.history.push('/Current_Reservations/'+this.props.match.params.user_id);
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
        <Edit_Dep_Summ_Card  summary={summary}  />
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

export default Edit_Return_Summary;