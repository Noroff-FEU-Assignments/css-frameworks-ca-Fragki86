import React from "react";
import Carousel from "react-bootstrap/Carousel";
import img1 from "./../../Carousel-images/carousel-1.jpg";
import img2 from "./../../Carousel-images/carousel-2.jpg";
import img3 from "./../../Carousel-images/carousel-3.jpg";




function CarouselHome() {
    return (
      <Carousel>
        <Carousel.Item >
          <img
            className="d-block w-100"
            src={img1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img3}
            alt="Third slide"
          />

        </Carousel.Item>
      </Carousel>
    );
}

export default CarouselHome;