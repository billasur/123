import axios from 'axios';
import { render, screen, cleanup, waitFor } from '@testing-library/react';
import App from '../src/App.jsx';

// Clean up after each test case
afterEach(() => {
  cleanup();
  jasmine.DEFAULT_TIMEOUT_INTERVAL = 5000;
});

describe('App Component', function () {
  it('should fetch and display book data successfully', async function () {
    // Mocked response data
    const mockedBooks = {
      data: {
        books: [
          {
            id: '1',
            title: 'Book One',
            description: 'This is the first book.',
            authors: ['Author One'],
            imageLinks: { smallThumbnail: 'https://example.com/image1.jpg' },
          },
          {
            id: '2',
            title: 'Book Two',
            description: 'This is the second book.',
            authors: ['Author Two', 'Author Three'],
            imageLinks: { smallThumbnail: 'https://example.com/image2.jpg' },
          },
        ],
      },
    };

    // Spy on axios.get and mock resolved response
    spyOn(axios, 'get').and.returnValue(Promise.resolve(mockedBooks));

    // Render component and wait for data to load
    render(<App />);

    // Verify if the books and their details are rendered correctly
    await waitFor(() => {
      expect(screen.getByText('Book One')).toBeTruthy();
      expect(screen.getByText('Book Two')).toBeTruthy();
    });

    // Check the descriptions
    expect(screen.getByText('This is the first book.')).toBeTruthy();
    expect(screen.getByText('This is the second book.')).toBeTruthy();

    // Check if authors are displayed inside <span> elements
    const authorOne = screen.getByText('Author One');
    expect(authorOne.tagName).toBe('SPAN');

    const authorTwo = screen.getByText('Author Two');
    expect(authorTwo.tagName).toBe('SPAN');

    const authorThree = screen.getByText('Author Three');
    expect(authorThree.tagName).toBe('SPAN');
  });
});
