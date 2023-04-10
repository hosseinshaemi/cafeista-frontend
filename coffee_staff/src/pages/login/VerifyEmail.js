import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import VerificationCode from "../signup/CustomInput";
import Button from "../../components/Button/Button";
import { FiEdit } from "react-icons/fi";
import backgroundImg from "../../img/background.jpg";
import "../signup/Verificationpage.css";
import { useNavigate } from "react-router-dom";
const styles = {
  display: "flex",
  backgroundImage: `url(${backgroundImg})`,
};

const VerifyEmail = ({ emailAddress }) => {
  const [timeLeft, setTimeLeft] = useState(10);
  const [isActive, setIsActive] = useState(false);
  const [finished, setFinished] = useState(false);
  const [resendClicked, setResendClicked] = useState(false);
  const [verificationCode, setVerificationCode] = useState(["", "", "", ""]);
  const { email } = useParams();
  const navigate = useNavigate();
  // const [emailAddress,setemailAddress]=useState({emailAddress});

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit");
    navigate(`/logineditemail/${email}`);
  };
  useEffect(() => {
    console.log(email);
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
    <div className="verify" style={styles}>
      <div className="rectanglee">
        <div class="headerText">تایید</div>
        <p className="createAccount">کد ارسال‌شده به ایمیل خود را وارد کنید</p>

        <div>
          <p className="mail">{email}</p>
          <div className="Horizantal_Line"></div>
          {/* <Link to="/editemail">
            <FiEdit className="icons" onClick={edithandeler}></FiEdit>
          </Link> */}
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
          <Link to="/passrecovery">
            <Button value="تایید" />
          </Link>
        )}
      </div>
    </div>
  );
};
export default VerifyEmail;
