import React from "react";
import DashboardBuySellEscrow from "../components/buy,sell,escrow/DashboardBuySellEscrow";
import DashboardNavbar from "../components/DashboardNavbar";
import Footer from "../components/Footer";
const SellLand = () => {
  return (
    <>
      <DashboardNavbar />
      <DashboardBuySellEscrow
        Title="Sell Land"
        bg="bg-gray-100"
        border="border-red-100"
        target="/sellLandForm"
      />
    </>
  );
};

export default SellLand;
