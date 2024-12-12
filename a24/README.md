# Assignment 2: Extend the Calculator with DELETE and EVALUATE

## Overview

In this assignment, you will extend the functionality of the basic calculator that was created in the previous assignment. Specifically, you will:

1. Implement the functionality to delete the last digit entered (i.e., the **DEL** button).
2. Complete the logic for evaluating arithmetic expressions (i.e., the **=** button).

## Objective

- **DELETE_DIGIT**: Implement the logic to delete the last digit from the `currentOperand`.
- **EVALUATE**: Complete the logic for the evaluation of arithmetic expressions based on the selected operation (`+`, `-`, `*`, `÷`).

## Tasks

### 1. **DELETE_DIGIT**

- Implement the logic inside the `DELETE_DIGIT` action in the reducer function.
- When the "DEL" button is clicked, remove the last digit from the `currentOperand`.
- If `currentOperand` has only one digit left, set it to `null` to clear the display.

### 2. **EVALUATE**

- Complete the logic for the `EVALUATE` action.
- This should calculate the result based on the `previousOperand`, `currentOperand`, and the selected `operation`.
- After evaluating the result, display it in the `currentOperand` and reset the `previousOperand` and `operation`.

## Hints for Implementation

- **DELETE_DIGIT**:

  - Use string manipulation (like `slice()` or `substring()`) to remove the last character of the `currentOperand`.
  - Remember to handle cases where there's only one digit left in `currentOperand`.

- **EVALUATE**:
  - Use the `evaluate` helper function to perform arithmetic calculations.
  - Ensure that the `previousOperand`, `currentOperand`, and `operation` are valid before performing the calculation.
  - Handle edge cases such as dividing by zero or missing operands.
