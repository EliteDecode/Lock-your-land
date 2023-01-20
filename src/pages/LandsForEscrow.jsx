import React from "react";
import LandForEscrowComp from "../components/buy,sell,escrow/LandForEscrowComp";

import LandForSaleComp from "../components/buy,sell,escrow/LandForSaleComp";
import DashboardNavbar from "../components/DashboardNavbar";

const SellLand = () => {
  return (
    <>
      <DashboardNavbar />
      <LandForEscrowComp />
    </>
  );
};

export default SellLand;
