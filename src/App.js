import React, { Component } from 'react';
import Header from './component/Header';
import Footer from './component/Footer';

class App extends Component {
  render() {
    const siswa = ['Andi','Budi','Caca'];
    const listSiswa = siswa.map((siswa, index) => <li key={index}>{siswa}</li>);

    return (
      <div>
        <Header />
        <h1>Selamat Datang!</h1>
        <Footer />
      </div>
    );
  }
}

export default App;
