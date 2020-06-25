import React, { Component } from 'react';
import Carousel from "./Carousel"
import './App.css';
import Page from "./page"
import Header from "./Header"
import Routes from "./Router"

class App extends Component{
  render(){
    return (
    <div className="App">
      <Page>
        <Header />
        <Routes />
      </Page>
      
    </div>
  );}
  
}

export default App;
