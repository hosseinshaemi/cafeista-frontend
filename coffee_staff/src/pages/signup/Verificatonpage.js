import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import VerificationCode from "./CustomInput";
import Button from "../../components/Button/Button";
import { FiEdit } from "react-icons/fi";
import backgroundImg from "../../img/background.jpg";
import "./Verificationpage.css";
import { useNavigate } from "react-router-dom";
const styles = {
  display: "flex",
  backgroundImage: `url(${backgroundImg})`,
};

const Verification = ({ emailAddress }) => {
  const [timeLeft, setTimeLeft] = useState(10);
  const [isActive, setIsActive] = useState(false);
  const [finished, setFinished] = useState(false);
  const [resendClicked, setResendClicked] = useState(false);
  const [verificationCode, setVerificationCode] = useState(["", "", "", ""]);
  const { email, kind } = useParams();
  const navigate = useNavigate();
  // const [emailAddress,setemailAddress]=useState({emailAddress});

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit");
    navigate(`/editEmail/${email}`);
  };

  const handelbutton = () => {
    const code = verificationCode.join('');
    console.log("handlebutton");
    if (kind == "signup") {
      navigate(`/coffeinfo/${email}/${code}`);
    } else {
      navigate(`/passrecovery/${email}`);
    }
  };

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
          <FiEdit className="icons" onClick={handleSubmit} />
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
