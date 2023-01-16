import React from "react";
import DashboardBuySellEscrow from "../components/buy,sell,escrow/DashboardBuySellEscrow";
import DashboardNavbar from "../components/DashboardNavbar";
import Footer from "../components/Footer";
const EscrowLand = () => {
  return (
    <>
      <DashboardNavbar />
      <DashboardBuySellEscrow
        Title="Secure Land"
        bg="bg-blue-100"
        border="border-blue-100"
      />
    </>
  );
};

export default EscrowLand;
