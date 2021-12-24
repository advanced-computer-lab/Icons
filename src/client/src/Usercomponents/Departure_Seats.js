import React, {Component} from 'react'
import axios from 'axios';
import SeatPicker from 'react-seat-picker'
import { Link } from 'react-router-dom';
const array = [] ;  
const array2 = [];
export default class Departure_Seats extends Component {
   
  state = {
    loading: false ,
    persons:0,
    flag : '',
    rows : [],
    counter : 0
    

  }


   addSeatCallback = ({ row, number, id }, addCb) => {
    array.push(id);
    array2.push(row+""+number)
    this.setState({
      loading: true,
     
    }, async () => {
      await new Promise(resolve => setTimeout(resolve, 250))
     
      //const newTooltip = `tooltip for id-${id} added by callback`
      this.setState({counter:this.state.counter+1})
      console.log(this.state.counter)
      addCb(row, number, id)
      this.setState({ loading: false })
      console.log(number + " " + row + " " + id )
    
    })
  
 
  }
  
  componentDidMount() {
 
    
 
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
    .get('http://localhost:8000/user/departure_seats/'+this.props.match.params.user_id+'/'+this.props.match.params.id+'/'+this.props.match.params.id2)
    .then(res => {
       
        const rows = res.data
       this.setState({rows });
        console.log(rows)
        
    })
    .catch(err => {
    
    })
   
 

 };

 
  removeSeatCallback = ({ row, number, id }, removeCb) => {
    this.setState({counter:this.state.counter - 1})
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
    var cc = array.indexOf(id)
   console.log(cc)
   array.splice(cc, 1);
   var cc2 = array2.indexOf(row+""+number)
   array2.splice(cc2, 1);
  }


  onSubmit = e => {
    e.preventDefault();
   
 if(this.state.counter < this.state.persons){
  alert(' Chosen seats less than number of specified passengers ! ')
 }
   else {
    axios
    .post('http://localhost:8000/user/save_seats_id', array)
    .then(res => {
      
      
    })
    .catch(err => {
      
    })
    axios
    .post('http://localhost:8000/user/save_seats', array2)
    .then(res => {
      
      
    })
    .catch(err => {
      
    })
    this.props.history.push('/Return_seats/'+this.props.match.params.user_id+"/"+this.props.match.params.id+"/"+this.props.match.params.id2);
   }
   
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


     
   <button type="submit" onClick = {this.onSubmit} className="btn btn-outline-info btn-lg btn-block">proceed</button>

        </div>
       
      
      </div> 
    )
        
      
  }

}