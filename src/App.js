import React, { Component } from 'react';
import Footer from './component/Footer';

class App extends Component {
  render() {
    var teks = "Hak cipta dilindungi";
    return (
      <div>
        <h1>Selamat datang!</h1>
        <Footer konten={teks} />
      </div>
      );
    }
}

export default App;
