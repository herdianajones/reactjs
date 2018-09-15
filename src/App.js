import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  hitung(x){
    return x*x;
  };
  render() {
    return (
      <h1>Hasil = {this.hitung(5)}</h1>
      );
    }
  }

export default App;
