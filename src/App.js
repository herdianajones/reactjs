import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    function login(x) {
      const udahLogIn = x;
      if (udahLogIn) {
        return 'Anda sudah Login';
      }
      return 'Anda belum Login';
    }
    
    return (
      <div>
        <h1>Selamat datang!</h1>
        <h1>{login(false)}</h1>
      </div>
    );
  }
}

export default App;
