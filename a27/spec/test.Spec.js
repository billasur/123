import React from 'react';
import { render, screen } from '@testing-library/react';
import ResultComponent from '../src/components/ResultComponent.jsx';
import { MemoryRouter } from 'react-router-dom';

describe('ResultComponent', () => {
  const mockLocationPass = {
    state: {
      score: 8,
      totalQuestions: 10,
      answeredQuestions: 9,
      correctAnswers: 8,
      wrongAnswers: 1,
    },
  };

  const mockLocationFail = {
    state: {
      score: 5,
      totalQuestions: 10,
      answeredQuestions: 9,
      correctAnswers: 5,
      wrongAnswers: 4,
    },
  };

  it('should render without crashing', () => {
    render(
      <MemoryRouter>
        <ResultComponent location={mockLocationPass} />
      </MemoryRouter>
    );

    // Check for essential elements that should be present if the component is properly implemented
    expect(screen.getByText('Result')).toBeTruthy();
    expect(screen.getByText(/Your score is 8/i)).toBeTruthy();
    expect(screen.getByText(/Total number of questions/i)).toBeTruthy();
    expect(screen.getByText('10')).toBeTruthy();
  });

  it('should display "Congratulations!" message when user passes', () => {
    render(
      <MemoryRouter>
        <ResultComponent location={mockLocationPass} />
      </MemoryRouter>
    );

    expect(
      screen.getByText(/Congratulations! You passed the quiz./i)
    ).toBeTruthy();
  });

  it('should display "You need more practice!" message when user fails', () => {
    render(
      <MemoryRouter>
        <ResultComponent location={mockLocationFail} />
      </MemoryRouter>
    );

    expect(screen.getByText(/You need more practice!/i)).toBeTruthy();
  });

  it('should display the correct quiz statistics', () => {
    render(
      <MemoryRouter>
        <ResultComponent location={mockLocationPass} />
      </MemoryRouter>
    );

    expect(screen.getByText('10')).toBeTruthy();
    expect(screen.getByText('9')).toBeTruthy();
    expect(screen.getByText('8')).toBeTruthy();
    expect(screen.getByText('1')).toBeTruthy();
  });

  it('should have functional navigation buttons', () => {
    render(
      <MemoryRouter>
        <ResultComponent location={mockLocationPass} />
      </MemoryRouter>
    );

    // Check for the "Play Again" button
    const playAgainLink = screen.getByRole('link', { name: /Play Again/i });
    expect(playAgainLink).toBeTruthy();
    expect(playAgainLink.getAttribute('href')).toBe('/play-quiz');

    // Check for the "Back to home" button
    const backToHomeLink = screen.getByRole('link', { name: /Back to home/i });
    expect(backToHomeLink).toBeTruthy();
    expect(backToHomeLink.getAttribute('href')).toBe('/');
  });
});
