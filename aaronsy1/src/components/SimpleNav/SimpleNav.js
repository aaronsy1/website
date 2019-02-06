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
            <a href = "https://drive.google.com/file/d/1O2PlpEjEir0VYjDynNGClIcgZ_KyWxkN/view?fbclid=IwAR0MAA7WJp0zWEtgaf_iqdg2VIP6_nKWy8l-CGBFNU26-uaf9pTzpJAC9wI" target="_blank">
            <li > Resume
            </li>
            </a>
            
          </ul>
        </div>
      </div>
    )
  }
}
