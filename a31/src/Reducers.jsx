import { INCREMENT, DECREMENT } from './Actions';

const initialState = {
  // TASK 1.1: st count  to 0
  count:0,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
    // TASK 1.2: Increase count by 1
    return {
      ...state,
      count: state.count + 1, 
    };
    // TASK 1.2: Decrease count by 1, but ensure count doesn’t go below 0
    case 'DECREMENT':
      return {
        ...state,
        count: state.count > 0 ? state.count - 1 : 0,
      };

    default:
      return state;
  }
}