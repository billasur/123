# Project Overview

This project involves fetching data from an API and rendering a list of books. You will implement functionality to handle API errors and properly display the authors of each book using `<span>` elements. These tasks are essential to improve error handling and structure the rendering logic in a clean and scalable way.

## Tasks

In this project, you will complete two specific tasks:

1. **Task 1: Handle API Errors**
2. **Task 2: Display Authors Using `<span>` Elements**

---

## Task 1: Handle API Errors

### Objective:

You need to handle any potential errors that occur during the API call to fetch the books. When an error occurs, you should log the appropriate message to the console based on the status of the error (e.g., handle 404 errors differently from generic server errors).

### Steps:

- The current `App.js` file contains an API call using `axios.get()`. Your task is to enhance this call to properly handle various error cases.
- You will need to **log different messages** based on the type of error encountered (e.g., 404 for "Website not found" and other errors for general logging).

### Hints:

1. **Check the Error Response**: Ensure that you differentiate between error statuses. For example, when a 404 error occurs, log `"Website not found"`.
2. **Log Entire Error Object for Other Errors**: For non-404 errors, simply log the entire error object for debugging purposes.
3. **Request or Network Issues**: If the request was made but no response was received, handle it differently and log an appropriate message.

---

## Task 2: Display Authors Using `<span>` Elements

### Objective:

You will display the authors of each book in a clear and structured way by rendering each author within a `<span>` element. This ensures the authors are formatted correctly and are easy to style.

### Steps:

- In the current `App.js`, books are displayed with their titles and descriptions, but the authors are not formatted.
- Your task is to **render each author inside a `<span>` element** and display them under each book description using `Author One` for the first author, `Author Two` for the next and so on. An xample is provided below.
`<span key={index}>{author}`

### Hints:

1. **Check if Authors Exist**: Ensure that the `authors` array exists before attempting to render them.
2. **Loop Through the Authors**: Use the `.map()` function to loop through each author and render them inside a `<span>`.
3. **Assign Unique Keys**: When rendering multiple authors, ensure each `<span>` has a unique `key` for React to keep track of the elements.

---

## Testing Guidance

### API Error Handling Test:

You will need to write test cases that check whether the correct log messages are output when an error occurs during the API call. Here's what to focus on:

1. **404 Error Case**: Test that the message `"Website not found"` is logged when a 404 error occurs.
2. **Generic Error Case**: For generic errors (e.g., 500 or other server errors), ensure that the entire error object is logged to the console. Use `console.log` spies to verify this.

### Author Display Test:

Ensure that you test whether the authors are rendered inside `<span>` elements. Here’s how to approach it:

1. **Check the Element Type**: When testing, ensure that the authors are rendered as `<span>` elements by checking the tag name of each author.
2. **Test for Multiple Authors**: If a book has more than one author, ensure that each author is rendered in its own `<span>`, and the `key` prop is unique for each.

---

## Final Notes:

Once you've completed both tasks, ensure that your application works as expected. Test it by:

- Simulating different API error scenarios and verifying that the correct messages are logged.
- Verifying that the authors are displayed correctly under each book description inside `<span>` elements.
