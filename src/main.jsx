import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./layouts/Login.jsx";
import SiginUp from "./layouts/SiginUp.jsx";
import Navbar from "./layouts/navbar.jsx";
import ShoppinCart from "./layouts/ShoppinCart.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SiginUp" element={<SiginUp />} />
        <Route path="/Shoppingcart" element={<ShoppinCart />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
