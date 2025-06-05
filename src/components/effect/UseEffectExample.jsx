import React, { useEffect, useState } from "react";

function UseEffectExample() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    console.log("Component Mounted Use Effect 1");
  }, [count1]);


  useEffect(() => {
    console.log("Component Mounted Use Effect 2");
  }, [count2]);

  

  function handleIncrement1() {
    setCount1((prevState) => prevState + 1);
  }

  function handleIncrement2() {
    setCount2((prevState) => prevState + 1);
  }

  return (
    <div>
      <div>
        <p>Count 1: {count1}</p>
        <button onClick={handleIncrement1}>Increment Count 1</button>
      </div>
      <div>
        <p>Count 2: {count2}</p>
        <button onClick={handleIncrement2}>Increment Count 2</button>
      </div>
    </div>
  );
}

export default UseEffectExample;
