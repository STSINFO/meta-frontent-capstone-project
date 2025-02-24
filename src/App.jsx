import { useState } from "react";
import BookingPage from "./BookingPage";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import MainLayout from "./Components/MainLayout";
import BookingForm from "./BookingForm";
import Confirm from "./Confirm";
import Congrats from "./Congrats";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<BookingPage />} />
          <Route path="/menu" element={<BookingPage />} />
          <Route path="/reservations" element={<BookingPage />}>
            <Route index element={<BookingForm />} />
            <Route path="confirm" element={<Confirm />} />
            <Route path="congrats" element={<Congrats />} />
          </Route>
          <Route path="/order-online" element={<BookingPage />} />
          <Route path="/login" element={<BookingPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
