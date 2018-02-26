import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      data:"",
    }
  }
  handle(event){    
            let celsius = event.target.value -273;
      this.setState({
   // here I convert Kelvin to Celsius
     data: celsius + " degrees"
  })
  
}

render(){
  return(
    <div>
    <label> Enter degrees in Kelvin:</label>
    <input type="text" onChange={ this.handle.bind(this)} />
    <h1>In celsius it is: {this.state.data} </h1>
    </div>
    );
}
}
export default App;
