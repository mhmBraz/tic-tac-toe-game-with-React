import ReactDOM from 'react-dom/client';
import React, { useEffect, useState } from "react";
import './index.css';

function useExample(number) {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  const [age, setAge]     = useState(25);
  const [todos, setTodos] = useState({'text' : 'Log'}) 

  useEffect(function persistForm() {
    localStorage.setItem('formData', count);
  });
  
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count}, {age}, {todos.text} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
function Counter({initialCount = 10}) {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    console.log('aqui');
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