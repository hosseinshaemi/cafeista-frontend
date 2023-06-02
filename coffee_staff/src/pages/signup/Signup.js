import React, { useState } from "react";
import backgroundImage from "../../img/background.jpg";
import "./Signup.css";
import signupImg from "../../img/back_timg.jpg";
import { CiUser } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { CiMobile3 } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
import { CiRead } from "react-icons/ci";
import { useNavigate, Link } from "react-router-dom";
import Inputs from "../../components/User_SignUp/Components/Inputs/Inputs";

const styles = {
  backgroundImage: `url(${backgroundImage})`,
  display: "flex",
};

const Signup = () => {
  const [inputs, setInputs] = useState({
    firstname: "",
    lastname: "",
    password: "",
    emailaddress: "",
    phonenumber: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(inputs);

    /* const result = await fetch("http://localhost:3000/api/cafe/register", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(inputs),
    }); */

    navigate(`/verify/${inputs.emailaddress}/signup`);
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="App" style={styles}>
      <div className="rectangle">
        <img className="img" src={signupImg}></img>
        <div class="headertext">(: خوش آمدی </div>
        <p className="create_account">ثبت نام و ساخت حساب کاربری</p>
        <form className="form">
          <div style={{ display: "flex" }}>
            <div className="signup">
              <div className="input">
                <Inputs
                  type="text"
                  name="firstname"
                  value={inputs.firstname || ""}
                  onChange={handleChange}
                  placeholder="نام "
                />
                <CiUser className="icon" />
              </div>
              <div className="input">
                <Inputs
                  type="text"
                  name="lastname"
                  value={inputs.lastname || ""}
                  onChange={handleChange}
                  placeholder="نام خانوادگی"
                />
                <CiUser className="icon" />
              </div>
              <div className="input">
                <Inputs
                  type="email"
                  name="emailaddress"
                  value={inputs.emailaddress || ""}
                  onChange={handleChange}
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
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={inputs.password || ""}
                  onChange={handleChange}
                  placeholder="رمز عبور"
                />
                <CiLock className="icon" />              
                <CiRead className="ciread" onClick={togglePasswordVisibility}/>
              </div>
              <div>
                <div
                  className="Button"
                  style={{ margin: "-30px", marginRight: "-60px" ,marginTop:"-50px"}}
                >
                  <button onClick={handleSubmit}>ثبت نام</button>
                </div>
              </div>
            </div>
            <div className="ExistAccount" >
              <p className="existaccount" style={{bottom:"-20px"}}>
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
