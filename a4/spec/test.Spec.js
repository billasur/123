import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jasmine-dom';
import App from '../src/App.jsx';


describe('Simple Counter', () => {
  it('should render the counter with initial value 0', () => {
    render(<App />);
    const counterElement = screen.getAllByText('0');
    expect(counterElement).toBeDefined();
  });



  it('should increment the counter value when the increment button is clicked', () => {
    render(<App />);
    
    // Find the increment button by its text content
    const incrementButton = screen.getByText('+');
    
    // Click the increment button
    fireEvent.click(incrementButton);
    
    // Find the counter element showing the incremented value
    const counterElement = screen.getByText('1');
    
    // Assert that the counter value is now 1
    expect(counterElement).toBeDefined(); // Use toBeInTheDocument() for better readability
  });

  it('should decrement the counter value when the decrement button is clicked', () => {
    render(<App />);
    const incrementButton = screen.getByText('+');
    const decrementButton = screen.getByText('-');

    // Increment first to avoid negative counter value in the initial state
    fireEvent.click(incrementButton);
    fireEvent.click(decrementButton);

    const counterElement = screen.getByText('0');
    expect(counterElement).toBeDefined();
  });
});