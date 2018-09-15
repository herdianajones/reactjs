import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.nama = 'Andi';
  }
  render() {
    return (
      <h1>Halo {this.nama}</h1>
    );
  }
}

export default App;
