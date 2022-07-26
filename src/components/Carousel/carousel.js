import React from "react";
import "../Carousel/carousel.css";
import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import ecom from "../images/one.png.webp";

function carousel() {
  return (
    <div className="card carouse shadow">
      <CCarousel controls transition="crossfade">
        <CCarouselItem>
          <CImage className="d-block card-img-top" src={ecom} alt="slide 1" />
        </CCarouselItem>
        <CCarouselItem>
          <CImage
            
            className="d-block card-img-top"
            src={ecom}
            alt="slide 2"
          />
        </CCarouselItem>
        <CCarouselItem>
          <CImage
            className="d-block w-100 card-img-top"
            src={ecom}
            alt="slide 3"
          />
        </CCarouselItem>
      </CCarousel>
    </div>
  );
}

export default carousel;
