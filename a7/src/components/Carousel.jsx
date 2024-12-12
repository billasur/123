import React, { Component } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
// you can explore more - and check as how to use materiul ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// implement the class below
class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
    };
  }

  handleNext = () => {
    this.setState(prevState => {
      const nextIndex = (prevState.currentIndex + 1) % images.length;
      return { currentIndex: nextIndex };
    });
  };

  handlePrev = () => {
    this.setState(prevState => {
      const prevIndex = (prevState.currentIndex - 1 + images.length) % images.length;
      return { currentIndex: prevIndex };
    });
  };

  render() {
    const { currentIndex } = this.state;
    const currentImage = images[currentIndex];

    return (
      <div className="carousel-container">
        <h2>{currentImage.title}</h2>
        <p>{currentImage.subtitle}</p>
        <img src={currentImage.img} alt={currentImage.title} className="carousel-image" />
        <div className="carousel-controls">
          <button onClick={this.handlePrev}>&lt; </button>
          <button onClick={this.handleNext}> &gt;</button>
        </div>
      </div>
    );
  }
}

export default Carousel;