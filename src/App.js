import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    var styles = {
      color:'yellow',
      background:'black',
    };
    return (
      <div style={styles}>
        <center>
          <h1>Selamat Datang</h1>
        </center>
      </div>
    );
  }
}

export default App;
