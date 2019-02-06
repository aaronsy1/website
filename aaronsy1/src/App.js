import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
// import Frontpage from './components/Frontpage/Frontpage';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Frontpage from './components/Frontpage/Frontpage';
import Error from './components/Error/Error';




class App extends Component {
  render() {
    // basename={process.env.PUBLIC_URL}
    console.log('process.env' + process.env.PUBLIC_URL)
    return (
      <BrowserRouter>
      <Switch>
        <Route path = {process.env.PUBLIC_URL + '/'} component = {Frontpage} exact/>
        <Route path = {process.env.PUBLIC_URL + '/portfolio'} component = {Portfolio} />
        <Route path =  {process.env.PUBLIC_URL + '/contact'} component = {Contact} />
        <Route component = {Error} />
        </Switch>
      </BrowserRouter>
      
      
    );
  }
}

export default App;
