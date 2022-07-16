import React from "react";
import "../Home/home.css";
import Sidebar from "../Sidebar/sidebar";
import Carousel from "../Carousel/carousel";

function home() {
  return (
    <div className="d-flex">
      <Sidebar />
      <div>
        <Carousel className="carouse card-img-top" />
        {/* <div class="card container">
          <table className="mt-4 mb-5">
            <tbody>
              <tr className="">
                <button className="btn btn-dark me-3 p-2 group shadow">Suntwist Blog</button>      
                <button className="btn btn-dark me-3 p-2 group shadow">Pay Bills</button>      
                <button className="btn btn-dark me-3 p-2 group shadow">Free Delivery</button>      
                <button className="btn btn-dark me-3 p-2 group shadow">Online Store</button>      
                <button className="btn btn-dark me-3 p-2 group shadow">Brand Store</button>      
                <button className="btn btn-dark me-3 p-2 group shadow">Booking Flight</button>      
                <button className="btn btn-dark me-3 p-2 group shadow">Computers and Electro</button>      
                <button className="btn btn-dark me-3 p-2 group shadow">Kids Store</button>      
                <button className="btn btn-dark me-3 p-2 group shadow">Suntwist Fashion</button>      
                <button className="btn btn-dark me-3 p-2 group shadow">Phones and Tablets</button>      
                <button className="btn btn-dark me-3 p-2 group shadow">Library</button>      
                <button className="btn btn-dark me-3 p-2 group shadow">Beauty</button>      
                <button className="btn btn-dark me-3 p-2 group shadow">Automotives</button>      
                <button className="btn btn-dark me-3 p-2 group shadow">Sports & fitness</button>      
                <button className="btn btn-dark me-3 p-2 group shadow">Example</button>      
                <button className="btn btn-dark me-3 p-2 group shadow">Example</button>      
                <button className="btn btn-dark me-3 p-2 group shadow">Example</button>      
                <button className="btn btn-dark me-3 p-2 group shadow">Example</button>      
              </tr>
            </tbody>
          </table>
        </div> */}
      </div>
    </div>
  );
}

export default home;
