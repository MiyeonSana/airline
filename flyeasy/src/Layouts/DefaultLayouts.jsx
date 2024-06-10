import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { airplaneImages } from "../data/Models";
function DefaultLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      {/* <Slideshow images={airplaneImages} interval={3000} /> */}
      <Footer />
    </>
  );
}
export default DefaultLayout;
