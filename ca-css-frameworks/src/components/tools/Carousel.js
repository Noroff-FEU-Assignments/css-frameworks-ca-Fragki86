import React from "react";
import Carousel from "react-bootstrap/Carousel";


function CarouselHome() {
    return (
      <Carousel className="carousel-container">
        <Carousel.Item >
          <img
            className="d-block w-100"
            src="Carousel-images/carousel-1.jpg"
            alt="Old bicycle in a shop"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="Carousel-images/carousel-2.jpg"
            alt="Old photo camera"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="Carousel-images/carousel-3.jpg"
            alt="Broken Tv"
          />
        </Carousel.Item>
      </Carousel>
    );
}

export default CarouselHome;