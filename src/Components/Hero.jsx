import React from "react";
import hero from "../assets/hero-image.jpg";

export default function Hero() {
  return (
    <section>
      <div className="hero grid grid--2--cols">
        <div className="hero-content">
          <h1 className="primary-header">Little Lemon</h1>
          <h2 className="secondary-header">Chicago</h2>
          <p className="text">
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <a href="#" className="btn">
            Reserve a Table
          </a>
        </div>

        <img className="hero-image" src={hero} alt="Hero image" />
      </div>
    </section>
  );
}
