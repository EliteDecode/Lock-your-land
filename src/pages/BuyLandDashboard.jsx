import React from "react";
import DashboardBuySellEscrow from "../components/buy,sell,escrow/DashboardBuySellEscrow";
import DashboardNavbar from "../components/DashboardNavbar";
import Footer from "../components/Footer";
const BuyLand = () => {
  return (
    <>
      <DashboardNavbar />
      <DashboardBuySellEscrow
        Title="Buy Land"
        bg="bg-green-100"
        target="/buyLandLists"
      />
    </>
  );
};

export default BuyLand;
