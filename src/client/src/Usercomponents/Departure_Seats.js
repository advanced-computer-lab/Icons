import React, {Component} from 'react'
import axios from 'axios';
import SeatPicker from 'react-seat-picker'
import { Link } from 'react-router-dom';

export default class Departure_Seats extends Component {
     
  state = {
    loading: false ,
    persons:0,
    flag : '',
    rows : []
  

  }
 

   addSeatCallback = ({ row, number, id }, addCb) => {
    this.setState({
      loading: true,
     
    }, async () => {
      await new Promise(resolve => setTimeout(resolve, 250))
      console.log(`Added seat ${number}, row ${row}, id ${id}`)
      //const newTooltip = `tooltip for id-${id} added by callback`
      addCb(row, number, id)
      this.setState({ loading: false })
      const data = {
       
        seat_id: id,
        seat_row:row,
        seat_number:number
    };
   await  axios
    .post('http://localhost:8000/user/test2', data)
    .then(res => {
      
      
    })
    .catch(err => {
      
    })
    })
  
    // const data = {
       
    //     seat_id: id,
    //     seat_row:row,
    //     seat_number:number
    // };
    //  axios
    // .post('http://localhost:8000/user/test2', data)
    // .then(res => {
      
      
    // })
    // .catch(err => {
      
    // })
  }
  
 async  componentWillMount() {
 
    
 
    axios
    .get('http://localhost:8000/user/seats')
    .then(res => {
       
      
        const persons = Number(res.data);
        this.setState({ persons });
    })
    .catch(err => {
      console.log("Error from ShowFlightDetails");
    })
     axios
    .get('http://localhost:8000/user/seats3')
    .then(res => {
       
        const rows = res.data
       this.setState({rows });
        console.log(rows)
        
    })
    .catch(err => {
    
    })
   
 

 };

 
  removeSeatCallback = ({ row, number, id }, removeCb) => {
    this.setState({
      loading: true
    }, async () => {
      await new Promise(resolve => setTimeout(resolve, 250))
      console.log(`Removed seat ${number}, row ${row}, id ${id}`)
      // A value of null will reset the tooltip to the original while '' will hide the tooltip
    //  const newTooltip = ['A', 'B', 'C'].includes(row) ? null : ''
      removeCb(row, number)
      this.setState({ loading: false })
    })
    const data = {
       
        seat_id: id,
    };
     axios
    .post('http://localhost:8000/user/test3', data)
    .then(res => {
      
      
    })
    .catch(err => {
      
    })
  }


  onSubmit = e => {
    e.preventDefault();
   
 
   
    this.props.history.push('/Return_seats/'+this.props.match.params.user_id);
   
   
  };
 
  render() {
  
 
const {loading} = this.state
 




    return (
      <div>
       <h1>Book Seats For Departure Flight</h1>
        <div style={{marginTop: '100px'}}>
      
        {this.state.rows.length > 0 && < SeatPicker 
            addSeatCallback={this.addSeatCallback}
            removeSeatCallback={this.removeSeatCallback}
            
            maxReservableSeats = {this.state.persons}
            minReservableSeats = {this.state.persons}
            alpha
            visible
            selectedByDefault
            loading={loading}
            rows={this.state.rows}
           
          />}
         <br />


         {/* <Link to={`/Return_seats/${this.props.match.params.user_id}`}>
     <button type="button">
         Proceed 
     </button>
 </Link> */}
   <button type="submit" onClick = {this.onSubmit} className="btn btn-outline-info btn-lg btn-block">proceed</button>

        </div>
       
      
      </div> 
    )
        
      
  }

}