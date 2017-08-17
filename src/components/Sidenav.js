import React from 'react';
import { Link } from 'react-router-dom';


const Sidenav = () => {
  return (
    <div className="sidenav">
      <div className="sidenav-brand">
        Hello, Router!
      </div>
      <ul className="sidenav-list">
        <li>
          <Link
            className="sidenav-list__item"
            to="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className="sidenav-list__item"
            to="/about"
          >
            About
          </Link>
        </li>
        <div className="sidenav-list__header">
          pages
        </div>
        <li>
          <Link
            className="sidenav-list__sub-item"
            to="/pages/1"
          >
            page 1
          </Link>
        </li>
        <li>
          <Link
            className="sidenav-list__sub-item"
            to="/pages/2"
          >
            page 2
          </Link>
        </li>
        <li>
          <Link
            className="sidenav-list__sub-item"
            to="/pages/3"
          >
            page 3
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidenav;
