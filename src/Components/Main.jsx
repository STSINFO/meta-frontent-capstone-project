import React from "react";
import Highlights from "./Highlights";
import About from "../About";
import Testimonials from "../Testimonials";
import Hero from "./Hero";
export default function Main() {
  return (
    <main className="outer-container">
      <Hero />
      <Highlights />
      <Testimonials />
      <About />
    </main>
  );
}
