import React, { useState } from "react";
import backgroundImage from "../../img/background.jpg";
import "../signup/Signup.css";
import signupImg from "../../img/back_timg.jpg";
import { CiUser } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { CiMobile3 } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
import { CiRead } from "react-icons/ci";
import Button from "../../components/Button/Button";
import { useNavigate, Link } from "react-router-dom";
import Inputs from "../../components/User_SignUp/Components/Inputs/Inputs";
// import fount from"../../Fonts/iransansX family/IRANSansX_Light.ttf";
// import "coffee_staff\src\Fonts\iransansX family\IRANSansX-Light.ttf"
const styles = {
  backgroundImage: `url(${backgroundImage})`,
  display: "flex",
};

const Login = () => {
  const [inputs, setInputs] = useState({
    passsword: "",
    emailaddress: "",
  });

  const [email, setemail] = useState("");
  // const [process, setprocess] = useState("");
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

  return (
    <div className="App" style={styles}>
      <div className="rectangle">
        <img className="img" src={signupImg}></img>
        <div class="headertext">(: خوش برگشتی </div>
        <p className="create_account">ورود به حساب کاربری</p>
        <form className="form" style={{ top: "170px" }}>
          <div style={{ display: "flex" }}>
            <div className="signup">
              <div className="input">
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
                <CiMail className="icon" />
              </div>

              <div className="input">
                <Inputs
                  type="password"
                  name="password"
                  value={inputs.password || ""}
                  onChange={handleChange}
                  placeholder="رمز عبور"
                />
                <CiLock className="icon" />
                <CiRead className="ciread" />
              </div>
              <div>
                <div className="Button" style={{ marginRight: "-30px" }}>
                  <Link to="/main"><button >ورود</button></Link>
                  <p onClick={handleSubmit}
                    style={{
                      textAlign: "right",
                      fontSize: "12px",
                      marginRight:"32px",
                    }}
                  >
                    رمز عبورت رو فراموش کردی؟
                  </p>
                </div>
              </div>
            </div>
            <div className="ExistAccount">
              <p className="existaccount">
                حساب کاربری نداری ؟
                <Link to="/">
                  <span className="enter">ثبت نام</span>
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
