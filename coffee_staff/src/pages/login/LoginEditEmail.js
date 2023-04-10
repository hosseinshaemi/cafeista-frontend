import React, { useState } from "react";
import backgroundImg from "../../img/background.png";
import "../signup/Verificationpage.css";
import "../../components/Form.css";
import SignUp from "../../components/User_SignUp/SignUp";
import { CiMail } from "react-icons/ci";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import { useNavigate, useParams } from "react-router-dom";
import Inputs from "../../components/User_SignUp/Components/Inputs/Inputs";
const styles = {
  display: "flex",
  backgroundImage: `url(${backgroundImg})`,
};
const LoginEditEmail = () => {
  const { email } = useParams();
  const [newemail, setNewemail] = useState(email);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(newemail);
    navigate(`/verifyemail/${newemail}`);
  };

  const handleInput = (event) => {
    console.log("HandleInput");
    setNewemail(event.target.value);
  };

  return (
    <div className="verify" style={styles}>
      <div className="rectanglee">
        <div className="headerText">ویرایش ایمیل</div>
        <p className="createAccount">ایمیل خود را ویرایش کنید</p>
        <div style={{ margin: "180px 30px 5px 0px" }}>
          <Inputs
            type="email"
            placeholder={email}
            value={email}
            onChange={handleInput}
          />
          <CiMail className="icon" />
        </div>
        {/* <Link to="/verify/">
          <Button value="تایید" />
        </Link> */}
        <div className="Button" style={{ margin: "-30px" }}>
          <button onClick={handleSubmit}>تایید</button>
        </div>
      </div>
    </div>
  );
};
export default LoginEditEmail;
