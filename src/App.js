import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const siswa = ['Andi','Budi','Caca'];
    const listSiswa = siswa.map((siswa, index) => <li key={index}>{siswa}</li>);

    return (
      <div>
        <h1>Daftar Siswa:</h1>
        <h1>{listSiswa}</h1>
      </div>
    );
  }
}

export default App;
