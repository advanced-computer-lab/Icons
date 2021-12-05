import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import UserCard from './UserCard'

class ViewUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:8000/user/show')
      .then(res => {
        this.setState({
          users: res.data
        })
      })
      .catch(err =>{
        console.log('Error from ShowFlightsList');
      })
   
      axios
    .get('http://localhost:8000/user/getretrunflightnumber/'+this.props.match.params.id)
    .then(res => {
     
    })
    .catch(err =>{
      console.log('Error from ShowFlightsList');
    })


  

  };


  render() {
    const users= this.state.users;
    console.log("PrintFlight: " + users);
    let userList;

    if(!users) {
      userList = "there is no flight record!";
    } else {
      userList = users.map((user) =>
        <UserCard user={user}  />
      );
    }

    return (
     


          <div className="list">
                {userList}
          </div>
    
    );
  }
}

export default ViewUsers;