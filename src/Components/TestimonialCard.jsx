import React from "react";

export default function TestimonialCard({ name, job, url }) {
  return (
    <div className="testimonial">
      <div className="testimonial-header">
        <img className="testimonial-image" src={url} alt="" />
        <div className="info">
          <p className="name">{name}</p>
          <p className="job">{job}</p>
        </div>
      </div>
      <div className="testimonial-body">
        <p className="testimonial-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo possimus
          at, maxime asperiores fuga ipsam culpa quis nobis ea nemo saepe vitae
          obcaecati
        </p>
      </div>
    </div>
  );
}
