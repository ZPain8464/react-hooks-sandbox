import "./App.css";
import React, { useState, useEffect } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const incrementCount = () => setCount(count + 1);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });
  return (
    <div>
      <button onClick={incrementCount}>Click +1</button>
      <div>
        <p>You clicked {count} times!</p>
      </div>
    </div>
  );
};

export default App;
