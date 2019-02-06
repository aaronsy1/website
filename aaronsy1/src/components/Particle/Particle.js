import React, { Component } from 'react'
import Particles from 'react-particles-js';
import ("./Particle.css");

const particleOpt = {
    particles: {
     number:{
       value: 30,
       density:{
         enable: true,
         value_area: 800,
      }
     }
    }
  }

export default class HomeCompliment extends Component {
  render() {
    return (
      
        <Particles
        className = "background"
          params={particleOpt}
        />
      
    )
  }
}
