import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import LikeImage from '../src/components/LikeImage.jsx';
import LikePost from '../src/components/LikePost.jsx';
import '@testing-library/jasmine-dom';

describe('Test Case 1: LikeImage Component for HOC', () => {
  it('Test case 1: should display the initial like count as 0', () => {
    const { getByText } = render(<LikeImage />);
    const likeButton = getByText(/Like Image/i);
    expect(likeButton.textContent.includes('Like Image 0')).toBeTruthy();
  });

  it('Test Case 2: should increment like count when the button is clicked for HOC', () => {
    const { getByText } = render(<LikeImage />);
    const likeButton = getByText(/Like Image/i);
    fireEvent.click(likeButton);
    expect(likeButton.textContent.includes('Like Image 1')).toBeTruthy();
  });
});

describe('Test Case 3: LikePost Component for HOC', () => {
  it('Test case 3: should display the initial like count as 0', () => {
    const { getByText } = render(<LikePost />);
    const likeButton = getByText(/Like Post/i);
    expect(likeButton.textContent.includes('Like Post 0')).toBeTruthy();
  });

  it('Test Case 4: should increment like count when the button is clicked for HOC', () => {
    const { getByText } = render(<LikePost />);
    const likeButton = getByText(/Like Post/i);
    fireEvent.click(likeButton);
    expect(likeButton.textContent.includes('Like Post 1')).toBeTruthy();
  });
});
