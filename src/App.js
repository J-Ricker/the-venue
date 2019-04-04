import React, { Component } from 'react';
import './resources/styles.css';
import {Element} from 'react-scroll';

import Header from './components/header_footer/header';
import Featured from './components/featured';
import VenueInfo from './components/venue-info';
import Highlights from './components/highlights';
import Pricing from './components/pricing';
import Location from './components/location';
import Footer from './components/header_footer/footer';



class App extends Component {
  render() {
    return (
      <div className="App" style={{height: '1000px', background:'cornFlowerBlue'}}>
        <Header />
        <Element name="featured">
          <Featured />
        </Element>
        <Element name="info">
          <VenueInfo />
        </Element>
        <Element name="highlights">
          <Highlights />
        </Element>
        <Element name="prices">
          <Pricing />
        </Element>
        <Element name="location">
          <Location />
        </Element>
        <Footer />
      </div>
    );
  }
}

export default App;
