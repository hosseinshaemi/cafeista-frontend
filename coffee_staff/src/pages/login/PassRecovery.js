import React, { useState } from "react";
import backgroundImg from "../../img/background.jpg";
import "../signup/Verificationpage.css";
import "../../components/Form.css";
import SignUp from "../../components/User_SignUp/SignUp";
import { CiMail } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import { useNavigate, useParams } from "react-router-dom";
import Inputs from "../../components/User_SignUp/Components/Inputs/Inputs";
const styles = {
  display: "flex",
  backgroundImage: `url(${backgroundImg})`,
};
const PassRecovery = () => {
  const { email, code } = useParams();
  const [newemail, setNewemail] = useState(email);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(newemail);
    navigate(`/login`);
  };

  const handleInput = (event) => {
    console.log("HandleInput");
    setNewemail(event.target.value);
  };

  return (
    <div className="verify" style={styles}>
      <div className="rectanglee">
        <div className="headerText">تغییر رمزعبور</div>
        <p className="createAccount">رمز عبور جدید را وارد کنید</p>
        <div style={{ margin: "180px 30px 5px 0px" }}>
          <Inputs
            type="input"
            placeholder="رمز عبور جدید"
            value={email}
            onChange={handleInput}
          />
          <CiLock className="icon" />
          <Inputs
            type="input"
            placeholder=" تکرار رمز عبور جدید"
            value={email}
            onChange={handleInput}
          />
          <CiLock className="icon" />
        </div>
        
        <div className="Button" style={{ margin: "-30px" }}>
          <button onClick={handleSubmit}>تایید</button>
        </div>
      </div>
    </div>
  );
};
export default PassRecovery;
