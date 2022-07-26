import React, { useEffect, useState } from "react";
import axios from "axios";
import "../components/styles/Card.css";
import { useNavigate } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { TbJewishStar } from "react-icons/tb";
import { MdOutlineCompareArrows } from "react-icons/md";

function Card() {
  const [product, setproduct] = useState([]);
  const [allCart, setAllCart] = useState([]);

  const url = "https://fakestoreapi.com/products";

  useEffect(() => {
    makeRequest();
  }, []);
  const makeRequest = () => {
    axios
      .get(url)
      .then((response) => {
        console.log(response.data);
        setproduct(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
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
      <div className="allCard d-flex flex-row">
        {product.map((eachProduct, i) => (
          <div class="productCard card">
            <div className=" d-flex justify-content-center">
              <img
                src={eachProduct.image}
                class="card-img-top "
                alt="..."
                className="cardImg"
                onClick={() => handleGetDetails(eachProduct)}
                key={eachProduct.id}
              />
              <div className="allIcons">
                <button className="cartBtn btn" onClick={() => addToCart(i)}>
                  <BsCart3 size="20px" />
                </button>
                <button className="compareBtn btn">
                  <MdOutlineCompareArrows size="20px" />
                </button>
                <button className="wishListBtn btn ">
                  <TbJewishStar size="20px" />
                </button>
              </div>
            </div>
            <div class="card-body ">
              <p className="text-center">{eachProduct.title}</p>
              <p className="text-muted text-center">${eachProduct.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
