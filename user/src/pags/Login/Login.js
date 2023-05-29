import "./Login.css";
import React, { useState } from "react";
import Inputs from "../../Components/Inputs/Inputs";
import { CiMail } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
import { CiRead } from "react-icons/ci";
import "./../../Fonts/iransansX family/IRANSansX-Bold.ttf";
import "./../../Fonts/iransansX family/IRANSansX-Light.ttf";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [inputs, setInputs] = useState({
    passsword: "",
    emailaddress: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [email, setemail] = useState("");
  const navigate = useNavigate();

  const emailhandeler = (event) => {
    console.log("Email Handler Function");
    setemail(event.target.value);
    console.log("ok");
  };

  const handleChange = (event) => {
    console.log("HandleChange Function");
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit");
    navigate(`/verify/${email}/login`);
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div style={{ width: "80%" }}>
        <h1 className="t1">(: خوش برگشتی</h1>
        <p className="t2">ورود به حساب کاربری</p>
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
            <CiMail
              size={25}
              style={{ margin: "0", position: "relative", left: "310px" }}
            />
            <Inputs
              type="email"
              name="emailaddress"
              value={inputs.emailaddress || ""}
              onChange={(e) => {
                handleChange(e);
                emailhandeler(e);
              }}
              placeholder="ایمیل"
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
                  onChange={handleChange}
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
              <Link to="/homepage">
                <button>ورود</button>
              </Link>
              <p
                onClick={handleSubmit}
                style={{
                  textAlign: "right",
                  fontSize: "12px",
                  marginRight: "0",
                }}
              >
                رمز عبورت رو فراموش کردی؟
              </p>
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
                  حساب کاربری نداری ؟
                  <Link to="/signup">
                    <span>ثبت نام</span>
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

export default Login;
