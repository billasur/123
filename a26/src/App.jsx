import React, { useState } from 'react';
import './App.css';

export default function App() {
  // State to store form data and submission state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);  // Trigger submission
    const isEmpty = Object.values(formData).some((field) => !field); // Check for empty fields
    if (!isEmpty) {
      setFormSuccess(true);  // If form is valid, show success message
    }
  };

  // Check if a specific field is empty
  const isFieldEmpty = (field) => submitted && !formData[field];

  return (
    <div className="form-container">
      <form className="register-form" onSubmit={handleSubmit}>
        {/* First Name Input */}
        <input
          id="first-name"
          className="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={(event) => setFormData({ ...formData, firstName: event.target.value })}
        />
        {isFieldEmpty('firstName') && <span>Please enter your first name</span>}

        {/* Last Name Input */}
        <input
          id="last-name"
          className="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={(event) => setFormData({ ...formData, lastName: event.target.value })}
        />
        {isFieldEmpty('lastName') && <span>Please enter your last name</span>}

        {/* Email Input */}
        <input
          id="email"
          className="form-field"
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={(event) => setFormData({ ...formData, email: event.target.value })}
        />
        {isFieldEmpty('email') && <span>Please enter your email</span>}

        {/* Phone Number Input */}
        <input
          id="phone-number"
          className="form-field"
          type="text"
          placeholder="Phone number"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={(event) => setFormData({ ...formData, phoneNumber: event.target.value })}
        />
        {isFieldEmpty('phoneNumber') && <span>Please enter your phone number</span>}

        {/* Submit Button */}
        <button className="form-field" type="submit">
          Register
        </button>

        {/* Success Message */}
        {formSuccess && <span>Registration succesfull!</span>}
      </form>
    </div>
  );
}