import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import VerificationCode from "./CustomInput";
import Button from "../Components/Button/Button";
import { FiEdit } from "react-icons/fi";
import "./VerificationPage.css";
import "./../../Fonts/iransansX family/IRANSansX-Bold.ttf";
import "./../../Fonts/iransansX family/IRANSansX-Light.ttf";

const VerificationPage = ({ emailAddress }) => {
  const [timeLeft, setTimeLeft] = useState(10);
  const [isActive, setIsActive] = useState(false);
  const [finished, setFinished] = useState(false);
  const [resendClicked, setResendClicked] = useState(false);
  const [verificationCode, setVerificationCode] = useState(["", "", "", ""]);
  // const [emailAddress,setemailAddress]=useState('');

  useEffect(() => {
    let intervalId;
    if (timeLeft > 0) {
      intervalId = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
      setIsActive(true);
    } else {
      setFinished(true);
    }
    return () => clearInterval(intervalId);
  }, [timeLeft, resendClicked]);

  const edithandeler = () => {};
  const handleResendClick = () => {
    setResendClicked(true);
  };

  if (finished && !resendClicked) {
    setTimeLeft(10);
    setResendClicked(true);
  }

  return (
    <div className="verify">
      <div>
        <div class="headerText">تایید</div>
        <p className="createAccount">کد ارسال‌شده به ایمیل خود را وارد کنید</p>

        <div className="mailbox">
          {/* <p className="mail">{emailAddress}</p> */}
          <input type="email" className="email-input" />
          <div className="HorizantalLine"></div>
          <Link to="/Editemail">
            <FiEdit className="icons" onClick={edithandeler}></FiEdit>
          </Link>
        </div>
        <VerificationCode
          verificationCode={verificationCode}
          setVerificationCode={setVerificationCode}
        />
        {finished ? <p>Countdown finished!</p> : <p>{timeLeft} seconds left</p>}
        {finished ? (
          <div
            onClick={() => {
              setTimeLeft(10);
              setFinished(false);
              setIsActive(false);
              setVerificationCode(["", "", "", ""]);
              // sethandleClear(['', '', '', '']);
            }}
          >
            {/* <Button value="ارسال مجدد" /> */}
          </div>
        ) : (
          <Link to="/Editpass">
            <Button className="send-btn" value="ارسال" />
          </Link>
        )}
      </div>
    </div>
  );
};
export default VerificationPage;
