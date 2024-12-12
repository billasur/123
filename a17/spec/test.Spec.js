import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CounterWithRef from '../src/App.jsx'; // Adjust path if necessary

describe('CounterWithRef Component', () => {


  it('should increment the count by 1 when Increment button is clicked', () => {
    render(<CounterWithRef />);
    const incrementButton = screen.getByText(/Increment/i);

    fireEvent.click(incrementButton); // Simulate button click
    const counter = screen.getByText(/Counter: 1/i);
    expect(counter).toBeDefined(); // Verify new state is rendered
  });

  it('should update the previousCount ref correctly', () => {
    // Mock console.log using Jasmine's spy
    const consoleSpy = spyOn(console, 'log');

    render(<CounterWithRef />);
    const incrementButton = screen.getByText(/Increment/i);
    const showPreviousButton = screen.getByText(/Show Previous Count/i);

    fireEvent.click(incrementButton); // Increment once
    fireEvent.click(showPreviousButton); // Log previous count

    // Verify that the previous count was logged correctly
    expect(consoleSpy).toHaveBeenCalledWith('Previous Count: 0');
  });

  it('should maintain ref without causing a re-render', () => {
    const consoleSpy = spyOn(console, 'log'); // Spy on console.log

    render(<CounterWithRef />);
    const incrementButton = screen.getByText(/Increment/i);

    // Click increment button twice
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);

    const counter = screen.getByText(/Counter: 2/i);
    expect(counter).toBeDefined(); // Verify the updated count

    // Check that the previous count is 1
    const showPreviousButton = screen.getByText(/Show Previous Count/i);
    fireEvent.click(showPreviousButton);
    expect(consoleSpy).toHaveBeenCalledWith('Previous Count: 1');
  });

});
