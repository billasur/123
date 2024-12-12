import React, { useState, useEffect } from 'react';
import './Carousel.css';
import { images } from '../data/CarouselData';
// you can explore more - and check as how to use materiul ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// Complete the Carousal, using only functional components, you can use React hooks for State Management
const Carousel = () => {
  const [pic, setPic] = useState(0);
  const [currPic, setCurrPic] = useState(images[pic]);

  useEffect(() => {
    setCurrPic(images[pic]);
  }, [pic]);
  const btn1 = ()=>{
    setPic(0);
  }
  const btn2 = ()=>{
    setPic(1);
  }
  const btn3 = ()=>{
    setPic(2);
  }
  return (
    <div className="img-slider">
      <div
        className="left"
        onClick={() => {
          setPic((prev) => (prev > 0 ? prev - 1 : images.length - 1));
        }}
      >
        <ArrowBackIosIcon />
      </div>
      <h1>{currPic.title}</h1>
      <h3>{currPic.subtitle}</h3>
      <img src={currPic.img} />
      <button onClick={btn1}>1</button>
      <button onClick={btn2}>2</button>
      <button onClick={btn3} className="active">3</button>
      <div
        className="right"
        onClick={() => {
          setPic((prev) => (prev < images.length - 1 ? prev + 1 : 0));
        }}
      >
        <ArrowForwardIosIcon />
        
      </div>
    </div>
  );
};

export default Carousel;