import React, { Component } from 'react';

class App extends Component {
  klik(siapa){
    alert('Halo kakak '+siapa);
  }
  render() {
    return (
      <div>
        <h1>Selamat datang!</h1>
        <button onClick={() => {this.klik('Andi')} }>
        Coba Klik!
        </button>
      </div>
      );
    }
}

export default App;
