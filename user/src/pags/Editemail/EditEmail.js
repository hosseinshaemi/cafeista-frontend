import "./EditEmail.css";
import React, { useState } from "react";
import Inputs from "../../Components/Inputs/Inputs";
import "./../../Fonts/iransansX family/IRANSansX-Bold.ttf";
import "./../../Fonts/iransansX family/IRANSansX-Light.ttf";
import { useNavigate, useParams } from "react-router-dom";
import { CiMail } from "react-icons/ci";
import { IoArrowBack } from "react-icons/io5";

const EditEmail = () => {
  const { email, kind } = useParams();
  const [newemail, setNewemail] = useState(email);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(newemail);
    navigate(`/verify/${newemail}/${kind}`);
  };

  const handleInput = (event) => {
    console.log("HandleInput");
    setNewemail(event.target.value);
  };
  const handleclick = () => {
    window.history.back()
  }
  return (
    <div
    style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
  >
     <IoArrowBack style={{position:'fixed' , top:'3%' , left:'7%' , color:'#37251B'}} size={20} onClick={handleclick}/>
    <div style={{ width: "80%" }}>
      <h1 className="t1"> ویرایش ایمیل</h1>
      <p className="t2">ایمیل خود را ویرایش کنید</p>
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
            style={{ margin: "0", position: "relative", left: "310px" , color:'#37251B' }}
          />
          <Inputs
             type="email"
             placeholder={email}
             value={email}
             onChange={handleInput}
          />
        </div>
        <div>


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

export default EditEmail;
{/* <div className="All3">
      <h1 className="t01">ویرایش ایمیل</h1>
      <p className="t02">.ایمیل خود را ویرایش کنید</p>

      <div className="input">
        <Inputs type="email" placeholder="ایمیل" />
        <CiMail className="icon" />
      </div>

      <div className="button">
        <Link to="/verification">
          <Button value="تایید" />
        </Link>
      </div>
    </div> */}