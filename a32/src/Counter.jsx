import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import reducer from './Reducers';
import { Provider, useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { fetchUserData, showError } from './Actions';

const store = configureStore({
  reducer,
});

// TASK 1: Implement the fetchData thunk
// This thunk should fetch user data from the API: 'https://jsonplaceholder.typicode.com/users'
// - If successful, it should dispatch the fetchUserData action with the data as payload
// - If it fails, it should dispatch the showError action with the error message
function fetchData() {
  // You need to implement this function as a Redux Thunk
  return async function (dispatch) {
    
    axios.get('https://jsonplaceholder.typicode.com/users').then((res)=>{
        dispatch(fetchUserData(res.data))
    }).catch((err)=>{
        dispatch(showError(err.message))
    })
    // TASK: Use axios to fetch data from the API and dispatch appropriate actions
  };
}

export default function Counter() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.users || []);
  const error = useSelector((state) => state.error);
  
  return (
    <div>
      {/* TASK 2.1: Display error message if it exists */}
        {error && <p>{error}</p>}
      {/* TASK 2.2: Display the list of users , use map function */}
        {data?.map((e)=>{
          return <div key={e.id}>
            <h1>{e.name}</h1>
            <h2>{e.email}</h2>
          </div>
        })}
      <button onClick={() => dispatch(fetchData())}>Fetch Data</button>
    </div>
  );
}

export function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}