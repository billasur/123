import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jasmine-dom';
import App from '../src/App.jsx';

describe('App component tests', () => {
  // Test 1: Check if the input field renders and updates when typing (Task 1.1 and Task 1.2 combined)
  it('should render the search input and update its value when typing', () => {
    render(<App />);
    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toBeTruthy();
    fireEvent.change(inputElement, { target: { value: 'Fr' } });
    expect(inputElement.value).toBe('Fr');
  });

  // Test 2: Check if suggestions dropdown renders and displays filtered data (Task 1.3)
  it('should show filtered suggestions based on the input value', () => {
    render(<App />);
    const inputElement = screen.getByRole('textbox');
    fireEvent.change(inputElement, { target: { value: 'Fr' } });
    const suggestionItems = screen.getAllByText(/Fr/i);
    expect(suggestionItems.length).toBeGreaterThan(0);
  });

  // Test 3: Check if clicking on a suggestion populates the input (Task 1.4)
  it('should populate the input with the clicked suggestion', () => {
    render(<App />);
    const inputElement = screen.getByRole('textbox');
    fireEvent.change(inputElement, { target: { value: 'Fr' } });
    const suggestionItem = screen.getByText('France');
    fireEvent.click(suggestionItem);
    expect(inputElement.value).toBe('France');
  });

  // Test 4: Hide suggestions on Escape key press (Task 2.1)
  it('should hide suggestions when the Escape key is pressed', () => {
    render(<App />);
    const inputElement = screen.getByRole('textbox');
    fireEvent.change(inputElement, { target: { value: 'Fr' } });
    const dropdown = document.getElementById('dropdown');
    expect(dropdown).toBeTruthy();
    fireEvent.keyDown(inputElement, { key: 'Escape', code: 'Escape' });
    expect(dropdown.style.display).toBe('none');
  });
  

  // Test 5: Ensure suggestions reappear when user resumes typing after pressing Escape (Task 2.2)
  it('should show suggestions again when typing after pressing Escape', () => {
    render(<App />);
    const inputElement = screen.getByRole('textbox');
    const dropdown = document.getElementById('dropdown');
    fireEvent.change(inputElement, { target: { value: 'Fr' } });
    fireEvent.keyDown(inputElement, { key: 'Escape', code: 'Escape' });
    expect(dropdown.style.display).toBe('none');
    fireEvent.change(inputElement, { target: { value: 'Fra' } });
    const suggestionItems = screen.getAllByText(/Fra/i);
    expect(suggestionItems.length).toBeGreaterThan(0);
  });
});
