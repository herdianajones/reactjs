import React, { Component } from 'react';

class App extends Component {
  constructor(){
    super();
    this.state = {user:'Orang Asing'};
  }

  klik(){
    this.setState({user: this.refs.nama.value});
  }

  render() {
    return (
      <div>
        <h1>Halo {this.state.user}!</h1>
        <input ref="nama" type="text"/>
        <button onClick={()=>{this.klik();}}>Klik!</button>
      </div>
      );
    }
}

export default App;
