// src/Counter.js
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
        <h1>React Example</h1>
      <h2>Counter: {count}</h2>
      <button onClick={handleIncrement}>Increment Counter</button>
    </div>
  );
};

export default Counter;
