import React, { useEffect, useState } from "react";
import "../components/styles/Cart.css";
import { AiOutlineDelete } from "react-icons/ai";

function Cart() {
  const [cart, setcart] = useState([]);
  const [num, setnum] = useState(1);

  useEffect(() => {
    let suntwistArray = localStorage["suntwist"]
      ? JSON.parse(localStorage.suntwist)
      : [];
    setcart(suntwistArray);
  }, []);

  const addMore = (i) => {
  };

  return (
    <div>

      {/* cart item start here */}

      <div>
        <div className="container">
          <div className="row">
            <div className="col-12 mt-4">
              <div className="row">
                <div className="col-xm-12 col-md-12 col-lg-8 col-xl-8 col-xxl-8">
                  <div className="cartHeading  ">
                    <h5 className="p-2">Cart(65)</h5>
                  </div>

                  {/* cart item starts here */}
                  <div>
                    {cart.map((eachItem, i) => (
                      <div className="row  ">
                        <div className="col-sm-10 col-md-10 col-lg-12 col-xl-10 col-xxl-10 ">
                          <div className="  row mb-2 ">
                            <div className="col-9">
                              <div className="row">
                                <div className="col-4">
                                  <div className="imgSection d-flex justify-content-center">
                                    <img
                                      src={eachItem.image}
                                      alt=""
                                      srcset=""
                                      className="itemImg"
                                    />
                                  </div>
                                </div>
                                <div className="productName col-8">
                                  {eachItem.title}
                                </div>
                              </div>
                            </div>
                            <div className=" col-3">
                              <h5 className="text-end">#{eachItem.price}</h5>
                              <div className="float-end">
                                <button className="minusBtn">-</button>
                                <span>{num}</span>
                                <button
                                  className="actionBtn"
                                  onClick={() => addMore(i)}
                                >
                                  +
                                </button>
                              </div>
                            </div>
                            <div className="d-flex justify-content-end">
                              <button className="deleteBtn">
                                <AiOutlineDelete size="25px" />
                              </button>
                            </div>

                            <hr />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="summarySection col-xm-10 col-md-10 col-lg-3 col-xl-3 col-xxl-3 shadow mt-3">
                  <h6 className="text-muted">Cart Summary</h6>
                  <hr />
                  <span className="text-muted">Subtotal</span>
                  <span className=" totalPrice float-end">#2,000</span>
                  <hr />

                  <div className="d-flex justify-content-center">
                    <button className="checkOutBtn">CHECKOUT ()</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
