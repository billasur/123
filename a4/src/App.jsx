import React, { useState } from 'react';

function App() {
  // State to hold the counter value
  const [counter, setCounter] = useState(0);

  // Function to increment the counter
  const increment = () => setCounter(counter + 1);

  // Function to decrement the counter
  const decrement = () => setCounter(counter - 1);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Simple Counter</h1>
      {/* Display the current counter value */}
      <p data-testid="counter-value" style={{ fontSize: '2rem' }}>{counter}</p>

      {/* Buttons to increment and decrement */}
      <button onClick={increment} style={{ fontSize: '1.5rem', marginRight: '10px' }}>+</button>
      <button onClick={decrement} style={{ fontSize: '1.5rem', marginLeft: '10px' }}>-</button>
    </div>
  );
}

export default App;
