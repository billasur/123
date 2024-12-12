import React, { useState } from 'react';
import './Carousel.css';
import { images } from '../data/CarouselData';
// you can explore more - and check as how to use materiul ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// Complete the Carousal, using only functional components, you can use React hooks for State Management
const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // State to keep track of current image index

  // Function to go to the previous image
  const goToPrev = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  // Function to go to the next image
  const goToNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div className="carousel">
      <div
        className="carouselInner"
        style={{ backgroundImage:`url(${images[currentIndex].image})`}}
      >
        <div className="left" onClick={goToPrev}>
          <ArrowBackIosIcon style={{ fontSize: '3rem' }} />
        </div>

        <div className="center">
          <h1>{images[currentIndex].title}</h1>
          <p>{images[currentIndex].description}</p>
        </div>

        <div className="right" onClick={goToNext}>
          <ArrowForwardIosIcon style={{ fontSize: '3rem' }} />
        </div>
      </div>
    </div>
  );
};

export default Carousel;