import React from "react";
import FindlandBanner from "../components/FindLand/FindlandBanner";
import PropertyListings from "../components/FindLand/PropertyListings";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const FindLand = () => {
  return (
    <>
      <Navbar />
      <FindlandBanner />
      <PropertyListings />
      <Footer />
    </>
  );
};

export default FindLand;
