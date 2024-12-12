import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import axios from 'axios';
import reducer from '../src/Reducers.jsx';
import Counter from '../src/Counter.jsx';
import { fetchUserData, showError } from '../src/Actions.jsx';

describe('Counter Component', () => {
  let store;

  beforeEach(() => {
    store = configureStore({
      reducer,
      preloadedState: {
        users: [],
        error: '',
      },
    });
  });

  it('should fetch and display user data on button click', async () => {
    const mockData = [
      { id: 1, name: 'John Doe', email: 'john@example.com' },
      { id: 2, name: 'Jane Doe', email: 'jane@example.com' },
    ];

    spyOn(axios, 'get').and.returnValue(Promise.resolve({ data: mockData }));

    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );

    expect(screen.queryByText('John Doe')).toBeNull();
    expect(screen.queryByText('Jane Doe')).toBeNull();

    const button = screen.getByText('Fetch Data');
    fireEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText('John Doe')).toBeTruthy();
      expect(screen.getByText('john@example.com')).toBeTruthy();
      expect(screen.getByText('Jane Doe')).toBeTruthy();
      expect(screen.getByText('jane@example.com')).toBeTruthy();
    });

    expect(store.getState().users).toEqual(mockData);
  });

  it('should display error message on fetch failure', async () => {
    const mockError = 'Network Error';

    spyOn(axios, 'get').and.returnValue(Promise.reject(new Error(mockError)));

    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );

    const button = screen.getByText('Fetch Data');
    fireEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText(mockError)).toBeTruthy();
    });

    expect(store.getState().error).toEqual(mockError);
  });
});
