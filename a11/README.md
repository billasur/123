## FoodBox Component Assignment
This Assignment has 2 parts. This is part 1.
## Overview
- In this assignment, you will work with a React component called FoodBox.
- Your task is to complete the event handler functions for the component to manage food items, their calorie counts, and user interactions. 
- The FoodBox component displays information about a food item and allows users to input and update the number of servings. The total calories and the number of servings should be managed in the component's state and updated accordingly.

## Component Structure
- The FoodBox component has the following key parts:
- constructor: Initializes the component state.
- handleChange: A function to handle changes in the input field.
- handleSubmit: A function to handle the submit action when the user adds servings.
- handleReset: A function to handle the reset action to clear the input and reset the state.

## Your Tasks
- Complete the handleChange Function:
- This function should update the component's state with the current value from the input field and the food item’s ID. The function signature is provided
```
handleChange = (e, id) => {
  // Your code here
}
```
## Update the Event Handlers:
- Add the appropriate event handlers to the + button and the reset button in the render method:
```
<button className="buttonis-info" onClick={/* Your handleSubmit function here */}>
  +
</button>
```
```
<button className="button-reset" onClick={/* Your handleReset function here */}>
  reset
</button>
```

 
 