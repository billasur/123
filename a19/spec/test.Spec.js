
import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jasmine-dom';
import useLocalStorage from '../src/useStorage.jsx';

// Test component to use the custom hook
function TestComponent({ key, initialValue }) {
  const [storedValue, setStoredValue] = useLocalStorage(key, initialValue);

  return (
    <div>
      <span data-testid="stored-value">{storedValue}</span>
      <button data-testid="update-value" onClick={() => setStoredValue('newValue')}>
        Update Value
      </button>
    </div>
  );
}

describe('useLocalStorage custom hook', () => {
  beforeEach(() => {
    localStorage.clear();
    sessionStorage.clear();
  });

  it('should return the initial value if both storages are empty', () => {
    const { getByTestId } = render(<TestComponent key="testKey" initialValue="initialValue" />);
    const storedValue = getByTestId('stored-value');
    expect(storedValue.textContent).toEqual('initialValue');
  });


});
