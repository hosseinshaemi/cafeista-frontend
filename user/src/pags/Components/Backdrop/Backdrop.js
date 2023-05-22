import React, { useState, useRef } from 'react';
import './Backdrop.css';

function Backdrop(props) {
  const [showBackdrop, setShowBackdrop] = useState(false);
  const inputRef = useRef(null);

  const toggleBackdrop = () => {
    setShowBackdrop(!showBackdrop);
  };

  const handleInputClick = (event) => {
    event.stopPropagation();
  };

  const handleBackdropClick = () => {
    props.onToggleBackdrop();
  };
    return(
    <>
      {props.showBackdrop && (
        <div className="backdrop" onClick={handleBackdropClick}>
          <div className="backdrop-content" onClick={handleInputClick}>
            {React.cloneElement(props.children, { ref: inputRef })}
          </div>
        </div>
      )}
    </>
  );
}

export default Backdrop;


