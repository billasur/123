# Registration Form Assignment

This project provides a basic registration form using React. The form includes fields for `First Name`, `Last Name`, `Email`, and `Phone Number`. Your task is to complete the functionality by implementing state management and form validation.

## Tasks Overview

### Task 1: Define State Variables

- **Objective**: Use React's `useState` hook to store the values for each input field (`firstName`, `lastName`, `email`, and `phoneNumber`), as well as a state to track form submission.
- **Instructions**: Inside the `App` function, define `useState` variables for each form field. The state should also include a submission state to manage form validation.

### Task 2: Add `value` and `onChange` Handlers

- **Objective**: Ensure that each input field correctly handles its state by using `value` and `onChange` properties.
- **Instructions**:
  - Add the `value` property to each input to bind it to the respective state.
  - Use the `onChange` event to update the state when the user types into the input fields.

### Task 3: Add Form Submit Handler

- **Objective**: Implement a form submission handler that validates whether all fields are filled and prevents the default form behavior.
- **Instructions**:
  - Add an `onSubmit` handler to the form.
  - Use `e.preventDefault()` to prevent the default behavior.
  - Validate that all fields are filled before proceeding with form submission.

### Task 4: Display Validation and Success Messages

- **Objective**: Show error messages for any empty fields and a success message when the form is successfully submitted.
- **Instructions**:
  - Conditionally display error messages for empty fields.
  - Display a success message when all fields are correctly filled and the form is submitted.
