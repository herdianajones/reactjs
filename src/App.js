import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      judul: [],
    };
  }

  componentDidMount(){
    axios.get('https://facebook.github.io/react-native/movies.json')
    .then((ambilData) => {
      console.log(ambilData);
      this.setState({
        judul: ambilData.data.movies,
      })
    })
  };

render() {
    const data = this.state.judul.map((item, index)=>{
      var fullfilm = [item.title,item.releaseYear].join(" ");
      return <li key={index}>{fullfilm}</li>;
    })
    return (
      <div>
        <center>
          <h1>Coba Get Data</h1>
        </center>
        <ul>
          { data }
        </ul>
      </div>
      );
    }
}

export default App;