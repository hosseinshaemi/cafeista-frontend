import React, { useState } from "react";
import backgroundImg from "../../img/background.jpg";
import "../signup/Verificationpage.css";
import "../../components/Form.css";
import { CiLock } from "react-icons/ci";
import { useNavigate, useParams } from "react-router-dom";
import Inputs from "../../components/User_SignUp/Components/Inputs/Inputs";
const styles = {
  display: "flex",
  backgroundImage: `url(${backgroundImg})`,
};
const PassRecovery = () => {
  const { email, code } = useParams();
  const [newemail, setNewemail] = useState(email);
  const [inputs, setInputs] = useState({
    password: "",
  });
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
  const handleChange = (event) => {
    console.log("HandleChange Function");
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
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
            value={inputs.password || ""}
            onChange={handleChange}
          />
          <CiLock className="icon" />
          <Inputs
            type="input"
            placeholder=" تکرار رمز عبور جدید"
            value={inputs.password || ""}
            onChange={handleChange}
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
