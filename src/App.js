import React, { useState } from 'react';

function App() {
  const [state, setState] = useState({ count: 4, theme: 'red' });
  const count = state.count;
  const theme = state.theme;

  function incrementCount() {
    setState((prevState) => {
      return { ...prevState, count: prevState.count + 1 };
    });
  }

  function decrementCount() {
    setState((prevState) => {
      return { ...prevState, count: prevState.count - 1 };
    });
  }

  return (
    <>
      <div>
        <button onClick={incrementCount}>+</button>
        <span>{count}</span>
        <span>{theme}</span>
        <button onClick={decrementCount}>-</button>
      </div>
    </>
  );
}

export default App;
