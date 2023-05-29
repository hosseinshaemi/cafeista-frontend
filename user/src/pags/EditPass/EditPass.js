import "./EditPass.css";
import { useNavigate, useParams } from "react-router-dom";
import React, { useState } from "react";
import Inputs from "../../Components/Inputs/Inputs";
import { CiLock } from "react-icons/ci";
import "./../../Fonts/iransansX family/IRANSansX-Bold.ttf";
import "./../../Fonts/iransansX family/IRANSansX-Light.ttf";

const EditPass = () => {
  const { email, code } = useParams();
  const [newemail, setNewemail] = useState(email);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(newemail);
    navigate(`/`);
  };

  const handleInput = (event) => {
    console.log("HandleInput");
    setNewemail(event.target.value);
  };
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div style={{ width: "80%" }}>
        <h1 className="t1">تغییر رمزعبور</h1>
        <p className="t2">رمز عبور جدید را وارد کنید</p>
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
            <CiLock
              size={25}
              style={{ margin: "0", position: "relative", left: "310px" }}
            />
            <Inputs
              type="password"
              placeholder="رمز عبور جدید"
              value={email}
              onChange={handleInput}
            />
          </div>
          <div>
            <div>
              <CiLock
                size={25}
                style={{ margin: "0", position: "relative", left: "310px" }}
              />
              <Inputs
                type="password"
                placeholder=" تکرار رمز عبور جدید"
                value={email}
                onChange={handleInput}
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
              <button onClick={handleSubmit}>تایید</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
export default EditPass;
