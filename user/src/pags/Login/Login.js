import "./Login.css";
import React from "react";
import Button from "./../Components/Button/Button";
import Inputs from "./../Components/Inputs/Inputs";
import { CiMail } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
import { CiRead } from "react-icons/ci";
import "./../../Fonts/iransansX family/IRANSansX-Bold.ttf";
import "./../../Fonts/iransansX family/IRANSansX-Light.ttf";
import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
<<<<<<< HEAD
      <div className='main'>
      <div className='All1'>
        <h1 className="t1">(: خوش برگشتی</h1>
        <p className="t2">ورود به حساب کاربری</p>
        
        
        <div className='input'>
          <Inputs type='email' placeholder='ایمیل' />
          <CiMail className='icon'/>
        </div>
=======
    <div className="All1">
      <h1 className="t1">(: خوش برگشتی</h1>
      <p className="t2">ورود به حساب کاربری</p>
>>>>>>> UserProfile

      <div className="input">
        <Inputs type="email" placeholder="ایمیل" />
        <CiMail className="icon" />
      </div>

<<<<<<< HEAD
      </div>
    
=======
      <div className="input">
        <Inputs type="password" placeholder="رمز عبور" />
        <CiLock className="icon" />
        <CiRead className="ciread" />
      </div>

      <div className="login-button">
        <Link to="/main">
          <Button value="ورود" />
        </Link>
      </div>

      <p className="link1">
        <Link to="/Forgetpass" className="color">
          رمز عبورت رو فراموش کردی؟
        </Link>
      </p>

      <p className="link2">
        <Link to="/signup" className="a">
          ثبت نام
        </Link>
      </p>
      <h3 className="Account">حساب کاربری نداری؟</h3>
    </div>
>>>>>>> UserProfile
  );
};

export default Login;
