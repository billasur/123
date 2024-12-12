import React from 'react';
import {
  render,
  fireEvent,
  screen,
  waitFor,
  cleanup,
} from '@testing-library/react';
import '@testing-library/dom';
import Counter from '../src/Counter.jsx';

describe('Counter Component', () => {
  afterEach(() => {
    cleanup();
  });

  it('should increment the counter when "Like" button is clicked', async () => {
    render(<Counter />);
    const likeButton = screen.getByText('Like');
    fireEvent.click(likeButton);
    await waitFor(() => expect(screen.getByText('1')).toBeTruthy());
  });

  it('should decrement the counter when "Unlike" button is clicked', () => {
    render(<Counter />);
    const likeButton = screen.getByText('Like');
    fireEvent.click(likeButton);
    expect(screen.getByText('1')).toBeTruthy();
    const unlikeButton = screen.getByText('Unlike');
    fireEvent.click(unlikeButton);
    expect(screen.getByText('0')).toBeTruthy();
  });

  it('should not decrement below 0 when "Unlike" button is clicked', async () => {
    render(<Counter />);
    const unlikeButton = screen.getByText('Unlike');
    fireEvent.click(unlikeButton);
    await waitFor(() => expect(screen.getByText('0')).toBeTruthy());
  });
});
