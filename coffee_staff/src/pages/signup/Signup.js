import React, { useState } from "react";
import backgroundImage from "../../img/background.png";
import "./Signup.css";
import signupImg from "../../img/signupphoto.jpg";
import { CiUser } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { CiMobile3 } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
import { CiRead } from "react-icons/ci";
import Button from "../../components/Button/Button";
import { useNavigate, Link } from "react-router-dom";
import Inputs from "../../components/User_SignUp/Components/Inputs/Inputs";

const styles = {
  backgroundImage: `url(${backgroundImage})`,
  display: "flex",
};

const Signup = () => {
  const [inputs, setInputs] = useState({
    username: "",
    passsword: "",
    emailaddress: "",
    phonenumber: "",
  });
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
    navigate(`/verify/${email}`);
  };

  return (
    <div className="App" style={styles}>
      <div className="rectangle">
        <img className="img" src={signupImg}></img>
        <div class="headertext">(: خوش آمدی </div>
        <p className="create_account">ثبت نام و ساخت حساب کاربری</p>
        <form className="form" style={{marginTop:"40px"}}>
          <div style={{ display: "flex" }}>
            <div className="signup">
              <div className="input">
                <Inputs
                  type="text"
                  name="username"
                  value={inputs.username || ""}
                  onChange={handleChange}
                  placeholder="نام و نام خانوادگی"
                />
                <CiUser className="icon" />
              </div>
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
                  type="text"
                  name="phonenumber"
                  value={inputs.phonenumber || ""}
                  onChange={handleChange}
                  placeholder="شماره تلفن"
                />
                <CiMobile3 className="icon" />
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
                <div className="Button" style={{ margin: "-30px",marginRight:"-60px" }}>
                  <button onClick={handleSubmit}>ثبت نام</button>
                </div>
              </div>
            </div>
            <div className="ExistAccount">
              <p className="existaccount">
                حساب کاربری داری ؟
                <Link to="/login">
                  <span className="enter">ورود</span>
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
