const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

// TASK 2.1: Implement an action creator that returns { type: INCREMENT }

// TASK 2.2: Implement an action creator that returns { type: DECREMENT }

// TASK: Export both action creators after implementation.
export const incrementNumber = () => ({
  type: INCREMENT,
});

export const decrementNumber = () => ({
  type: DECREMENT,
});

export { INCREMENT, DECREMENT };
