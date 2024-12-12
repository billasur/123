import React, { useState } from 'react';

// TASK 2: 
// Define a state to keep track of the like counter for the post.
// Create a function to increment the counter on button click.

export default function LikePost() {
  // Define a state to keep track of the like counter for the post.
  const [likeCount, setLikeCount] = useState(0);

  const handlePostCount = () => {
    // Increment the like counter here.
    setLikeCount(likeCount + 1);
  }

  return (
    <div>
      <button onClick={handlePostCount}>
        Like Post {likeCount} {/* Display the like counter here */}
      </button>
    </div>
  );
}
