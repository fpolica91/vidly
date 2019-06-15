import React from "react";
import { Route, Switch, NavLink, Link } from "react-router-dom";

const NavBar = props => {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link to="/" className="nav-link">
          Vidly
        </Link>
      </li>
      <li className="nav-item">
        <NavLink to="/" className="nav-link">
          Movies
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/customers" className="nav-link">
          Customers
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/rentals" className="nav-link">
          Rentals
        </NavLink>

      </li>
      <li className="nav-item">
        <NavLink to="/login" className="nav-link">
          Login
        </NavLink>

      </li>
    </ul>
  );
};

export default NavBar;
