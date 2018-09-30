import React, { Component } from 'react';
import axios from 'axios';
class App extends Component {
  componentDidMount(){
    axios(
    {
        url: 'https://facebook.github.io/react-native/movies.json',
        method: 'GET',
    }).then((ambilData) => {
        console.log(ambilData.data.title);
        console.log(ambilData.data.description);
        console.log(ambilData.data.movies);
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
