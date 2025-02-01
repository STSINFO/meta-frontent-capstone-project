import React from "react";
import greek from "../assets/greek-salad.jpg";
import bruchetta from "../assets/Bruchetta.jpg";
// import lemonDessert from "../assets/greek-salad.jpg";
import Card from "../Card";

export default function Highlights() {
  return (
    <section className="out-container highlights inner-container">
      <div className="highlights-header">
        <h3 className="tertiary-header ">This weeks spacials!</h3>
        <a href="#" className="btn">
          Online Menu
        </a>
      </div>
      <div className="cards grid grid--3--cols">
        <Card
          url={greek}
          title={"Greek Salad"}
          price={12.99}
          text={
            "The famous greek salad of crispy lettuce. peppers. olives and our Chicago style feta cheese. garnished with cunchy galic and rosemary croutons."
          }
        />
        <Card
          url={bruchetta}
          title={"Bruchetta"}
          price={5.99}
          text={
            "Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
          }
        />
        <Card
          url={greek}
          title={"Lemon Dessert"}
          price={5.0}
          text={
            "This comes straight from grandma's recipe book. every last ingredient has been sourced and is as authentic as can be imagined."
          }
        />
      </div>
    </section>
  );
}
