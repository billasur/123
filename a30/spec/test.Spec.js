import axios from 'axios';
import { render, screen, cleanup, waitFor } from '@testing-library/react';
import App from '../src/App.jsx';
import { act } from 'react-dom/test-utils';

afterEach(() => {
  cleanup();
  jasmine.DEFAULT_TIMEOUT_INTERVAL = 5000;
});

describe('App Component', function () {
  it('should  display book data successfully', async function () {
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

    spyOn(axios, 'get').and.returnValue(Promise.resolve(mockedBooks));

    await act(async () => {
      render(<App />);
    });

    await waitFor(() => {
      expect(screen.getByText('Book One')).toBeTruthy();
      expect(screen.getByText('Book Two')).toBeTruthy();
    });

    expect(screen.getByText('This is the first book.')).toBeTruthy();
    expect(screen.getByText('This is the second book.')).toBeTruthy();

    const authorOne = screen.getByText('Author One');
    expect(authorOne.tagName).toBe('SPAN');

    const authorTwo = screen.getByText('Author Two');
    expect(authorTwo.tagName).toBe('SPAN');

    const authorThree = screen.getByText('Author Three');
    expect(authorThree.tagName).toBe('SPAN');
  });

  it('should handle 404 error from API', async function () {
    const consoleSpy = spyOn(console, 'log');

    const errorResponse = {
      response: {
        status: 404,
      },
    };

    spyOn(axios, 'get').and.returnValue(Promise.reject(errorResponse));

    await act(async () => {
      render(<App />);
    });

    expect(consoleSpy).toHaveBeenCalledWith('Website not found');
  });

  it('should handle generic error from API', async function () {
    const consoleSpy = spyOn(console, 'log');

    const errorResponse = {
      response: {
        status: 500,
        data: 'Server Error',
      },
    };

    spyOn(axios, 'get').and.returnValue(Promise.reject(errorResponse));

    await act(async () => {
      render(<App />);
    });

    expect(consoleSpy).toHaveBeenCalledWith(errorResponse);
  });
});
