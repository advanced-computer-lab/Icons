import React, { Component } from 'react'
import{BrowserRouter, Route,Switch}from "react-router-dom"

import CreateFlight from './Admincomponents/CreateFlight';

export default function App() {
  return (
    <div>
    
    
    <BrowserRouter>
    <Switch>
    <Route exact path="/" component={CreateFlight}/>
     
    </Switch>
    </BrowserRouter>
    </div>
  )
}

