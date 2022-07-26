import React from "react";
import "../styles/carosel.css";
// import imgOne from "../Image/healty.jpg"
// import imgTwo from "../Image/fruita.jfif"
// import imgThree from "../Image/fruit.jfif"

function Carosel() {
  return (
    <>
      {/* <div class="swiffy-slider slider-nav-round slider-nav-animation slider-nav-animation-fadein slider-item-last-visible">
    <ul class="slider-container">
        <li class="">
            <div class="card rounded-0 h-100">
                <div class="row g-0 h-100">
                    <div class="col-md-6 col-xl-5 d-flex align-items-center p-2 p-md-3 p-xl-5">
                        <div class="card-body p-1 p-md-3 p-xl-5">
                            <p class="lead">Why use this slider</p>
                            <h2 class="coloredText card-title" >Swiffy Slider Benefits</h2>
                            <p class="card-text mt-3">Super fast lightweight slider and carousel with amazing touch support and user experience.</p>
                            <p>Super simple setup using just markup and few powerful configuration options</p>
                            <p class="card-text"><small class="text-muted">Remember to check out on mobile</small></p>
                        </div>
                    </div>
                    <div class="col-md-6 col-xl-7">
                        <img src={imgOne} class=" secondImg card-img d-none d-md-block" loading="lazy"  alt="..."/  >
                        <img src={imgOne} class="secondImg card-img d-block d-md-none" loading="lazy" alt="..."/>
                    </div>
                </div>
            </div>
        </li>
        <li class="">
            <div class="card rounded-0 h-100">
                <div class="row g-0 h-100">
                    <div class="col-md-6 col-xl-7">
                        <img src={imgTwo} class="secondImg card-img d-none d-md-block" loading="lazy"  alt="..."/>
                        <img src={imgTwo} class=" secondImg card-img d-block d-md-none" loading="lazy"  alt="..."/>
                    </div>
                    <div class="col-md-6 col-xl-5 d-flex align-items-center p-2 p-md-3 p-xl-5">
                        <div class="card-body p-1 p-md-3 p-xl-5">
                            <p class="lead">Dreaming about cars</p>
                            <h2 class=" coloredText  card-title" >Vintage cars from another era</h2>
                            <p class="card-text mt-3">First, there’s the design of the car itself. Classic cars were created very much in an analogue world where designers used pencil and paper to create elegant shapes and flowing lines that would just not be possible
                                on the computer-based design software used by modern car designers.</p>
                            <p class="card-text"><small class="text-muted">Handcrafted like good code</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </li>
        <li class="slide-visible">
            <div class="card rounded-0 h-100 text-white">
                <img src={imgOne} class="lastImg card-img h-100"  alt="..."/>
                <div class="card-img-overlay d-flex align-items-start align-items-md-center justify-content-center flex-column">
                    <h2 class="card-title h1 d-block d-md-inline-block">The Aston Martin DB5</h2>
                    <p class="card-text lead col-md-8 col-lg-6">The Aston Martin DB5 is a British luxury grand tourer (GT) that was made by Aston Martin and designed by the Italian coachbuilder Carrozzeria Touring Superleggera. </p>
                </div>
            </div>
        </li>
    </ul>

    <button type="button" class="slider-nav" aria-label="Go left"></button>
    <button type="button" class="slider-nav slider-nav-next" aria-label="Go left"></button>

    <div class="slider-indicators">
        <button class="" aria-label="Go to slide"></button>
        <button aria-label="Go to slide" class=""></button>
        <button aria-label="Go to slide" class="active"></button>
    </div>
</div>   */}

      <div className="carosel">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="row">
                <div className="discountSection col-5   my-md-5 my-lg-5 ">
                  <div className="NaturalText ">
                    <h6 className="natural ">Natural & Organic </h6>
                    <h1 className="forty ">-40% Offer All Products.</h1>
                  </div>
                  <div className="my-md-5 ">
                    <button className="shopNowBtn">Shop Now</button>
                  </div>
                </div>
                <div className="col-5  m-md-5 m-lg-5 ">
                  <div className="fruits">
                    <img src="../Image/fruit.jfif" alt="" srcset="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Carosel;
