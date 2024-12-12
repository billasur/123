import { Component } from "react";
import DisplayListOfItems from "./components/DisplayListOfItems";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);

    // Uncomment and complete the state initialization
    this.state = {
      listOfItems: [],
      item: {
        key: "",
        itemDescription: "",
      },
    };

    // Bind event handler methods
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  // Uncomment and complete the handleInput method
  handleInput = (event) => {
    const description = event.target.value; // Get the value of the input field
    this.setState({
      item: {
        ...this.state.item, // Preserve other properties of the item
        key: Date.now(), // Assign a unique key
        itemDescription: description, // Update the description
      },
    });
  };

  // Uncomment and complete the handleSubmit method
  handleSubmit = (e) => {
    e.preventDefault();
    const { item, listOfItems } = this.state;

    if (item.itemDescription.trim() === "") return; // Prevent adding empty items

    this.setState({
      listOfItems: [...listOfItems, item], // Add the new item to the list
      item: {
        key: "",
        itemDescription: "", // Reset the input field
      },
    });
  };

  // Uncomment and complete the handleDelete method
  handleDelete = (key) => {
    const filteredItems = this.state.listOfItems.filter((item) => item.key !== key);
    this.setState({ listOfItems: filteredItems }); // Update the list
  };

  // Uncomment and complete the handleUpdate method
  handleUpdate = (newDescription, key) => {
    const updatedList = this.state.listOfItems.map((item) => {
      if (item.key === key) {
        return { ...item, itemDescription: newDescription }; // Update the item description
      }
      return item; // Keep other items unchanged
    });
    this.setState({ listOfItems: updatedList });
  };

  render() {
    return (
      <div className="main">
        <header>
          {/* Uncomment and complete the form and input fields */}
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="Type here"
              value={this.state.item.itemDescription}
              onChange={this.handleInput}
            />
            <button type="submit">Add Item</button>
          </form>

          {/* Uncomment and complete the DisplayListOfItems component rendering */}
          <DisplayListOfItems
            listOfItems={this.state.listOfItems}
            handleDelete={this.handleDelete}
            handleUpdate={this.handleUpdate}
          />
        </header>
      </div>
    );
  }
}
