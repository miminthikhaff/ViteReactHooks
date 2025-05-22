import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>
        Counter: {count}
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </h1>
      <button onClick={}>Decrement</button>
      <button>Reset</button>
    </div>
  );
}

export default Counter;
