import React from "react";
import "../Navbar/navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Router, Routes, Route, Link } from "react-router-dom";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Sidebar from "../Sidebar/sidebar";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";

function navbar() {
  return (
    <div className="whole_nav">
      <div className="row" id="navbar">
        <Link to="/" className="col-md-2 mt-3 logo text-decoration-none">
          <h1>Suntwist</h1>
        </Link>
        <input
          type="search"
          placeholder="Search"
          id="search_box"
          className="col-md-5 mt-4"
        />
        <Link to="/login" className="col-md-2 mt-4 acct_butn text-dark">
          <button>
            <PermIdentityOutlinedIcon className="ms-5" /> My Account
          </button>
        </Link>

        <Link to="/cart" className="col-md-2 mt-4 cart_butn text-dark">
          <button>
            <ShoppingCartOutlinedIcon className="ms-3" /> My Cart
          </button>
        </Link>
      </div>
      <div className="row" id="sec_navbar">
        <button className="Category_butn col-md-3">All categories</button>
        <ul className="col-md-9 mt-3 d-flex justify-content-center">
          <li className="p-2">Home</li>
          <li className="p-2">About Us</li>
          <li className="p-2">Shop</li>
          <li className="p-2">Pages</li>
          <li className="p-2">Blog</li>
          <li className="p-2">Contact</li>
        </ul>
      </div>
      <div
        className="d-flex justify-content-center"
        id="third_nav"
        style={{ display: "none" }}
      >
        {/* <button className="ms-2 mb-2 fs-5 acct2_butn">
          <DehazeOutlinedIcon />
        </button> */}
        <Sidebar/>
        
        <Link to="/" className="text-decoration-none">
          <h1 className="mt-3 ms-3 fs-4 logo_2 text-decoration-none">
            Suntwist
          </h1>
        </Link>
        <Link to="/login">
          <button>
            <PermIdentityOutlinedIcon className="ms-4 fs-1 mt-3 acct2_butn" />
          </button>
        </Link>
        <Link to="/cart">
          <button>
            <ShoppingCartOutlinedIcon className="ms-4 fs-1 mt-3 cart2_butn" />
          </button>
        </Link>
        <Link to="/">
          <button>
            <LocalPhoneOutlinedIcon className="ms-4 fs-1 mt-3 cart2_butn" />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default navbar;
