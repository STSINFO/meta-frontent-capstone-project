import React from "react";
import logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="main-nav outer-container inner-container">
      <Link className="nav-link" to="/">
        <img className="logo" src={logo} alt="logo" />
      </Link>
      <ul className="nav-links">
        <li>
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/menu">
            Menu
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/reservations">
            Reservations
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/order-online">
            Order Online
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/login">
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
}
