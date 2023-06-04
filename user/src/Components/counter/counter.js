import React, { useState } from 'react';
import './counter.css';
import {BiPlus} from "react-icons/bi" ; 
import {BiMinus} from "react-icons/bi"; 
function Counter() {
  const [count, setCount] = useState(1);

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="counter">
        <button
          className="increment-button"
          onClick={() => setCount(count + 1)}
        >
          <BiPlus size={10} color='#EFE0C8'/>
        </button>
        
        <div className="count-display">{count}</div>
        
        <button className="decrement-button" onClick={handleDecrement}>
          <BiMinus size={10} color='#EFE0C8'/>
        </button>
    </div>
  );
}

export default Counter;