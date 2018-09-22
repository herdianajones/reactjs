import React, { Component } from 'react';
import Header from './component/Header';
import Footer from './component/Footer';

class App extends Component {
  constructor(){
    super();
    this.state = {nama:'Andi'};
  }
  render() {
  return (
    <h1>Halo {this.state.nama}</h1>
    );
  }
}

export default App;
