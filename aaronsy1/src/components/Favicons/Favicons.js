import React, { Component } from 'react'
import "./Favicons.css"

export default class Favicons extends Component {
  render() {
    return (
      <div className = "icons">
        <ul>
            <a href = "https://github.com/aaronsy1" target="_blank">
            <li className = "fa fa-github" >
         
            </li>
            </a>

            <a href = "https://www.linkedin.com/in/aaronssy/" target="_blank">
            <li className = "fa fa-linkedin">
            </li>
            </a>
        </ul>
      </div>
    )
  }
}
