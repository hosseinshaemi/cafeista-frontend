import React from "react";
import "./ForgotPass.css";
import Button from "./../Components/Button/Button";
import Inputs from "./../Components/Inputs/Inputs";

import { CiMail } from "react-icons/ci";

import "./../../Fonts/iransansX family/IRANSansX-Bold.ttf";
import "./../../Fonts/iransansX family/IRANSansX-Light.ttf";
import { Link } from "react-router-dom";

<<<<<<< HEAD
const ForgotPass=(props)=> {
    return (

        <div className='main'>
        <div className='All2'>
            
          <h1 className='t001'> فراموشی رمزعبور</h1>
          <p className='t002'>.ایمیل خود را وارد کنید</p>
=======
const ForgotPass = (props) => {
  return (
    <div className="All2">
      <h1 className="t001"> فراموشی رمزعبور</h1>
      <p className="t002">.ایمیل خود را وارد کنید</p>
>>>>>>> UserProfile

      <div className="Emailbox">
        <div className="input">
          <Inputs type="email" placeholder="ایمیل" />
          <CiMail className="icon" />
        </div>
<<<<<<< HEAD
  
        </div>
      
    );
  }
  
=======
      </div>

      <div className="button">
        <Link to="/Forgetpasscode">
          <Button value="بازیابی رمزعبور" />
        </Link>
      </div>
    </div>
  );
};

>>>>>>> UserProfile
export default ForgotPass;
