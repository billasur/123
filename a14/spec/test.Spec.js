import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jasmine-dom';
import App from '../src/App.jsx';
import Carousel from '../src/components/Carousel.jsx';
import { images } from '../src/data/CarouselData.jsx';

describe('Carousel Component', () => {
  it('should display the  image Carousal using Functional Component', () => {
    render(<Carousel />);
    const initialTitle = images[0].title;
    expect(screen.getByText(initialTitle)).toBeTruthy();
  });

});