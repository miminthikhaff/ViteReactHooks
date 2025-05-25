import React, { useState } from "react";


function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prevState) => prevState + 1);
  };
  const handleDecrement = () => {
    setCount((prevState) => prevState - 1);
  };
  const handleReset = () => {
    setCount(0);
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={handleIncrement}>
        Increment
      </button>
      <button onClick={handleDecrement}>
        Decrement
      </button>
      <button onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}

export default Counter;

/* function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button
        onClick={() => {
          setCount((prevState) => prevState + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setCount((prevState) => prevState - 1);
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          setCount(0);
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default Counter; */

/* 
function Counter() {
  const [count, setCount] = useState(0);
  

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button
        onClick={() => {
          setCount(0);
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default Counter; */
