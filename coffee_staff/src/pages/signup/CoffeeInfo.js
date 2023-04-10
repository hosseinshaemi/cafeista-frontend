import React from "react";
import { Link } from "react-router-dom";
import backgroundImg from "../../img/background.png";
import "./Verificationpage.css"
import "../../components/Form.css";
import {MdOutlineStorefront} from "react-icons/md";
import {GrLocation} from "react-icons/gr"
import SignUp from "../../components/User_SignUp/SignUp";
import Button from "../../components/Button/Button";
import {AiOutlinePhone} from "react-icons/ai";
import {BsCreditCard2Back} from "react-icons/bs";
const styles = {
  display: "flex",
  backgroundImage: `url(${backgroundImg})`,
};

const CoffeeInfo =()=>{
    return(
        <div className="verify" style={styles}>
        <div className="rectanglee">
          <div class="headerText">اطلاعات کافه</div>
          <p className="createAccount">اطلاعات خواسته‌شده را بادقت تکمیل کنید</p>
          <div style={{display: "flex", marginTop:"150px"}}>
      <div className="signup">
        <div className="input">
          <SignUp type="text" placeholder="نام کافه" />
          <MdOutlineStorefront className="icon" style={{marginRight: "-20px",width:"20px",height:"20px",}}/>
        </div>
        <div className="input">
          <SignUp type="text" placeholder="شماره تماس" />
          <AiOutlinePhone className="icon"style={{marginRight: "-20px",width:"20px",height:"20px",}} />
        </div>
        <div className="input">
          <SignUp type="text" placeholder="آدرس" />
          <GrLocation className="icon" style={{marginRight: "-20px",width:"20px",height:"20px",}}/>
        </div>
        <div className="input">
          <SignUp type="text" placeholder="شماره حساب" />
          <BsCreditCard2Back className="icon"style={{marginRight: "-20px",width:"20px",height:"20px",}} />
          
        </div>
        
      </div>
      
    </div>
  <div style={{marginTop: "30px",}} >
           <Link to="/home" className="signup_btn" >   
            <Button value="تایید و ثبت اطلاعات"/>
            </Link>
          </div>
          
        </div>
        
      </div>
    );
}
export default CoffeeInfo;