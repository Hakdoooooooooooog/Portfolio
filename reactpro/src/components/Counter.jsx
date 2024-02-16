import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [incrementBy, setIncrementBy] = useState(1);

  function increment() {
    setCount(count + incrementBy);
  }

  function decrement() {
    setCount(count - incrementBy);
  }

  function increaseIncrement() {
    setIncrementBy(incrementBy + 1);
  }

  function decreaseIncrement() {
    setIncrementBy(incrementBy - 1);
  }

  return (
    <div>
      <h1>Count values is: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>

      <h1>We are incrementing the value by: {incrementBy}</h1>
      <button onClick={increaseIncrement}>Increase increment</button>
      <button onClick={decreaseIncrement}>Decrease increment</button>
    </div>
  );
};

export default Counter;
