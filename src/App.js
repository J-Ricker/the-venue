import React, { Component } from 'react';
import './resources/styles.css';

import Header from './components/header_footer/header';
import Featured from './components/featured';
import VenueInfo from './components/venue-info';
import Highlights from './components/highlights';

class App extends Component {
  render() {
    return (
      <div className="App" style={{height: '1000px', background:'cornFlowerBlue'}}>
        <Header />
        <Featured />
        <VenueInfo />
        <Highlights />
      </div>
    );
  }
}

export default App;
