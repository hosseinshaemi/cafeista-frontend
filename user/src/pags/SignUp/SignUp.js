import React, { useState } from "react";
import "./SignUp.css";
import { Link, useNavigate } from "react-router-dom";
import Inputs from "../Components/Inputs/Inputs";
import Button from "../Components/Button/Button";
import { CiPhone, CiUser } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { CiLock, CiRead } from "react-icons/ci";
import "./../../Fonts/iransansX family/IRANSansX-Bold.ttf";
import "./../../Fonts/iransansX family/IRANSansX-Light.ttf";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
    emailaddress: "",
    phonenumber: "",
  });

  const [kind, setkind] = useState("");
  const [email, setemail] = useState("");
  const navigate = useNavigate();

  const emailhandeler = (event) => {
    console.log("email handler function");
    setemail(event.target.value);
    console.log("ok");
  };

  const handlechange = (event) => {
    console.log("Handlechange Function");
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handlesubmit = (event) => {
    event.preventDefault();
    setkind("signup");
    console.log(kind);
    navigate(`/verify/${email}/signup`);
  };

  return (
    <div className="signupform">
      <h1 className="welcome"> (: خوش آمدی </h1>
      <p className="creataccount">ثبت نام و ساخت حساب کاربری</p>

      <div className="input-signup">
        <Inputs
          type="text"
          placeholder="نام و نام خانوادگی"
          value={inputs.username || ""}
          onChange={handlechange}
        />
        <CiUser className="icon" />
      </div>
      <div className="input-signup">
        <Inputs
          type="email"
          placeholder="ایمیل"
          value={inputs.emailaddress || ""}
          onChange={(e) => {
            handlechange(e);
            emailhandeler(e);
          }}
        />
        <CiMail className="icon" />
      </div>
      <div className="input-signup">
        <Inputs
          type="number"
          placeholder="شماره تلفن"
          onChange={handlechange}
          value={inputs.phonenumber || ""}
        />
        <CiPhone className="icon" />
      </div>
      <div className="input-signup">
        <Inputs
          type="password"
          placeholder="رمز عبور"
          value={inputs.password || ""}
          onChange={handlechange}
        />
        <CiLock className="icon" />
        <CiRead className="ciread" />
      </div>
      <div className="signup_btn">
        <Link to="/verification">
          <Button value="ثبت نام" onClick={handlesubmit} />
        </Link>
      </div>

      <p className="enter">
        <Link to="/enterLogin" className="entertext">
          {" "}
          ورود{" "}
        </Link>
      </p>

      <h3 className="existaccount"> حساب کاربری داری؟</h3>
    </div>
  );
};

export default SignUp;
