import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [showDrop, setDrop] = useState(false);

  const handleDrop = () => {
    if (showDrop) setDrop(false);
    else setDrop(true);
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link to="/" style={{ textDecoration: 'none' }} className="navbar-brand">
        Navbar
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link
              to="/"
              style={{ textDecoration: 'none' }}
              className="nav-link"
            >
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">
              Link
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              onClick={handleDrop}
              style={{ cursor: 'pointer' }}
            >
              Dropdown
            </a>
            <div
              className="dropdown-menu"
              style={{ display: showDrop ? 'block' : 'none' }}
              aria-labelledby="navbarDropdown"
            >
              <Link
                to="/details"
                style={{ textDecoration: 'none' }}
                className="dropdown-item"
                onClick={handleDrop}
              >
                Action
              </Link>

              <a className="dropdown-item" href="#">
                Another action
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </li>
          <li className="nav-item">
            <a
              className="nav-link disabled"
              href="#"
              tabIndex="-1"
              aria-disabled="true"
            >
              Disabled
            </a>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}
