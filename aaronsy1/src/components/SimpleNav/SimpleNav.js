import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import "./SimpleNav.css"

export default class SimpleNav extends Component {
  render() {
    return (
      <div>
                <div className="simpleNav text-center">
          <ul>
            <NavLink to={process.env.PUBLIC_URL + '/'}><li>Home</li></NavLink>
            <li> | </li>
            <NavLink to = {process.env.PUBLIC_URL + '/contact'}><li>Contact</li></NavLink>
            <li> | </li>
            <NavLink to ={process.env.PUBLIC_URL + '/portfolio'}><li>Portfolio</li></NavLink>
            <li> | </li>
            <a href = "https://docs.google.com/document/d/10Gs5YzztTW4sTTJTgeGcQ4xlWpLZPSGuRVqtEA1Se38/edit?usp=sharing" target="_blank">
            <li > Resume
            </li>
            </a>
            
          </ul>
        </div>
      </div>
    )
  }
}
