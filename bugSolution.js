```javascript
// In a React component
import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [count, setCount] = useState(0);
  const [displayCount, setDisplayCount] = useState(0);

  useEffect(() => {
    setDisplayCount(count);
  }, [count]); //This ensures that displayCount updates whenever count updates

  const handleClick = () => {
    setCount(prevCount => prevCount + 1); //Using functional update to avoid issues with asynchronous updates
  };

  return (
    <div>
      <p>Count: {displayCount}</p> <button onClick={handleClick}>Increment</button>
    </div>
  );
};
export default MyComponent;
```