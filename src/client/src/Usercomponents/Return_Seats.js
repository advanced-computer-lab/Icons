import React, {Component} from 'react'
import axios from 'axios';
import SeatPicker from 'react-seat-picker'
import { Link } from 'react-router-dom';
const array = [] ;  
const array2 = [];
export default class Return_Seats extends Component {

  state = {
    loading: false ,
    persons:0,
    flag : '',
    rows : [],
    counter :0,
    seats:[]
  

  }
 
  
      

  
     
  addSeatCallback = ({ row, number, id }, addCb) => {
    
    this.setState({counter:this.state.counter+1})
    this.setState({
      loading: true,
     
    }, async () => {
      await new Promise(resolve => setTimeout(resolve, 250))
      console.log(`Added seat ${number}, row ${row}, id ${id}`)
      //const newTooltip = `tooltip for id-${id} added by callback`
      addCb(row, number, id)
      this.setState({ loading: false })
      
    })
   array.push(id);
   array2.push(row+""+number)
console.log(array2)
    console.log(array)
  
    
  }
  
  componentDidMount() {
   


    axios
  .get('http://localhost:8000/user/return_seats/'+this.props.match.params.user_id+'/'+this.props.match.params.id+'/'+this.props.match.params.id2)
  .then(res => {
     
      const rows = res.data
     this.setState({rows });
      console.log(rows)
      
  })
  .catch(err => {
  
  })


    axios
    .get('http://localhost:8000/user/seats')
    .then(res => {
       
      
        const persons = Number(res.data);
        this.setState({ persons });
    })
    .catch(err => {
      console.log("Error from ShowFlightDetails");
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
    array.pop(id)
   array2.pop(row+""+number)

  }


  onSubmit = e => {
    e.preventDefault();
   
 if(this.state.counter <5){
 alert(' Chosen seats less than number of specified passengers ! ')
 }
   else {
    axios
    .post('http://localhost:8000/user/return_save_seats_id', array)
    .then(res => {
      
      
    })
    .catch(err => {
      
    })
    axios
    .post('http://localhost:8000/user/return_save_seats', array2)
    .then(res => {
      
      
    })
    .catch(err => {
      
    })
    this.props.history.push('/summary/'+this.props.match.params.user_id+"/"+this.props.match.params.id+"/"+this.props.match.params.id2)
   }
   
  };

 
  render() {
  
   
const {loading} = this.state
 




    return (
      <div>
       <h1>Book Seats For Return Flight</h1>
        <div style={{marginTop: '100px'}}>
        {this.state.rows.length > 0 && < SeatPicker
            addSeatCallback={this.addSeatCallback}
            removeSeatCallback={this.removeSeatCallback}
            
            maxReservableSeats = {5}
            minReservableSeats = {5}
            alpha
            visible
            selectedByDefault
            loading={loading}
            rows={this.state.rows}
           // tooltipProps={{multiline: true}}
          />}
         <br />
     
 <button type="submit" onClick = {this.onSubmit} className="btn btn-outline-info btn-lg btn-block">proceed</button>

        </div>
       
       
      </div> 
    )
        
      
  }

}