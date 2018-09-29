import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import Header from './component/Header';
import Footer from './component/Footer';
import Article from './component/Article';

class App extends Component {

  render() {
    return (
      <div>
        <h1>Coba Routing</h1>
        <ul>
          <li><Link to="/">Beranda</Link></li>
          <li><Link to="/header">Header</Link></li>
          <li><Link to="/article">Article</Link></li>
          <li><Link to="/footer">Footer</Link></li>
        </ul>
        <div>
          <Route path="/" component={'Home'}/>
          <Route path="/article" component={Article}/>
          <Route path="/header" component={Header}/>
          <Route path="/footer" component={Footer}/>
        </div>
      </div>
    );
  }
}

export default App;
