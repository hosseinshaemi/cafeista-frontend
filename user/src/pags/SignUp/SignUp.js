import React, { useState } from "react";
import "./SignUp.css";
import { Link, useNavigate } from "react-router-dom";
import Inputs from "../../Components/Inputs/Inputs";
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
  const [showPassword, setShowPassword] = useState(false);
  const [kind, setkind] = useState("");
  const [email, setemail] = useState("");
  const navigate = useNavigate();

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
    navigate(`/verify/${inputs.emailaddress}/signup`);
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div style={{ width: "80%" }}>
        <h1 className="t1">(: خوش آمدی</h1>
        <p className="t2">ثبت‌نام وساخت حساب کاربری</p>
      </div>
      <form style={{ top: "170px", display: "flex", flexDirection: "column" }}>
        <div
          style={{
            margin: "60px 0 0 20px",
            display: "flex",
            flexDirection: "column",
            gap: "30px",
          }}
        >
          <div style={{ marginRight: "20px" }}>
            <CiUser
              size={25}
              style={{ margin: "0", position: "relative", left: "310px" }}
            />
            <Inputs
              type="text"
              name="username"
              placeholder="نام و نام خانوادگی"
              value={inputs.username || ""}
              onChange={handlechange}
            />
          </div>
          <div style={{ marginRight: "20px" }}>
            <CiMail
              size={25}
              style={{ margin: "0", position: "relative", left: "310px" }}
            />
            <Inputs
                    type="email"
                    name="emailaddress"
                    value={inputs.emailaddress || ""}
                    onChange={handlechange}
                    placeholder="ایمیل"
            />
          </div>
          <div style={{ marginRight: "20px" }}>
            <CiPhone
              size={25}
              style={{ margin: "0", position: "relative", left: "310px" }}
            />
            <Inputs
             type="number"
             name="phonenumber"
             value={inputs.phonenumber || ""}
             onChange={handlechange}
             placeholder="شماره تلفن"
            />
          </div>
          <div>
            <div>
              <CiLock
                size={25}
                style={{ margin: "0", position: "relative", left: "310px" }}
              />
               <CiRead className="ciread" onClick={togglePasswordVisibility}/>
               <Inputs
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={inputs.password || ""}
                  onChange={handlechange}
                  placeholder="رمز عبور"
                />
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                width: "90%",
                marginTop: "60px",
              }}
            >
             
                <button onClick={handlesubmit}>ثبت‌نام</button>
         
             
              <div
                style={{
                  display: "flex",
                  flexDirection: "row-reverse",
                  width: "100%",
                  position: "fixed",
                  top: "700px",
                }}
              >
                <p style={{ margin: 0, direction: "rtl", width: "100%" }}>
                  حساب کاربری داری ؟
                  <Link to="/">
                    <span>ورود </span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
