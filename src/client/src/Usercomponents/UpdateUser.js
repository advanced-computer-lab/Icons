import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


class UpdateUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
        
        FirstName: '',
         LastName: '',
        Email:'' ,
        Password: '',
        PassportNumber:''
    };
  }


  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get('http://localhost:8000/user/user_info/'+this.props.match.params.id)
      .then(res => {
        // this.setState({...this.state, book: res.data})
        this.setState({
            FirstName:  res.data.FirstName,
            LastName: res.data.LastName,
            Email:res.data.Email,
            Password: res.data.Password,
            PassportNumber:res.data.PassportNumber
       
        })
        
      })
      .catch(err => {
        
      })
  };



  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
        FirstName: this.state.FirstName,
        LastName: this.state.LastName,
        Email:this.state.Email ,
        Password: this.state.Password,
        PassportNumber:this.state.PassportNumber ,
    };

    axios
      .post('http://localhost:8000/user/update/'+this.props.match.params.id, data)
      .then(res => {
        this.props.history.push('/');
      })
      
      .catch(err => {
        console.log("Error in User!");
      })
  };


  render() {
    return (
        <div className="UpdateFlight">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
             
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Edit User</h1>
              <p className="lead text-center">
                  Update User's Info
              </p>
            </div>
          </div>

          <div className="col-md-8 m-auto">
          <form noValidate onSubmit={this.onSubmit}>
            <div className='form-group'>
              <label htmlFor="First_name">First name</label>
              <input
                type='text'
                placeholder={this.state.FirstName}
                name='First_name'
                className='form-control'
                value={this.state.FirstName}
                onChange={this.onChange}
              />
            </div>
            <br />

            <div className='form-group'>
            <label htmlFor="Departure_time">Last name</label>
              <input
                type='text'
                placeholder={this.state.LastName}
                name='Last_name'
                className='form-control'
                value={this.state.LastName}
                onChange={this.onChange}
              />
            </div>
            <br />
            <div className='form-group'>
            <label htmlFor="Departure_time">PassportNumber</label>
              <input
                type='text'
                placeholder={this.state.PassportNumber}
                name='Last_name'
                className='form-control'
                value={this.state.PassportNumber}
                onChange={this.onChange}
              />
            </div>
            <br />

            <div className='form-group'>
            <label htmlFor="Email">Email</label>
              <input
                type='email'
                placeholder={this.state.Email}
                name='Email'
                className='form-control'
                value={this.state.Email}
                onChange={this.onChange}
              />
            </div>
            <br />

            <div className='form-group'>
            <label htmlFor="Password">Password</label>
              <input
                type='password'
                placeholder={this.state.Password}
                name='Password'
                className='form-control'
                value={this.state.Password}
                onChange={this.onChange}
              />
            </div>
            <br />

            <button type="submit" className="btn btn-outline-info btn-lg btn-block">Update User</button>
            </form>
          </div>

        </div>
      </div>
    );
  }
}

export default UpdateUser;