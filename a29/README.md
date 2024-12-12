# Project Overview

This project involves fetching data from an API and rendering a list of books. You will implement functionality to retrieve the data and properly display the books (including their title, thumbnail, description, and authors) in the UI.

## Tasks

In this project, you will complete two specific tasks:

1. **Task 1: Fetch Data Using Axios**
2. **Task 2: Render the Books Data in the UI**

---

## Task 1: Fetch Data Using Axios

### Objective:

You need to write an API call using Axios to fetch a list of books and store that data in the component's state.

### Steps:

- You will have to use **Axios** to make a GET request to an API that returns a list of books.
- Store the retrieved data in the `data` state using the `useState` hook.
- Place the API call inside the `useEffect` hook to fetch the data when the component first loads.

### Hints:

1. **API Endpoint**: Use the provided API URL to make the request.
2. **Error Handling**: There's already an error handling block in place (in the `.catch()` part of the Axios call), make sure you uncomment it and leave the existing functionality as it is.
3. **State Management**: After fetching the data, update the `data` state using the `setData` function so the UI can be updated with the fetched book information.

---

## Task 2: Render the Books Data in the UI

### Objective:

You will display the fetched book information (title, thumbnail, description, and authors) in a clean and structured way.

### Steps:

- For each book, display its **title** as an `<h4>` element.
- Render the **thumbnail** of the book inside an `<img>` element.
- Show the **description** of the book inside a `<p>` element.
- Display the **authors** of the book as a list of `<span>` elements.

### Hints:

1. **Use JSX for Rendering**: Use JSX to render the book details within the component's return statement.
2. **Handle Missing Data**: Some fields might be missing in the API response (e.g., `imageLinks`). Use optional chaining (e.g., `item.imageLinks?.smallThumbnail`) to avoid breaking the application if a field is missing.
3. **Unique Keys**: When rendering multiple authors, use a unique `key` for each `<span>` element to prevent warnings in React.

---

## Testing

### Testing the Component

Make sure that your component works as expected by:

1. Verifying that the data is fetched from the API correctly and stored in state( dont' forget to insatll the package axios and import it if you using axios).
2. Ensuring that the UI correctly renders the book title, thumbnail, description, and authors.
3. Checking for console errors related to missing data or broken rendering.

### How to Test Your Application

Run the test cases provided in the `spec` folder. These tests will check that:

1. The data is fetched and rendered correctly.
2. The authors are rendered inside `<span>` elements.
3. All titles, thumbnails, and descriptions are displayed in the UI as expected.
