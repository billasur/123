import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../src/App.jsx';

describe('QuizComponent navigation tests', () => {

  it('should load the previous question when "Previous" button is clicked', () => {
    render(<App />);

    // Move to the second question by clicking "Next" once
    const nextButton = screen.getByText(/next/i);
    fireEvent.click(nextButton);

    // Verify that the second question is loaded
    const secondQuestion = screen.getByText(/Who wrote Julius Caesar, Macbeth and Hamlet?/i);
    expect(secondQuestion).not.toBeNull();

    // Click the "Previous" button to load the first question again
    const prevButton = screen.getByText(/previous/i);
    fireEvent.click(prevButton);

    // Check that the first question is loaded again
    const firstQuestion = screen.getByText(/What temperature does water boil at?/i);
    expect(firstQuestion).not.toBeNull();

    // Ensure that the second question is no longer visible
    expect(screen.queryByText(/Who wrote Julius Caesar, Macbeth and Hamlet?/i)).toBeNull();
  });


});
