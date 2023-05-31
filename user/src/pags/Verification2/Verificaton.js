import React, { useState, useEffect } from "react";
import VerificationCode from "./CustomInput2";
import Button from "../../Components/Button/Button";
import { FiEdit } from "react-icons/fi";
import "./../../Fonts/iransansX family/IRANSansX-Bold.ttf";
import "./../../Fonts/iransansX family/IRANSansX-Light.ttf";
import { useParams,useNavigate } from "react-router-dom";
import "./VerificationPage2.css"
import { IoArrowBack } from "react-icons/io5";
const Verification = ({ emailAddress }) => {
  const [timeLeft, setTimeLeft] = useState(10);
  const [isActive, setIsActive] = useState(false);
  const [finished, setFinished] = useState(false);
  const [resendClicked, setResendClicked] = useState(false);
  const [verificationCode, setVerificationCode] = useState(["", "", "", ""]);
  const { email, kind } = useParams();
  const navigate = useNavigate();
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

  const handelbutton = () => {
    const code = verificationCode.join('');
    console.log("handlebutton");
    if (kind == "signup") {
      navigate(`/homepage`);
    } else {
      navigate(`/passrecovery/${email}`);
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit");
    navigate(`/editEmail/${email}`);
  };

  const handleclick =() => {
    window.history.back() ; 
  }
  return (
    <div className="verify">
       <IoArrowBack style={{position:'fixed' , top:'3%' , left:'7%' , color:'#37251B'}} size={20} onClick={handleclick}/>
      <div>
        <div class="headerText">تایید</div>
        <p className="createAccount">کد ارسال‌شده به ایمیل خود را وارد کنید</p>

        <div className="mailbox">
        <p className="mail">{email}</p>
          <div className="HorizantalLine"></div>
          <FiEdit className="icons" onClick={handleSubmit}/>
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
            }}
          >
            <Button value="ارسال مجدد" />
          </div>
        ) : (
          <div className="Button">
            <button onClick={handelbutton}>تایید</button>
          </div>
        )}
      </div>
    </div>
  );
};
export default Verification;
