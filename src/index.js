import ReactDOM from 'react-dom/client';
import React, { useEffect, useState } from "react";
import axios from "axios";
import './index.css';

function Counter({initialCount = 10}) {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
  
      
  })
  
  return (
    <>
      Count: {count}
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
    </>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Counter />);