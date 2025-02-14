import React from "react";
import logo from "../assets/logo.jpg";

export default function Nav() {
  return (
    <nav className="main-nav outer-container inner-container">
      <a href="#">
        <img className="logo" src={logo} alt="logo" />
      </a>
      <ul className="nav-links">
        <li>
          <a className="nav-link" href="#">
            Home
          </a>
        </li>
        <li>
          <a className="nav-link" href="#">
            About
          </a>
        </li>
        <li>
          <a className="nav-link" href="#">
            Menu
          </a>
        </li>
        <li>
          <a className="nav-link" href="#">
            Reservations
          </a>
        </li>
        <li>
          <a className="nav-link" href="#">
            Order Online
          </a>
        </li>
        <li>
          <a className="nav-link" href="#">
            Login
          </a>
        </li>
      </ul>
    </nav>
  );
}
