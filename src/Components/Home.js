import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function CarouselComponent() {
  return (
    <div>
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
          <div>
            <img src="/Assets/images/pb.jpg" />
          </div>
          <div>
            <img src="/Assets/images/st.png" />
          </div>
          <div>
            <img src="/Assets/images/mh.jpeg" />
          </div>
          <div>
            <img src="/Assets/images/luci.jpg" />
          </div>
          <div>
            <img src="/Assets/images/suits.jpg" />
          </div>
        </Carousel>
      </div>
      <div className="flex-box">
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <p>"I wish I could, but I don’t want to."</p>
            </div>
            <div class="flip-card-back">
              <h1>Friends</h1>
            </div>
          </div>
        </div>
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <p>"Good taste is for people who can’t afford sapphires."</p>
            </div>
            <div class="flip-card-back">
              <h1>Peaky Blinders</h1>
            </div>
          </div>
        </div>
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <p>"By the order of Peaky Blinders"</p>
            </div>
            <div class="flip-card-back">
              <h1>Peaky Blinders</h1>
            </div>
          </div>
        </div>
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <p>"The end is the beginning and the beginning is the end."</p>
            </div>
            <div class="flip-card-back">
              <h1>Dark</h1>
            </div>
          </div>
        </div>
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <p>“I drink and i know things got.”</p>
            </div>
            <div class="flip-card-back">
              <h1>Game of Thrones</h1>
            </div>
          </div>
        </div>
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <p>“Could I be wearing any more clothes?”</p>
            </div>
            <div class="flip-card-back">
              <h1>Friends</h1>
            </div>
          </div>
        </div>
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <p>"Say my name. Heisenberg You are Goddamn right."</p>
            </div>
            <div class="flip-card-back">
              <h1>Breaking Bad</h1>
            </div>
          </div>
        </div>
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <p>"We are all full of sin. No pure human being exist"</p>
            </div>
            <div class="flip-card-back">
              <h1>Dark</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
