import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function CarouselComponent() {
  return (
    <div class="carousel-wrapper">
      <Carousel infiniteLoop useKeyboardArrows autoPlay>
        <div>
          <img src="/Assets/images/holmes2.jpg" />
        </div>
        <div>
          <img src="/Assets/images/fri.jpg" />
        </div>
        <div>
          <img src="/Assets/images/got1.jpg" />
        </div>
        <div>
          <img src="/Assets/images/dark1.png" />
        </div>
        <div>
          <img src="/Assets/images/bad1.jpg" />
        </div>
        <div>
          <img src="/Assets/images/bbt1.jpg" />
        </div>
      </Carousel>
    </div>
  );
}
