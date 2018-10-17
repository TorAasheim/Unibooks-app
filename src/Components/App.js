import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav.js';
import Books from './Books.js';







class App extends Component {




  render() {



    return (

      <div className="main-container">
        <Nav />
        <Books />
      </div>

    );
  }
}

export default App;
