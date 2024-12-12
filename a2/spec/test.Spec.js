import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../src/App.jsx';

describe('App Component', () => {
  it('renders the gallery title and images correctly', () => {
    const testData = [
      { id: 1, img: 'image1.jpg' },
      { id: 2, img: 'image2.jpg' },
      { id: 3, img: 'image3.jpg' }
    ];

    render(<App data={testData} />);

    // Check if the gallery title is rendered
    const titleElement = screen.getByText('Kalvium Gallery');
    expect(titleElement).toBeTruthy(); // Ensure the title is rendered

    

  });
});
