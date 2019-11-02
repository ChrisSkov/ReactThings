import React, { useState } from 'react';

export default function Counter() {

  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Set initial value: </p> <input type="text" name="startCount"></input>
      
      <p>Current count is {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increase value
      </button>
      <button onClick={() => setCount(count - 1)}>
        Decrease value
      </button>
    </div>
  );
}