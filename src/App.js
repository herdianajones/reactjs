import React, { Component } from 'react';
import axios from 'axios';
class App extends Component {
  componentDidMount(){
    axios.get('https://facebook.github.io/react-native/movies.json')
      .then((ambilData) => {
        console.log(ambilData);
      })
  };
  
  render() {
    return (
      <div>
        <h1>Coba Get Data</h1>
      </div>
    );
  }
}

export default App;
