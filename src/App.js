import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dataKu: [],
    };
  }

  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((ambilData) => {
      console.log(ambilData);
      this.setState({
        dataKu: ambilData.data,
      })
    })
  };

render() {
    const data = this.state.dataKu.map((item, index)=>{
      var id_title = [item.id,item.title].join(" - ");
      return <li key={index}>{id_title}</li>;
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