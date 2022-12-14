import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import "../components/styles/MoreDetails.css";
import Test from "../Image/FB_IMG_16303483673568829.jpg";
import star from "../Image/star.png";
import { useState } from "react";
import { BsCart3 } from "react-icons/bs";
import MoreDetailsDesp from "../components/MoreDetailsDesp";
import { useNavigate } from "react-router-dom";

function MoreDetails() {
  const [product, setproduct] = useState([]);
  const [allCart, setAllCart] = useState([]);
  // const url = "https://fakestoreapi.com/products";

  let { id } = useParams();
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => {
      console.log(res.data);
      // setcurrentProduct(res.data)
    });
  });
 
  useEffect(() => {
    let suntwistArray = localStorage["suntwist"]
      ? JSON.parse(localStorage.suntwist)
      : [];
    setAllCart(suntwistArray);
  }, []);
  const navigate = useNavigate();
  const handleGetDetails = (i) => {
    console.log(i.id);

    navigate(`/moredetails/${i.id}`);
  };

  const addToCart = (i) => {
    let allProduct = product[i];
    setAllCart(() => {
      let newAddedItem = [...allCart, allProduct];
      console.log(newAddedItem);
      localStorage.setItem("suntwist", JSON.stringify(newAddedItem));
      return newAddedItem;
    });
  };
  return (
    <div>
      {/* Card Component starts here  */}
      <div className="container">
        <div className="d-flex justify-content-center my-5">
          {product.map((eachProduct, i) => (
            <div class="card mb-3">
              <div class="row g-0">
                <div class="col-md-4">
                  <img
                    src={eachProduct.image}
                    class="img-fluid rounded-start"
                    alt="..."
                    // onClick={() => handleGetDetails(eachProduct)}
                    // key={eachProduct.id}
                    />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title display-5">Lorem, ipsum dolor.</h5>
                    <hr />
                    <img src={star} alt="" className="star" />
                    <p class="card-text text-center text-muted">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Accusantium a repellendus praesentium laboriosam minima
                      earum, facere voluptate cupiditate itaque? Cum eius autem
                      blanditiis earum expedita, obcaecati cumque suscipit
                      nesciunt incidunt mollitia eligendi tempora placeat
                      voluptatum neque! Fugiat rem voluptatem recusandae ducimus
                      a, ab error eaque, provident magni dolore reiciendis
                      repudiandae!
                    </p>

                    console.log(eachProduct.image);
                    <div className="d-flex justify-content-center">
                      <button
                        className="addToCart btn"
                        onClick={() => addToCart(i)}
                      >
                        {" "}
                        <BsCart3 size="30px" />
                        ADD TO CART
                      </button>
                    </div>
                    <div className="my-4">
                      <span>Categories: Lorem ipsum dolor sit amet.</span>
                      <br />
                      <span>Product Tags: Lorem ipsum dolor sit amet.</span>
                      <p></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* dESCRIPTION */}
      <MoreDetailsDesp />
    </div>
  );
}

export default MoreDetails;
