import React from "react";
import BookingForm from "./BookingForm";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import Banner from "./Banner";

export default function BookingPage() {
  return (
    <>
      <Nav />
      <Banner />
      <BookingForm />
      <Footer />
    </>
  );
}
