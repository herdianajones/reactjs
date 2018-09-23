import React, { Component } from 'react';

class App extends Component {
  state = { count: 0 }
  tambah = () => {
    this.setState({
      count: this.state.count + 1
    });
  }

  kurang = () => {
    this.setState({
      count: this.state.count - 1
    });
  }

  render() {
    return (
      <div>
      <center>
        <h1>{this.state.count}</h1>
        <div>
          <button onClick = {this.kurang}>Kurang</button>
          <span> </span>
          <button onClick = {this.tambah}>Tambah</button>
        </div>
      </center>
      </div>
      );
    }
}

export default App;
