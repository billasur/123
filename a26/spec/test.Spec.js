import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import App from '../src/App.jsx';

describe('App Component', () => {
  // Task 1: Test if the form renders properly with all input fields and the submit button
  it('should render the form with input fields and register button', () => {
    render(<App />);
    expect(screen.getByPlaceholderText('First Name')).toBeTruthy();
    expect(screen.getByPlaceholderText('Last Name')).toBeTruthy();
    expect(screen.getByPlaceholderText('Email')).toBeTruthy();
    expect(screen.getByPlaceholderText('Phone number')).toBeTruthy();
    expect(screen.getByText('Register')).toBeTruthy();
  });

  // Task 2: Test input changes update state correctly
  it('should update state on typing in the input fields', () => {
    render(<App />);
    const firstNameInput = screen.getByPlaceholderText('First Name');
    fireEvent.change(firstNameInput, { target: { value: 'John' } });
    expect(firstNameInput.value).toBe('John');
  });

  // Task 3: Test that form shows validation error if fields are empty after submission
  it('should show error messages if fields are left empty upon submission', async () => {
    // Render the App component
    render(<App />);

    // Ensure the register button exists
    const registerButton = screen.getByText('Register');
    expect(registerButton).toBeTruthy();

    // Simulate clicking the "Register" button
    fireEvent.click(registerButton);

    // Use `waitFor` to wait for the error messages to appear in the DOM
    await waitFor(() => {
      expect(screen.getByText('Please enter your first name')).toBeTruthy();
      expect(screen.getByText('Please enter your last name')).toBeTruthy();
      expect(screen.getByText('Please enter your email')).toBeTruthy();
      expect(screen.getByText('Please enter your phone number')).toBeTruthy();
    });
  });

  // Task 4: Test that form displays success message on successful submission
  it('should display a success message when all fields are filled and form is submitted', async () => {
    render(<App />);

    fireEvent.change(screen.getByPlaceholderText('First Name'), {
      target: { value: 'John' },
    });
    fireEvent.change(screen.getByPlaceholderText('Last Name'), {
      target: { value: 'Doe' },
    });
    fireEvent.change(screen.getByPlaceholderText('Email'), {
      target: { value: 'john@example.com' },
    });
    fireEvent.change(screen.getByPlaceholderText('Phone number'), {
      target: { value: '1234567890' },
    });

    fireEvent.click(screen.getByText('Register'));

    // Use async `findByText` for success message
    expect(await screen.findByText('Registration succesfull!')).toBeTruthy();
  });

  // Task 5: Test if the validation is not triggered after successful submission
  it('should not show error messages if fields are filled correctly after submission', async () => {
    render(<App />);

    fireEvent.change(screen.getByPlaceholderText('First Name'), {
      target: { value: 'Anmol' },
    });
    fireEvent.change(screen.getByPlaceholderText('Last Name'), {
      target: { value: 'Agrawal' },
    });
    fireEvent.change(screen.getByPlaceholderText('Email'), {
      target: { value: 'anmol.agrawal@kalvium.com' },
    });
    fireEvent.change(screen.getByPlaceholderText('Phone number'), {
      target: { value: '1234567890' },
    });

    fireEvent.click(screen.getByText('Register'));

    // Check that the validation errors are not displayed
    await waitFor(() => {
      expect(screen.queryByText('Please enter your first name')).toBeNull();
      expect(screen.queryByText('Please enter your last name')).toBeNull();
      expect(screen.queryByText('Please enter your email')).toBeNull();
      expect(screen.queryByText('Please enter your phone number')).toBeNull();
    });
  });
});
