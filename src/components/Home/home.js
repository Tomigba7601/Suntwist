import React from "react";
import "../Home/home.css";
import Sidebar from "../Sidebar/sidebar";
import Carousel from "../Carousel/carousel";
// import Carosel from '../component/Carosel';
import Services from "../Services"
import Item from '../Item'
import Card from '../Card'

function home() {
  return (
    <div className="d-flex">
      <Sidebar />
      <div style={{ backgroundColor: "#e7e5e5" }}>
        <Carousel className="carouse card-img-top" />
        <div className="whole-div">
          <h3 className="fw-bold" style={{color:"#66A500"}}>Category</h3>
          <div className="col-md-3 fw-bold first-div m-2">Free shipping</div>
          <div className="col-md-3 fw-bold second-div m-2">Online shopping</div>
          <div className="col-md-3 fw-bold third-div m-2">Secure Payment</div>
        </div>
        {/* <Carosel /> */}
            <Services />
            <Item />
            <Card />
      </div>
    </div>
  );
}

export default home;
