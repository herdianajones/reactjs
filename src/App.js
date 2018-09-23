import React, { Component } from 'react';

class App extends Component {
  constructor(){
    super();
    this.state = {user:'Andi'};
  }
  klik(siapa){
    this.setState({user:siapa});
  }
  render() {
    return (
      <div>
        <h1>Halo {this.state.user}</h1>
        <button onClick={() => {this.klik('Budi')} }>
        Coba Klik!
        </button>
      </div>
      );
    }
}

export default App;
