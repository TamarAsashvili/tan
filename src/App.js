import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './Router';
import Footer from './components/UI/Footer';

import { BrowserRouter as Router } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Router>
          <Routes />
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
