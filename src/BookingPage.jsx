import React from "react";
import BookingForm from "./BookingForm";
import Banner from "./Banner";
import { Outlet } from "react-router-dom";

export default function BookingPage() {
  return (
    <>
      <Banner />
      <Outlet />
    </>
  );
}
