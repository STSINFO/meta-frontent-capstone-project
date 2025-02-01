import React from "react";
import face1 from "./assets/face-1.jpg";
import face2 from "./assets/face-2.jpg";
import face3 from "./assets/face-3.jpg";
import face4 from "./assets/face-4.jpg";
import TestimonialCard from "./Components/TestimonialCard";

export default function Testimonials() {
  return (
    <section className="testimonial-container">
      <div className="inner-container text-center">
        <p className="testimonials-header">Testimonials</p>
      </div>
      <div className="testimonials inner-container grid grid--4--cols">
        <TestimonialCard
          name={"John Smith"}
          job={"Sotfware Engineer"}
          url={face1}
        />
        <TestimonialCard
          name={"Sara Thompton"}
          job={"Human Resources"}
          url={face2}
        />
        <TestimonialCard
          name={"Eric McMiller"}
          job={"DevOps Engineer"}
          url={face3}
        />
        <TestimonialCard name={"Elsa Mike"} job={"Manager"} url={face4} />
      </div>
    </section>
  );
}
