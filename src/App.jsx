import { useState } from "react";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";
import BookingPage from "./BookingPage";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservations" element={<BookingPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
