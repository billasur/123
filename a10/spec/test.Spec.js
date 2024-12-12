import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../src/App.jsx';

describe('QuizComponent navigation tests', () => {

  it('should load the next question when "Next" button is clicked', () => {
    render(<App />);

    // Find the initial question text
    const initialQuestion = screen.getByText(/What temperature does water boil at?/i);
    expect(initialQuestion).not.toBeNull();

    // Click the "Next" button to load the next question
    const nextButton = screen.getByText(/next/i);
    fireEvent.click(nextButton);

    // Check that the next question is loaded
    const nextQuestion = screen.getByText(/Who wrote Julius Caesar, Macbeth and Hamlet?/i);
    expect(nextQuestion).not.toBeNull();

    // Ensure that the initial question is no longer visible
    expect(screen.queryByText(/What temperature does water boil at?/i)).toBeNull();
  });
});
