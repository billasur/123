import axios from 'axios';
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://reactnd-books-api.udacity.com/books `, {
        headers: { Authorization: 'whatever-you-want' },
      })
      .then((res) => {
        setData(res.data.books);
      })
      .catch((err) => {
        // Task 1: Handle errors from the API request and log relevant messages for status codes
        if (err.response) {
          if (err.response.status === 404) {
            console.log('Website not found');
          } else {
            console.log(err); // Log the entire error object for other errors
          }
        } else if (err.request) {
          console.log('No response received from the server');
        } else {
          console.log('Error setting up the request:', err.message);
        }
      });
  }, []);

  return (
    <div>
      {data.map((item) => {
        return (
          <div key={item.id}>
            <h4>{item.title}</h4>
            <div className="flex">
              <img src={item.imageLinks.smallThumbnail} alt="" />
              <p>{item.description}</p>
            </div>
            {/* Task 2: Display each book’s authors as a list of spans under the description */}
            {item.authors && item.authors.length > 0 && (
              <div>
                {item.authors.map((author, index) => (
                  <span key={index}>{author}</span>
                ))}
              </div>
            )}
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default App;