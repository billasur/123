import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import FoodBox from '../src/components/FoodBox.jsx';

describe('FoodBox component tests', () => {
 
  it('should calculate and display the correct total calories', () => {
    const food = { id: 1, name: 'Pizza', cal: 400, img: 'https://i.imgur.com/eTmWoAN.png' };
    render(<FoodBox food={food} />);

    // Simulate entering a value in the input
    const inputElement = screen.getByPlaceholderText(/Enter a number here/i);
    fireEvent.change(inputElement, { target: { value: '2' } });

    // Simulate clicking the "+" button
    const addButton = screen.getByText('+');
    fireEvent.click(addButton);

    // Check that the total calories are updated correctly
    const totalCaloriesElement = screen.getAllByText('800', { exact: false });

    // Ensure the element with correct total calories is rendered
    expect(totalCaloriesElement).not.toBeNull();
  });
});
