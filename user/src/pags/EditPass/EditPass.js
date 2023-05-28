import "./EditPass.css";
import React, { useRef, useState, useEffect, useContext } from "react";
import AuthContext from "../../context/AuthProvider";
import Button from "./../Components/Button/Button";
import Inputs from "./../Components/Inputs/Inputs";
import { CiLock } from "react-icons/ci";
import { CiRead } from "react-icons/ci";
import "./../../Fonts/iransansX family/IRANSansX-Bold.ttf";
import "./../../Fonts/iransansX family/IRANSansX-Light.ttf";
import { Link } from "react-router-dom";

const EditPass = () => {
  return (
    <div className="All4">
      <h1 className="t0001">ویرایش رمز عبور</h1>
      <p className="t0002">.رمز عبور جدید خود را وارد کنید</p>

      <div className="input">
        <Inputs type="password" placeholder="رمز عبور" />
        <CiLock className="icon" />
      </div>

      <div className="input">
        <Inputs type="password" placeholder="تکرار رمز عبور" />
        <CiLock className="icon" />
      </div>

      <div className="button">
        <Link to="/">
          <Button value="تایید" />
        </Link>
      </div>
    </div>
  );
};
export default EditPass;
