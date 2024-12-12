import { useReducer } from 'react';
import Buttons from './components/Buttons.jsx';
import Operations from './components/Operations.jsx';
import './App.css';

export const ACTIONS = {
  ADD_DIGIT: 'add-digit',
  CHOOSE_OPERATION: 'choose-operation',
  CLEAR: 'clear',
  EVALUATE: 'evaluate',
  DELETE_DIGIT: 'delete-digit',
};

// Reducer function
function reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      // Prevent multiple leading zeros
      if (payload.digit === "0" && state.currentOperand === "0") {
        return state;
      }
      // Prevent multiple decimal points
      if (payload.digit === "." && state.currentOperand?.includes(".")) {
        return state;
      }
      // Append the digit to currentOperand
      return {
        ...state,
        currentOperand: `${state.currentOperand || ""}${payload.digit}`,
      };

    case ACTIONS.CHOOSE_OPERATION:
      // Ignore operation if there is no current operand
      if (state.currentOperand == null) return state;

      // If there is no previous operand, move currentOperand to previousOperand
      if (state.previousOperand == null) {
        return {
          ...state,
          operation: payload.operation,
          previousOperand: state.currentOperand,
          currentOperand: null,
        };
      }

      // Perform computation if both operands exist
      return {
        ...state,
        previousOperand: evaluate(state),
        operation: payload.operation,
        currentOperand: null,
      };

    case ACTIONS.CLEAR:
      // Reset the calculator state
      return {};

    case ACTIONS.DELETE_DIGIT:
      // If there is no currentOperand, do nothing
      if (state.currentOperand == null) return state;

      // Remove the last digit of currentOperand
      return {
        ...state,
        currentOperand: state.currentOperand.slice(0, -1),
      };

    case ACTIONS.EVALUATE:
      // Perform evaluation only if all operands and operation exist
      if (
        state.operation == null ||
        state.currentOperand == null ||
        state.previousOperand == null
      ) {
        return state;
      }

      return {
        ...state,
        overwrite: true,
        previousOperand: null,
        operation: null,
        currentOperand: evaluate(state),
      };

    default:
      return state;
  }
}

// Helper function to evaluate an expression
function evaluate({ currentOperand, previousOperand, operation }) {
  const prev = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);
  if (isNaN(prev) || isNaN(current)) return '';
  let computation = '';
  switch (operation) {
    case '+':
      computation = prev + current;
      break;
    case '-':
      computation = prev - current;
      break;
    case '*':
      computation = prev * current;
      break;
    case '÷':
      computation = current === 0 ? "Error" : prev / current; // Handle division by zero
      break;
    default:
      return '';
  }
  return computation.toString();
}

// Helper to format operands
const INTEGER_FORMATTER = new Intl.NumberFormat('en-us', {
  maximumFractionDigits: 0,
});

function formatOperand(operand) {
  if (operand == null) return;
  const [integer, decimal] = operand.split('.');
  if (decimal == null) return INTEGER_FORMATTER.format(integer);
  return `${INTEGER_FORMATTER.format(integer)}.${decimal}`;
}

// Main App component
function App() {
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
    reducer,
    {}
  );

  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand">
          {formatOperand(previousOperand)} {operation}
        </div>
        <div className="current-operand">{formatOperand(currentOperand)}</div>
      </div>
      <button
        className="span-two"
        onClick={() => dispatch({ type: ACTIONS.CLEAR })}
      >
        AC
      </button>
      <button onClick={() => dispatch({ type: ACTIONS.DELETE_DIGIT })}>
        DEL
      </button>
      <Operations operation="÷" dispatch={dispatch} />
      <Buttons digit="7" dispatch={dispatch} />
      <Buttons digit="8" dispatch={dispatch} />
      <Buttons digit="9" dispatch={dispatch} />
      <Operations operation="*" dispatch={dispatch} />
      <Buttons digit="4" dispatch={dispatch} />
      <Buttons digit="5" dispatch={dispatch} />
      <Buttons digit="6" dispatch={dispatch} />
      <Operations operation="+" dispatch={dispatch} />
      <Buttons digit="1" dispatch={dispatch} />
      <Buttons digit="2" dispatch={dispatch} />
      <Buttons digit="3" dispatch={dispatch} />
      <Operations operation="-" dispatch={dispatch} />
      <Buttons digit="." dispatch={dispatch} />
      <Buttons digit="0" dispatch={dispatch} />
      <button
        className="span-two"
        onClick={() => dispatch({ type: ACTIONS.EVALUATE })}
      >
        =
      </button>
    </div>
  );
}

export default App;
export { reducer };
