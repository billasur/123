import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jasmine-dom';
import App from '../src/App.jsx';


describe('App Component', () => {

  it('should check if useCallback is implemented for testFunction', () => {
    spyOn(React, 'useCallback').and.callThrough();

    render(<App />);

    // Simulate button click to trigger testFunction
    const showListButton = screen.getByText('Show List');
    fireEvent.click(showListButton);

    expect(React.useCallback).toHaveBeenCalled();
  });

  it('should check if useMemo is implemented for delayFunction', () => {
    spyOn(React, 'useMemo').and.callThrough();

    render(<App />);

    // Simulate rendering to trigger delayFunction (which uses useMemo)
    const delayResult = screen.getByText('2');  // Expected value from delayFunction
    expect(delayResult).not.toBeNull();  // Verifying the delayFunction result
    expect(React.useMemo).toHaveBeenCalled();
  });

});