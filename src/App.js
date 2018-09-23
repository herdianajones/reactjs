import React, { Component } from 'react';

class App extends Component {
  klik(){
    alert('Tombol sudah diklik!');
  }
  render() {
    return (
      <div>
        <h1>Selamat datang!</h1>
        <button onClick={this.klik}>
        Coba Klik!
        </button>
      </div>
      );
    }
}

export default App;
