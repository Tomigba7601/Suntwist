import React from "react";
import "../Home/home.css";
import Carousel from "../Carousel/carousel";
import Services from "../Services";
import Item from "../Item";
import Card from "../Card";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import HeadsetMicOutlinedIcon from "@mui/icons-material/HeadsetMicOutlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import SentimentSatisfiedAltOutlinedIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";

function home() {
  return (
    <div className="whole_home">
      <Carousel />{" "}
      <div className="row sec_1 justify-content-center m-5">
        <div className="col-md-4 card category_1 text-center shadow">
          <p className="fw-bold fs-2">Coconut Fresh</p>
          <button className="text-dark">Shop Now</button>
          <img
            src="https://www.narayanahealth.org/blog/wp-content/uploads/2022/03/shutterstock_622663796.jpg"
            alt=""
            width="400px"
            height="200px"
            className="card-img-top text-center"
          />
        </div>
        <div className="col-md-7 ms-5 card category_2 text-center shadow">
          <p className="fw-bold fs-2">Garden Fresh Pure Orange</p>
          <button className="text-dark">Shop Now</button>
          <img
            src="https://media.istockphoto.com/photos/orange-isolated-on-white-background-clipping-path-full-depth-of-field-picture-id1194662606?k=20&m=1194662606&s=612x612&w=0&h=Q3bHkLexn71hPlUJQSPhazlJiL-xpeVGwOAFwO67WcU="
            alt=""
            width="200px"
            height="100px"
            className="card-img-top"
          />
        </div>
      </div>
      <div className="row sec_1 justify-content-center m-5">
        <div className="col-md-7 card category_3 text-center shadow">
          <p className="fw-bold fs-2">Shop Strawberry Fresh fruit</p>
          <button className="text-dark">Shop Now</button>
          <img
            src="https://thumbs.dreamstime.com/b/three-strawberries-strawberry-leaf-white-background-114284301.jpg"
            alt=""
            width="300px"
            height="200px"
            className="card-img-top"
          />
        </div>
        <div className="col-md-4 card ms-5 category_4 text-center shadow">
          <p className="fw-bold fs-2">Broccoli Slice</p>
          <button className="text-dark">Shop Now</button>
          <img
            src="https://t4.ftcdn.net/jpg/01/38/59/65/360_F_138596528_dG7J8xrEXROzGkE0PCgKjDWyclYUWfzz.jpg"
            height="200px"
            alt=""
            className="card-img-top"
          />
        </div>
      </div>
      <Services />
      <Item />
      <Card />
      <div className="row p-3 d-flex justify-content-center" id="testimony">
        <h2 className="fw-bold text-center">Why do they love us</h2>
        <div
          className="col-md-3 fw-bold card m-2 mt-4 pt-3 h-100 text-center"
          style={{ background: "#F5EDEB" }}
        >
          <div className="d-flex justify-content-center mb-3">
            <img
              src="https://www.narayanahealth.org/blog/wp-content/uploads/2022/03/shutterstock_622663796.jpg"
              style={{ width: "70px", height: "70px", borderRadius: "70px" }}
            />
            <p className="ms-3">Designer</p>
          </div>
          "Blood Bank Canine Teeth Larynx Occupational Therapist Oncologist
          Optician Plaque Spinal Tap Stat Strep Optician Plaque Spinal Tap Stat
          Strep..."
        </div>
        <div
          className="col-md-3 fw-bold card m-2 mt-4 pt-3 h-75 text-center"
          style={{ background: "#F5F3EB" }}
        >
          <div className="d-flex justify-content-center mb-3">
            <img
              src="https://www.narayanahealth.org/blog/wp-content/uploads/2022/03/shutterstock_622663796.jpg"
              style={{ width: "70px", height: "70px", borderRadius: "70px" }}
            />
            <p className="ms-3">Designer</p>
          </div>
          "Blood Bank Canine Teeth Larynx Occupational Therapist Oncologist
          Optician Plaque Spinal Tap Stat Strep Optician Plaque Spinal Tap Stat
          Strep..."
        </div>
        <div
          className="col-md-3 fw-bold card m-2 pt-3 mt-4 h-75 text-center"
          style={{ background: "#EBF4F5" }}
        >
          <div className="d-flex justify-content-center mb-3">
            <img
              src="https://www.narayanahealth.org/blog/wp-content/uploads/2022/03/shutterstock_622663796.jpg"
              style={{ width: "70px", height: "70px", borderRadius: "70px" }}
            />
            <p className="ms-3">Designer</p>
          </div>
          "Blood Bank Canine Teeth Larynx Occupational Therapist Oncologist
          Optician Plaque Spinal Tap Stat Strep Optician Plaque Spinal Tap Stat
          Strep..."
        </div>
      </div>
      <div className="row m-2 text-center fw-bold">
        <div className="col-md-3">
          <ShoppingCartOutlinedIcon className="fs-1 mb-2" />
          <h5 style={{ color: "#66A500" }}>Free Fast Delivery</h5>
          <p>Online Only Exclusions Apply</p>
        </div>
        <div className="col-md-3">
          <HeadsetMicOutlinedIcon className="fs-1 mb-2" />
          <h5 style={{ color: "#66A500" }}>24/7 Call Support</h5>
          <p>Contact Us 24 Hours A Day</p>
        </div>
        <div className="col-md-3">
          <LocalOfferOutlinedIcon className="fs-1 mb-2" />
          <h5 style={{ color: "#66A500" }}>Our Special Offer</h5>
          <p>Offer Is Any Kind Of Discount</p>
        </div>
        <div className="col-md-3">
          <SentimentSatisfiedAltOutlinedIcon className="fs-1 mb-2" />
          <h5 style={{ color: "#66A500" }}>For Quality Product</h5>
          <p>Sell Highest Quality Item</p>
        </div>
      </div>
    </div>
  );
}

export default home;
