# ResultComponent Task Details

## Overview

The `ResultComponent` is a React functional component designed to display the results of a quiz. It shows the user's score, quiz statistics, and provides navigation options to retake the quiz or return home.

Your task is to complete the `ResultComponent` by implementing the following functionalities as per the tasks outlined.

---

## Tasks

### **Task 1: Access the Location State**

- **Objective**: Use the `useLocation` hook from `react-router-dom` to access the `location` state.
- **Additional Requirement**: Also access `props.location` because, during testing, the `location` prop is passed directly as `props.location`.
- **Instructions**:
  - Import `useLocation` from `react-router-dom` if not already imported.
  - Declare a `location` variable that uses `props.location` if available; otherwise, it should use `useLocation()`.
  - This ensures the component works both in normal execution and when running tests.

### **Task 2: Extract Data from the Location State**

- **Objective**: Extract the necessary quiz data from the `location.state`.
- **Data to Extract**:
  - `score`
  - `totalQuestions`
  - `answeredQuestions`
  - `correctAnswers`
  - `wrongAnswers`
- **Instructions**:
  - Use object destructuring to extract the above properties from `location.state`.
  - Ensure that `location.state` exists before attempting to destructure to avoid runtime errors.

### **Task 3: Handle Null or Undefined Values**

- **Objective**: Safely handle cases where the required data might be `null` or `undefined`.
- **Instructions**:
  - Check if any of the extracted variables (`score`, `totalQuestions`, etc.) are `undefined`.
  - If any values are missing:
    - Decide how to handle this scenario. Options include:
      - Displaying an error message or a default message.
      - Redirecting the user back to the quiz or home page.
      - Rendering a fallback UI.
  - Implement the chosen method to handle missing data gracefully.

### **Task 4: Calculate Passing Score and Determine Message**

- **Objective**: Calculate whether the user has passed the quiz and display an appropriate message.
- **Instructions**:
  - Calculate the passing score threshold (e.g., 70% of `totalQuestions`).
    - Example:
      ```javascript
      const passingScore = totalQuestions * 0.7;
      ```
  - Determine the message to display based on the user's `score`:
    - If `score` is greater than or equal to `passingScore`, set `message` to `"Congratulations! You passed the quiz."`
    - Otherwise, set `message` to `"You need more practice!"`
  - Store the message in a variable and display it in the JSX.

### **Task 5: Display the Results in the JSX**

- **Objective**: Insert the extracted data and calculated message into the JSX to display the results.
- **Instructions**:
  - Replace the placeholders in the JSX with the actual variables:
    - Insert the `message` variable within the `<h3>` tag.
    - Display the `score` in the `<h1>` tag with class `"score"`.
    - Populate the quiz statistics (`totalQuestions`, `answeredQuestions`, `correctAnswers`, `wrongAnswers`) in the corresponding `<h5>` tags.
  - Ensure all data is displayed accurately and is properly formatted.

---

## Additional Notes

- **Styling**:

  - The component uses CSS classes like `"result"`, `"score-section"`, `"flex"`, `"details"`, `"number"`, and buttons with classes `"play"` and `"home-result"`.
  - Ensure that the associated CSS file (`ResultComponent.css`) contains the necessary styles.

- **Navigation Buttons**:

  - The "Play Again" button should navigate the user back to the quiz page (`"/play-quiz"`).
  - The "Back to home" button should navigate the user to the home page (`"/"`).

- **Testing**:

  - The component should be testable using testing frameworks.
  - Remember to handle `props.location` in addition to `useLocation()` to facilitate testing.

- **Error Handling**:
  - Be mindful of potential errors if `location.state` is missing or incomplete.
  - Implement error handling to enhance the user experience.

---

## Example Usage

After completing the tasks, the component should be able to:

- Display a personalized message based on the user's performance.
- Show detailed quiz statistics.
- Provide options to retake the quiz or return home.

---

## Submission

Ensure your completed `ResultComponent`:

- Implements all the tasks as specified.
- Is free of runtime errors.
- Is styled appropriately according to the provided CSS classes.
- Passes all the provided test cases (if any).

Good luck!
