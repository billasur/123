// Import necessary React hooks
import React, { useState, useRef } from 'react';

/**
 * Instructions:
 * 1. Create a state variable named count using the useState hook.
 *    - This will hold the current count value displayed on the screen.
 *
 * 2. Use the useRef hook to create a reference named previousCount.
 *    - This ref will store the previous count value without causing a re-render.
 *
 * 3. Implement the handleIncrement function:
 *    - Use the previousCount ref to store the current count value before incrementing.
 *    - Update the state variable count to increment by 1.
 *
 * 4. Implement the showPreviousCount function:
 *    - Log the value of previousCount.current to the console when the button is clicked.
 */

const CounterWithRef = () => {
  // Step 1: Create a state variable named count with an initial value of 0.
  const [count, setCount] = useState(0);

  // Step 2: Use the useRef hook to create a reference to store the previous count.(Use previousCount variable)
  const previousCount = useRef(0);

  // Step 3: Implement the handleIncrement function to update the ref and state.
  const handleIncrement = () => {
    previousCount.current = count;
    setCount(count + 1);
  };

  // Step 4: Implement the showPreviousCount function to log the previous count.
  const showPreviousCount = () => {
    console.log('Previous Count: ' + previousCount.current);
  };

  // UI with two buttons: Increment and Show Previous Count (Ref)
  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1>Counter: {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={showPreviousCount}>Show Previous Count (Ref)</button>
    </div>
  );
};

export default CounterWithRef;