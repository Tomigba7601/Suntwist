import React from "react";
import "./App.css";
import { Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/home";
import {
  AccountBalanceWalletRounded,
  Chat,
  Favorite,
  HomeRounded,
  Settings,
  SummarizeRounded,
} from "@mui/icons-material";
import Navbar from "./components/Navbar/navbar";
import Login from "./components/Login/login";
import Signup from "./components/Signup/signup";
import Menucont from "./components/menucontainer/menucont";
import Footer from "./components/Footer/footer";
import Carousel from "./components/Carousel/carousel";
import Admin from "./Admin/Admin";
import MoreDetails from "./Pages/MoreDetails";
import { useSelector } from "react-redux";
import ShippingAddress from "./Pages/ShippingAddress";
import Cart from "./Pages/Cart";
import PaymentMethod from "./Pages/PaymentMethod";
import PaymentSummary from "./Pages/PaymentSummary";
import CustomerAccount from "./Pages/CustomerAccount";

function App() {
  const globalState = useSelector((state) => {
    return state.price;
  });
  console.log(globalState);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
        <Route path="/moredetails/:id" element={<MoreDetails />} />

        <Route path="/address" element={<ShippingAddress />} />

        <Route path="/cart" element={<Cart />} />
        <Route path="/paymentmethod" element={<PaymentMethod />} />
        <Route path="/PaymentSummary" element={<PaymentSummary />} />
        <Route path="/customeraccount" element={<CustomerAccount />} />
      </Routes>
      <div className="leftMenu">
        <ul id="menu">
          <Menucont link={"#"} icon={<HomeRounded />} isHome />
          <Menucont link={"#"} icon={<Chat />} />
          <Menucont link={"#"} icon={<AccountBalanceWalletRounded />} />
          <Menucont link={"#"} icon={<Favorite />} />
          <Menucont link={"#"} icon={<SummarizeRounded />} />
          <Menucont link={"#"} icon={<Settings />} />
          <div className="indicator"></div>
        </ul>
      </div>
      <Footer />
    </>
  );
}

export default App;
