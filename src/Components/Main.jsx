import React from "react";
import Highlights from "./Highlights";
import About from "../About";

export default function Main() {
  return (
    <main className="outer-container">
      <Highlights />
      <About />
    </main>
  );
}
