import React from "react";
import Highlights from "./Highlights";
import About from "../About";
import Testimonials from "../Testimonials";
import BookingPage from "../BookingPage";

export default function Main() {
  return (
    <main className="outer-container">
      {/* <Highlights />
      <Testimonials />
      <About /> */}
      <BookingPage />
    </main>
  );
}
