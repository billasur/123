## Objective:
The goal of this assignment is to build a simple React counter application using the useRef hook to store a value that persists across renders without causing re-renders. Students are required to manage both a render-tracked state and a non-render-tracked ref value.

## Task Description:
You are asked to build a counter application with the following features:

- A count displayed on the screen.
- Two buttons:
- Increment: Increases the count.
- Show Previous Count (Ref): Shows the count from the previous render using useRef (without triggering a re-render).
- Every time the Increment button is clicked, update the count and store the current count in a ref for future reference.

## Requirements:
- Use the useRef hook to store the previous count value.
- The previous count should update on each increment but should not cause a re-render when the ref value changes.
- Use state for the current count so the UI updates on each increment.

## Expected Behaviour:
- On clicking the Increment button:
- The count value shown on the screen increases.
- The useRef value gets updated with the old count before the state change.
- On clicking the Show Previous Count (Ref) button:
- Display the previous count value as a console.log.
