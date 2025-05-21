import React, { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0);


  return (
    <div>
        <h1>
            Counter: {count} 
            <button onClick={() => setCount(count + 1)}>Increment</button>

        </h1>
    </div>
  )
}


export default Counter;