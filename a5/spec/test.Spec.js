import React from 'react';
import { render, screen, fireEvent,within } from '@testing-library/react';
import '@testing-library/jasmine-dom';
import HigherOrderComponent from '../src/components/HigherOrderComponent.jsx';

describe('HigherOrderComponent', () => {
 
  it('should render all user data items and display only users with a specific user type', () => {
    // Arrange
    render(<HigherOrderComponent />);
    const listItems = screen.getAllByRole('listitem');
    console.log(`Number of items found: ${listItems.length}`); // Debugging output
    expect(listItems.length).toBeGreaterThan(0); 
    // Assert
    const designerItems = screen.getAllByText(/User Type: Designer/i);
    expect(designerItems.length).toBeGreaterThan(0); // Ensure that at least one designer is displayed
  });
  it('should filter and display only users with names starting with the letter J', () => {
    // Arrange
    render(<HigherOrderComponent />);
  
    // Act
    const letterJButton = screen.getAllByText(/Filter all data starting with letter J/i);
   expect(letterJButton.length).toBeGreaterThan(0);
  });
  it('should filter and display only users with age greater than 28 and less than or equal to 50', () => {
    // Arrange
    render(<HigherOrderComponent />);

    // Act
    const ageFilterButton = screen.getAllByText(/Filter all data based on age/i);
    expect(ageFilterButton.length).toBeGreaterThan(0);
  });
  });
