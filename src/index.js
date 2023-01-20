import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import FindLand from "./pages/FindLand";
import LandOwner from "./pages/LandOwner";
import BuyLandDashboard from "./pages/BuyLandDashboard";
import SellLandDashboard from "./pages/SellLandDashboard";
import EscrowLandDashboard from "./pages/EscrowLandDashboard";
import BuyLandLists from "./pages/BuyLandLists";
import SellLandForm from "./components/buy,sell,escrow/sellLandForm/SellLandForm";
import EscrowLandForm from "./components/buy,sell,escrow/escrowLandForm/EscrowLandForm";
import LandsForEscrow from "./pages/LandsForEscrow";
import LandForSale from "./pages/LandsForSale";
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route exact path="/" element={<App />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/findland" element={<FindLand />} />
          <Route exact path="/landOwner" element={<LandOwner />} />
          <Route exact path="/buyLand" element={<BuyLandDashboard />} />
          <Route exact path="/sellLand" element={<SellLandDashboard />} />
          <Route exact path="/escrowLand" element={<EscrowLandDashboard />} />
          <Route exact path="/buyLandLists" element={<BuyLandLists />} />
          <Route exact path="/sellLandForm" element={<SellLandForm />} />
          <Route exact path="/landForSale" element={<LandForSale />} />
          <Route exact path="/escrowLandForm" element={<EscrowLandForm />} />
          <Route exact path="/landForEscrow" element={<LandsForEscrow />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
