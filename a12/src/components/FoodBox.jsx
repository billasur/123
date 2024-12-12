import './FoodBox.css';
import React, { Component } from 'react';
import TotalCal from "./TotalCal";

export default class Foodbox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      id: -1,
      totalCal: 0,
    };
  }

  handleChange = (e, id) => {
    const value = parseInt(e, 10) || 0; // Ensure input is a number
    this.setState({
      counter: value,
      id: id,
    });
  };

  handleSubmit = () => {
    const { counter } = this.state;
    const { cal } = this.props.food;
    this.setState((prevState) => ({
      totalCal: prevState.totalCal + counter * cal,
    }));
  };

  handleReset = () => {
    this.setState({
      counter: 0,
      id: -1,
      totalCal: 0,
    });
  };

  render() {
    return (
      <div className="flex">
        <div className="box">
          <article className="media">
            <div className="media-left">
              <figure className="image is-64x64">
                <img src={this.props.food.img} alt={this.props.food.name} />
              </figure>
            </div>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>{this.props.food.name}</strong> <br />
                  <small>{this.props.food.cal} cal/unit</small>
                </p>
              </div>
            </div>
            <div className="media-right">
              <div className="field has-addons">
                <div className="control">
                  <input
                    className="input"
                    type="number"
                    placeholder="Enter a number here"
                    onChange={(e) =>
                      this.handleChange(e.target.value, this.props.food.id)
                    }
                  />
                </div>
                <div className="control">
                  <button className="button is-info" onClick={this.handleSubmit}>
                    +
                  </button>
                </div>
              </div>
            </div>
          </article>
        </div>
        <TotalCal
          name={this.props.food.name}
          totalCal={this.state.totalCal}
          count={this.state.counter}
        />
        <button className="button-reset" onClick={this.handleReset}>
          Reset
        </button>
      </div>
    );
  }
}