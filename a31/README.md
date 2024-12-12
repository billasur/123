# Redux Reducer and Action Assignment

## Overview

In this assignment, you will implement the **action creators** and the **reducer** required for a simple counter component using **Redux**. You are provided with the constant action types, and your task is to write the action creators and reducer logic that will update the counter state.

---

## Task 1: Actions (Actions.js)

In this file, you will create two action creators: one for incrementing the counter and one for decrementing the counter.

### Task 1.1: Define `incrementNumber` Action Creator

- Create an action creator called `incrementNumber`.
- This function should return an action object with the type `'INCREMENT'`.

### Task 1.2: Define `decrementNumber` Action Creator

- Create an action creator called `decrementNumber`.
- This function should return an action object with the type `'DECREMENT'`.

### Final Step

- Once you've implemented both action creators, **export** them.

---

## Task 2: Reducer (Reducers.js)

In this file, you will create the reducer function that will handle the actions defined in **Task 1**.

### Task 2.1: Define Initial State

- Create an initial state object that has a `count` property set to `0`.

### Task 2.2: Handle Actions in the Reducer

- In the reducer, handle the following actions:
  - `INCREMENT`: Increase the `count` by 1.
  - `DECREMENT`: Decrease the `count` by 1, but ensure that the `count` cannot go below 0.

---

## Final Notes

- Make sure your reducer handles the logic to **prevent the counter from going below 0**.
- Ensure both action creators (`incrementNumber` and `decrementNumber`) are correctly wired into the reducer.

Good luck! 🎉
