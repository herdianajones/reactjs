import React, { Component } from 'react';
import Header from './component/Header';
import Footer from './component/Footer';

class App extends Component {
  constructor(){
    super();
    this.state = {nama:'Andi', usia:21};
  }
  render() {
    return (
      <div>
        <h1>Halo {this.state.nama}</h1>
        <h1>Usia {this.state.usia} th</h1>
      </div>
    );
  }
}

export default App;
