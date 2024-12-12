import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Task 1: Fetch data from the API using Axios
    axios
      .get('https://example.com/api/books') // Replace with the actual API URL
      .then((response) => {
        setData(response.data.books); // Adjust based on the actual response structure
      })
      .catch((err) => {
        console.log('Status Code: ' + err.response?.status);
        if (err.response?.status === 404) {
          console.log('Website not found');
        } else {
          console.log(err);
        }
      });
  }, []);

  return (
    <div>
      {data.map((item) => {
        return (
          <div key={item.id}>
            {/* Task 2: Render each book’s title, thumbnail, and description inside the UI */}
            <h4>{item.title}</h4>
            <div className="flex">
              <img src={item.imageLinks?.smallThumbnail} alt={item.title} />
              <p>{item.description}</p>
            </div>
            {item.authors.map((author, index) => (
              <span key={index}>{author}</span>
            ))}
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default App;