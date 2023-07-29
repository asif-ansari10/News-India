import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import About from './About';
import help from './help'
import News from './News';

export class NavBar extends Component {
  render() {
    return (
      <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">NewsIndia</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link className="nav-item nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-item nav-link" aria-current="page" to="/About">About</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-item nav-link" to="/help">Help</Link>
                </li>
      
              <li className="nav-item dropdown">
              <Link className="nav-item nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                News
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" to="/">Todays Top News</Link>
                <Link className="dropdown-item" to="/sports">Sports News</Link>
                <Link className="dropdown-item" to="/bussness">Bussness News</Link>
                <Link className="dropdown-item" to="/entertainment">Entertainment News</Link>
                <Link className="dropdown-item" to="/health">Health News</Link>
                <Link className="dropdown-item" to="/science">Science News</Link>
                <Link className="dropdown-item" to="/technology">Technology News</Link>
              </div>
              </li>
               
            </ul>
            </div>
        </div>
        </nav>
      </div>
      </Router>
    )
  }
}

export default NavBar
