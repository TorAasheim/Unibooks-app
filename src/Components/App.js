import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav.js';
import Books from './Books.js';
import RegisterBook from './RegisterBook';
import Book from './Book';
import LoginUser from './LoginUser';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';






class App extends Component {




  render() {

    return (


      <Router>
        <div className="main-container">
          <Nav />

          <Switch>
            <Route exact path='/' component={Books} />
            <Route exact path="/RegisterBook" component={RegisterBook} />
            <Route path="/Book" component={Book} />
            <Route path='/LoginUser' component={LoginUser} />
          </Switch>
        </div>
      </Router>

    );
  }
}

export default App;
