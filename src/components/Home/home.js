import React from "react";
import "../Home/home.css";
import Carousel from "../Carousel/carousel";
import Services from "../Services";
import Item from "../Item";
import Card from "../Card";

function home() {
  return (
    <>
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
            src="https://media.istockphoto.com/photos/whole-cross-section-and-quarter-of-fresh-organic-navel-orange-with-picture-id1227301369?b=1&k=20&m=1227301369&s=170667a&w=0&h=7WdK1RQTLuCn5tuNe25Z999THYzj8yijmk0MaRE-SD0="
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
          className="col-md-3 card m-2 mt-4 pt-5 h-100 text-center"
          style={{ background: "#F5EDEB" }}
        >
          "Blood Bank Canine Teeth Larynx Occupational Therapist Oncologist
          Optician Plaque Spinal Tap Stat Strep Optician Plaque Spinal Tap Stat
          Strep..."
        </div>
        <div
          className="col-md-3 card m-2 mt-4 pt-5 h-75 text-center"
          style={{ background: "#F5F3EB" }}
        >
          "Blood Bank Canine Teeth Larynx Occupational Therapist Oncologist
          Optician Plaque Spinal Tap Stat Strep Optician Plaque Spinal Tap Stat
          Strep..."
        </div>
        <div
          className="col-md-3 card m-2 pt-5 mt-4 h-75 text-center"
          style={{ background: "#EBF4F5" }}
        >
          "Blood Bank Canine Teeth Larynx Occupational Therapist Oncologist
          Optician Plaque Spinal Tap Stat Strep Optician Plaque Spinal Tap Stat
          Strep..."
        </div>
      </div>
      <div className="row m-2 text-center">
          <div className="col-md-3">
            <h5 style={{color:"#66A500"}}>Free Fast Delivery</h5>
            <p>Online Only Exclusions Apply</p>
          </div>
          <div className="col-md-3">
            <h5 style={{color:"#66A500"}}>24/7 Call Support</h5>
            <p>Contact Us 24 Hours A Day</p>
          </div>
          <div className="col-md-3">
            <h5 style={{color:"#66A500"}}>Our Special Offer</h5>
            <p>Offer Is Any Kind Of Discount</p>
          </div>
          <div className="col-md-3">
            <h5 style={{color:"#66A500"}}>For Quality Product</h5>
            <p>Sell Highest Quality Item</p>
          </div>
      </div>
    </>
  );
}

export default home;
