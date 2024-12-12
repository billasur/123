import { useState } from "react";
import data from "./resources/countryData.json";
import "./App.css";

export default function App() {
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  // Task 1.1: Handle input change to update the search term
  const onChange = (event) => {
    const inputValue = event.target.value;
    setValue(inputValue);

    if (inputValue) {
      const filteredSuggestions = data
        .filter((country) =>
          country.name.toLowerCase().includes(inputValue.toLowerCase())
        )
        .slice(0, 10);
      setSuggestions(filteredSuggestions);
      setDropdownVisible(true);
    } else {
      setSuggestions([]);
      setDropdownVisible(false);
    }
  };

  // Task 1.2: Handle suggestion click to set the search term in the input box
  const onSearch = (searchTerm) => {
    setValue(searchTerm);
    setSuggestions([]);
    setDropdownVisible(false);
  };

  // Task 2: Handle keydown events for showing/hiding suggestions on Escape key press
  const handleKey = (e) => {
    if (e.key === "Escape") {
      setDropdownVisible(false);
    }
  };

  return (
    <div className="App">
      <h1>Search</h1>
      <div>
        <div>
          {/* Task 1.3: Input field for search box */}
          <input
            type="text"
            value={value}
            onChange={onChange}
            onKeyDown={handleKey}
            placeholder="Type a country name..."
          />
        </div>
        <div
          id="dropdown"
          style={{ display: dropdownVisible && suggestions.length > 0 ? "" : "none" }}
        >
          {/* Task 1.5: Render suggestions based on the filtered data */}
          <ul>
            {suggestions.map((suggestion, index) => (
              <li
                key={index}
                onClick={() => onSearch(suggestion.name)} 
                className="suggestionn"
              >
                {suggestion.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}