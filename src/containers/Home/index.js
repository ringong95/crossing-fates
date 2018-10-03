import React, { Component } from 'react';
import logo from '../../logo.svg';
import Header from '../../containers/Header'

import './index.css';

class Home extends Component {
  render() {
    return (
      <div className="Home">
      <Header/>
        <header className="Home-header">
          <img src={logo} className="Home-logo" alt="logo" />
          <p>
            Edit <code>src/Home.js</code> and save to reload.
          </p>
          <a
            className="Home-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default Home;
