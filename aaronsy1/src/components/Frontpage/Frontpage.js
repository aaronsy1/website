import React, { Component } from 'react';
import Home from '../Home/Home';
import Particle from '../Particle/Particle';
import SimpleNav from '../SimpleNav/SimpleNav';
import Favicons from '../Favicons/Favicons';

class Frontpage extends Component {
  render() {
    return (
      <div>
        <Home/>
        <Particle/>
        <SimpleNav/>
        <Favicons/>
      </div>
    );
  }
}

export default Frontpage;
