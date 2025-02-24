import React from "react";
import Footer from "./Footer";
import Nav from "./Nav";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
