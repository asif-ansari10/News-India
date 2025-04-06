import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm sticky-top">
        <div className="container-fluid">
          <Link className="navbar-brand fw-bold fs-4" to="/">📰 NewsIndia</Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/help">Help</Link>
              </li>

              {/* drop downlist */}

              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  News Categories
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link className="dropdown-item" to="/sports">🏏 Sports</Link></li>
                  <li><Link className="dropdown-item" to="/">🔥 Top News</Link></li>
                  <li><Link className="dropdown-item" to="/business">💼 Business</Link></li>
                  <li><Link className="dropdown-item" to="/entertainment">🎬 Entertainment</Link></li>
                  <li><Link className="dropdown-item" to="/health">🩺 Health</Link></li>
                  <li><Link className="dropdown-item" to="/science">🔬 Science</Link></li>
                  <li><Link className="dropdown-item" to="/technology">💻 Technology</Link></li>
                </ul>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
