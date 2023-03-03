import React, { useState } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

const Carousel = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1);
  };

  const prevImage = () => {
    setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1);
  };

  return (
    <div className="carousel">
      <FaArrowAltCircleLeft className="arrow left" onClick={prevImage} />
      <img src={images[currentImage]} alt="carousel-image" />
      <FaArrowAltCircleRight className="arrow right" onClick={nextImage} />
    </div>
  );
};

export default Carousel;
