import React, { useState } from "react";

function Timer() {
  const [toggle, setToggle] = useState(false);
  console.log("Timer component Mounted");

  return (
  <div>
    <button onClick={() => setToggle(!toggle)}>
     Click Me       
    </button>
    {console.log(toggle)}
  </div>
)
}

export default Timer;
