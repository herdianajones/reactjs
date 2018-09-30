import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      judul: '',
    };
  }

  componentDidMount(){
    axios.get('https://facebook.github.io/react-native/movies.json')
    .then((ambilData) => {
      console.log(ambilData);
      this.setState({
        judul0: ambilData.data.movies[0].title,
        judul1: ambilData.data.movies[1].title,
        judul2: ambilData.data.movies[2].title,
        judul3: ambilData.data.movies[3].title,
        judul4: ambilData.data.movies[4].title
      })
    })
  };

render() {
    return (
      <div>
        <center>
          <h1>Coba Get Data</h1>
          <p>{this.state.judul0}</p>
          <p>{this.state.judul1}</p>
          <p>{this.state.judul2}</p>
          <p>{this.state.judul3}</p>
          <p>{this.state.judul4}</p>
        </center>
      </div>
      );
    }
}

export default App;