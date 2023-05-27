import { useState } from "react";
import "./CustomInput2.css";

function VerificationCode({ verificationCode, setVerificationCode }) {
  const handleInput = (index, e) => {
    const value = e.target.value;
    setVerificationCode((prevState) => {
      const newState = [...prevState];
      newState[index] = value;
      return newState;
    });
    if (value && index < verificationCode.length - 1) {
      document.querySelectorAll("input")[index + 1].focus();
    }
  };

  return (
    <div className="verification-code-container">
      <div className="verification-code-inputs">
        {verificationCode.map((digit, index) => (
          <input
            key={index}
            type="text"
            maxLength="1"
            value={digit}
            onChange={(e) => handleInput(index, e)}
          />
        ))}
      </div>
    </div>
  );
}

export default VerificationCode;
