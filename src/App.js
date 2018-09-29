import React, { Component } from 'react';

class App extends Component {
  constructor(){
    super();
    this.state = {user:'Orang Asing'};
  }

componentWillMount(){
  this.setState({user:'Yayan'});
  console.log('Ini Will Mount '+this.state.user);
}

componentDidMount(){
  console.log('Ini Did Mount '+this.state.user);
}

render() {
    return (
      <div>
        <h1>Halo {this.state.user}!</h1>
        <input ref="nama" type="text" onInput={()=>{this.klik();}}/>
      </div>
      );
    }
}

export default App;
