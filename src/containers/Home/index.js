import React, { Component } from 'react';
import Header from '../../containers/Header'
import Body from '../../containers/Body'

import './index.css';

class Home extends Component {
  render() {
    return (
      <div className="Home">
      <Header/>
      <Body/>
      </div>
    );
  }
}

export default Home;
