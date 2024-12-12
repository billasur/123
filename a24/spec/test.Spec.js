import { reducer, ACTIONS } from '../src/App.jsx';

describe('Calculator Reducer Functionality', () => {
  // Test 1: Deleting the last digit from the currentOperand
  it('should delete the last digit from currentOperand', () => {
    const state = { currentOperand: '123' };
    const action = { type: ACTIONS.DELETE_DIGIT };
    const result = reducer(state, action);
    expect(result.currentOperand).toBe('12');
  });

  // Test 2: Deleting when only one digit is present
  it('should set currentOperand to null if only one digit is present', () => {
    const state = { currentOperand: '5' };
    const action = { type: ACTIONS.DELETE_DIGIT };
    const result = reducer(state, action);
    expect(result.currentOperand).toBeNull();
  });

  // Test 3: Evaluating an addition operation
  it('should evaluate the expression for addition', () => {
    const state = {
      previousOperand: '4',
      currentOperand: '6',
      operation: '+',
    };
    const action = { type: ACTIONS.EVALUATE };
    const result = reducer(state, action);
    expect(result.currentOperand).toBe('10');
    expect(result.previousOperand).toBeNull();
    expect(result.operation).toBeNull();
  });

  // Test 4: Evaluating a multiplication operation
  it('should evaluate the expression for multiplication', () => {
    const state = {
      previousOperand: '3',
      currentOperand: '7',
      operation: '*',
    };
    const action = { type: ACTIONS.EVALUATE };
    const result = reducer(state, action);
    expect(result.currentOperand).toBe('21');
    expect(result.previousOperand).toBeNull();
    expect(result.operation).toBeNull();
  });

  // Test 5: Prevent evaluation when operands or operation are missing
  it('should evaluate correctly when operands and operation are present, and should fail when the functionality is missing', () => {
    const action = { type: ACTIONS.EVALUATE };

    // Case 1: Valid operands and operation - This should force a failure if evaluation is not implemented
    const state1 = {
      previousOperand: '4',
      currentOperand: '3',
      operation: '+',
    };
    const result1 = reducer(state1, action);
    expect(result1.currentOperand).not.toBe('3');
    expect(result1.currentOperand).toBe('7');

    // Case 2: Missing previousOperand (should not evaluate)
    const state2 = {
      previousOperand: null,
      currentOperand: '7',
      operation: '+',
    };
    const result2 = reducer(state2, action);
    expect(result2.currentOperand).toBe('7');
    expect(result2.operation).toBe('+');

    // Case 3: Missing currentOperand (should not evaluate)
    const state3 = {
      previousOperand: '7',
      currentOperand: null,
      operation: '+',
    };
    const result3 = reducer(state3, action);
    expect(result3.previousOperand).toBe('7');
    expect(result3.operation).toBe('+');

    // Case 4: Missing operation (should not evaluate)
    const state4 = {
      previousOperand: '7',
      currentOperand: '3',
      operation: null,
    };
    const result4 = reducer(state4, action);
    expect(result4.currentOperand).toBe('3');
    expect(result4.previousOperand).toBe('7');
  });
});
