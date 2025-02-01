import React from "react";
import logo from "../assets/footerLogo.png";

export default function Footer() {
  return (
    <footer className="outer-container">
      <div className="inner-container grid grid--4--cols footer">
        <div className="footer-log">
          <a href="#">
            <img className="footer-logo" src={logo} alt="logo" />
          </a>
          {/* <p className="text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consectetur, natus. Explicabo nesciunt voluptates similique esse
            ipsa ut veniam eius ullam veritatis velit repellat dolores quaerat,
            dicta minima quae ratione dolor!
          </p> */}
        </div>
        <ul className="footer-nav">
          <div className="footer-header">Doormat Navigation</div>
          <li>
            <a className="nav-link" href="#">
              Home
            </a>
          </li>
          <li>
            <a className="nav-link" href="#">
              Menu
            </a>
          </li>
          <li>
            <a className="nav-link" href="#">
              Reservation
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
        <ul className="footer-nav">
          <div className="footer-header">Contact</div>
          <li>
            <a className="nav-link" href="#">
              Address
            </a>
          </li>
          <li>
            <a className="nav-link" href="#">
              Phone
            </a>
          </li>
          <li>
            <a className="nav-link" href="#">
              Email
            </a>
          </li>
        </ul>
        <ul className="footer-nav">
          <div className="footer-header">Social Media Links</div>
          <li>
            <a className="nav-link" href="#">
              Address
            </a>
          </li>
          <li>
            <a className="nav-link" href="#">
              Phone
            </a>
          </li>
          <li>
            <a className="nav-link" href="#">
              Email
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
