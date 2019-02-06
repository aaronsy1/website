import React, { Component } from 'react';
import("./Home.css")


export default class Header extends Component {
  render() {
    return (
      <div className="homeContainer">

        <div className="titleDiv">
          <div className="text-center name">
            <p >Aaron Sy </p>
          </div>
          <div className="text-center title">
            <p> Web Developer </p>
          </div>
        </div>



      </div>
    )
  }
}
