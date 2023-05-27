import React, { useState } from 'react';
import './counter.css';

function Counter() {
  const [count, setCount] = useState(0);

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="counter">
      <div className="count-display">{count}</div>
      <div className="button-container">
        <button
          className="increment-button"
          onClick={() => setCount(count + 1)}
        >
          +
        </button>
        <button className="decrement-button" onClick={handleDecrement}>
          -
        </button>
      </div>
    </div>
  );
}

export default Counter;