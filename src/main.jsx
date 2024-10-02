import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./layouts/Login.jsx";
import SiginUp from "./layouts/SiginUp.jsx";
import ShoppinCart from "./layouts/ShoppinCart.jsx";
import Home from "./layouts/home.jsx";
import { NavContextProvider } from "./context/NavContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
        <NavContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profil" element={<App />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SiginUp" element={<SiginUp />} />
        <Route path="/Shoppingcart" element={<ShoppinCart />} />
      </Routes>
        </NavContextProvider>
    </BrowserRouter>
  </StrictMode>
);
