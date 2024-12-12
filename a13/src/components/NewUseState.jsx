import React, { useState } from 'react';
import { useEffect } from 'react';

function NewUseState(props) {
  // Complete the functions Headers
  // You will have to initialise the useState hook for like and State
  // You will have to create a Use effect Hook for content
  // Add the event handlers functions handleState and handleLike
  const [state, setState] = useState('');
  const [like, setLike] = useState(0);

  const handleState = () => {
    if (state === '') {
      setState(props.para);
    } else {
      setState('');
    }
  };
  const handleLike = () => {
    setLike(like + 1);
  };
  useEffect(() => {
    console.log('State has been updated:', state);
  }, [state]);

  useEffect(() => {
    console.log('Like count has been updated:', like);
  }, [like]);

  return (
    <div>
      <h3>{state}</h3>
      <button onClick={handleState}>Content</button>
      <h4>{like}</h4>
      <button onClick={handleLike}>Like</button>
    </div>
  );
}

export default NewUseState;