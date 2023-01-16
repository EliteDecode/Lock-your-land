import React from "react";
import DashboardLandLists from "../components/buy,sell,escrow/DashboardLandLists";
import DashboardNavbar from "../components/DashboardNavbar";
import Footer from "../components/Footer";
const BuyLandLists = () => {
  return (
    <>
      <DashboardNavbar />
      <DashboardLandLists />
      <Footer />
    </>
  );
};

export default BuyLandLists;
