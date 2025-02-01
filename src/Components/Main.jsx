import React from "react";
import Highlights from "./Highlights";
import About from "../About";
import Testimonials from "../Testimonials";

export default function Main() {
  return (
    <main className="outer-container">
      <Highlights />
      <Testimonials />
      <About />
    </main>
  );
}
