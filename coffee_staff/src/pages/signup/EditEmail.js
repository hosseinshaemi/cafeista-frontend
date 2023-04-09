import React from "react";
import backgroundImg from "../../img/background.png";
import "./Verificationpage.css";
import "../../components/Form.css";
import SignUp from "../../components/User_SignUp/SignUp";
import { CiMail } from "react-icons/ci";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
const styles = {
  display: "flex",
  backgroundImage: `url(${backgroundImg})`,
};
const EditEmail = () => {
  return (
    <div className="verify" style={styles}>
      <div className="rectanglee">
        <div className="headerText">ویرایش ایمیل</div>
        <p className="createAccount">ایمیل خود را ویرایش کنید</p>
        <div style={{ margin: "180px 30px 5px 0px" }}>
          <SignUp type="email" placeholder="ایمیل" />
          <CiMail className="icon" />
        </div>
        <Link to="/verify/">
          <Button value="تایید" />
        </Link>
      </div>
    </div>
  );
};
export default EditEmail;
