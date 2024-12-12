import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import './App.css';

export default function App() {
  // Use useForm to manage form state and validation
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [field, setField] = useState();
  const [submitted, setSubmit] = useState(false);

  // Form submission handler
  const onSubmit = (data) => {
    setField(data);
    setSubmit(true);
  };

  // Reset 'submitted' state after 2 seconds to allow re-submission
  useEffect(() => {
    if (submitted) {
      setTimeout(() => {
        setSubmit(false);
        reset(); // Reset the form
      }, 2000);
    }
  }, [submitted, reset]);

  return (
    <div className="form-container">
      {/* Display success message after form submission */}
      {submitted && (
        <div className="success-message" data-testid="success-message">
          Registration successful!
        </div>
      )}

      {/* Form with handleSubmit that runs onSubmit after validation */}
      <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
        {/* First Name Input */}
        <input
          id="first-name"
          className="form-field"
          type="text"
          placeholder="First Name"
          {...register('firstName', { required: 'First Name is required!' })}
        />
        {/* Display error message if the first name is not entered */}
        <span>{errors.firstName?.message}</span>

        {/* Last Name Input */}
        <input
          id="last-name"
          className="form-field"
          type="text"
          placeholder="Last Name"
          {...register('lastName', { required: 'Last Name is required!' })}
        />
        {/* Display error message if the last name is not entered */}
        <span>{errors.lastName?.message}</span>

        {/* Email Input */}
        <input
          id="email"
          className="form-field"
          type="email"
          placeholder="Email"
          {...register('email', {
            required: 'Email is required!',
            pattern: {
              value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
              message: 'Invalid email address',
            },
          })}
        />
        {/* Display error message if the email is not valid */}
        <span>{errors.email?.message}</span>

        {/* Password Input */}
        <input
          id="password"
          className="form-field"
          type="password"
          placeholder="Password"
          {...register('password', {
            required: 'Password is required!',
            minLength: {
              value: 4,
              message: 'Password must be more than 4 characters',
            },
            maxLength: {
              value: 20,
              message: 'Password cannot exceed 20 characters',
            },
            pattern: {
              value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{4,20}$/,
              message: 'Password must contain at least one uppercase letter, one lowercase letter, and one number',
            },
          })}
        />
        {/* Display error message if the password is invalid */}
        <span>{errors.password?.message}</span>

        {/* Submit Button */}
        <button className="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
