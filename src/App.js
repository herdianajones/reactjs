import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    function namaFull(id) {
      return id.nama + ' ' + id.marga;
    }
    const id = {
      nama: 'Andi',
      marga: 'Hasibuan'
    };
    return (
      <h1>Halo {namaFull(id)}</h1>
    );
  }
}

export default App;
