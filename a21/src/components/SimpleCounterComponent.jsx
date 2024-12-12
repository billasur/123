import React, { Component } from 'react';

export default class SimpleCounterComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0, // Initial counter value
      toggle: false, // Initial toggle state
    };
  }

  handleToggle = () => {
    this.setState((prevState) => ({
      toggle: !prevState.toggle, // Toggle between true and false
    }));
  };

  handleCounter = () => {
    if (this.state.toggle) {
      this.setState((prevState) => ({
        value: prevState.value + 1, // Increment counter only if toggle is true
      }));
    }
  };

  render() {
    return (
      <div>
        <h1>Simple Component</h1>
        <p>{this.state.value}</p> {/* Renders counter value */}
        <button onClick={this.handleToggle}>
          {this.state.toggle ? "Unset Toggle" : "Set Toggle"}
        </button>
        <button onClick={this.handleCounter}>Counter</button>
      </div>
    );
  }
}