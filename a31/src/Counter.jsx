import React, { useEffect, useState } from 'react';
import { configureStore } from '@reduxjs/toolkit';
import reducer from './Reducers';
import { incrementNumber, decrementNumber } from './Actions';

const store = configureStore({ reducer });

export default function Counter() {
  const [count, setCounter] = useState(0);

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setCounter(store.getState().count);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div>
      <h3>{count}</h3>
      <button onClick={() => store.dispatch(incrementNumber())}>Like</button>
      <button onClick={() => store.dispatch(decrementNumber())}>Unlike</button>
    </div>
  );
}
