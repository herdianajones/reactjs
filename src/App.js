import React, { Component } from 'react';
import Footer from './component/Footer';

class App extends Component {
  render() {
    var andi = {nama:"Andi",usia:24};
    return (
      <div>
        <h1>Selamat datang!</h1>
        <Footer id={andi.nama} umur={andi.usia}/>
      </div>
      );
    }
}

export default App;
