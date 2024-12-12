import React, { useState } from 'react';

// TASK 1: 
// Define a state to keep track of the like counter for the image.
// Create a function to increment the counter on button click.

export default function LikeImage() {
  // Define a state to keep track of the like counter for the image.
  const [likeCount, setLikeCount] = useState(0);

  const handleLikeImageCount = () => {
    // Increment the like counter here.
    setLikeCount(likeCount + 1);
  }

  return (
    <div>
      <button onClick={handleLikeImageCount}>
        Like Image {likeCount} {/* Display the like counter here */}
      </button>
    </div>
  );
}
