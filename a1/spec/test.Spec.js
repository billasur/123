import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jasmine-dom';
import App from '../src/App.jsx';
import AppClass from '../src/AppClass.jsx';

describe('AppClass Component', () => {
  it('should render images in the gallery for App Class Component', () => {
    const { container } = render(<AppClass />);
    
    // Find all img elements within the rendered container
    const images = container.querySelectorAll('img');
    
    expect(images.length).toBe(4); // Expecting 4 images to be rendered
    
    // Check if all images have the correct src attribute
    images.forEach(image => {
      expect(image.src).toContain('https://github.com/Kalvium-Program/lab-react-jsx-boilerplate/blob/main/src/images/elephant.jpeg?raw=true');
    });
  });
});

describe('App Component', () => {
  it('should render images in the gallery for the App Component', () => {
    const { container } = render(<App />);
    
    // Find all img elements within the rendered container
    const images = container.querySelectorAll('img');
    
    expect(images.length).toBe(4); // Expecting 4 images to be rendered
    
    // Check if all images have the correct src attribute
    images.forEach(image => {
      expect(image.src).toContain('https://github.com/Kalvium-Program/lab-react-jsx-boilerplate/blob/main/src/images/elephant.jpeg?raw=true');
    });
  });
});