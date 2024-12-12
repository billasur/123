import { useEffect, useState } from 'react';

function saveValue(key, initialValue) {
  // TODO: Retrieve the value from localStorage and sessionStorage.
  // You need to fetch the value from either localStorage or sessionStorage.
  // If a value is stored, return it. Otherwise, return the initialValue.
 
  const storedValue = localStorage.getItem(key) || sessionStorage.getItem(key);
  if (storedValue !== null) {
    return storedValue;
  }
  return initialValue;

  // If no value exists in localStorage or sessionStorage, return the initialValue.
 
}

export default function useLocalStorage(key, initialValue) {
  // State initialization. Students should understand how to use useState with lazy initialization.

    // TODO: Initialize the content state by calling the saveValue function.

    // TODO: Whenever the content state or the key changes, save the updated content to both localStorage and sessionStorage.
    const [content, setContent] = useState(() => saveValue(key, initialValue));

    useEffect(() => {
      if (content !== undefined) {
        localStorage.setItem(key, content);
        sessionStorage.setItem(key, content);
      }
    }, [content, key]);
  
    return [content, setContent];

  // Return the content state and the setContent function so it can be updated later.
}