import React from 'react'
import {Link} from 'react-router'

import Home from '../Screens/Home'



export default class Navbar extends React.Component {
  render() {
    return (

      <div className="container-fluid; row; padding: 10px; margin: 0 auto">
        <nav className="navbar navbar-default">
          <div className="container">
          <ul className="list-inline; nav nav-tabs">
          <li><Link to="Home">Home</Link></li>
          <li><Link to="Favorites">Favorites</Link></li>
          <li><Link to ="Archives">Archives</Link></li>
          <li className=""><Link to="LoginPage">Login</Link></li>
          <li><Link to="RegistrationPage">Register</Link></li>
          <li><Link to="app">Log Out</Link></li>
          </ul>
          </div>
        </nav>
      </div>
    )
  }
}

const navStyle = {
  color: 'pink'
};