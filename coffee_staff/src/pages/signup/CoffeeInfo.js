import React, {useState} from "react";
import { Link, useParams } from "react-router-dom";
import backgroundImg from "../../img/background.jpg";
import "./Verificationpage.css";
import "../../components/Form.css";
import { MdOutlineStorefront } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import SignUp from "../../components/User_SignUp/SignUp";
import Button from "../../components/Button/Button";
import { AiOutlinePhone } from "react-icons/ai";
import { BsCreditCard2Back } from "react-icons/bs";
import Inputs from "../../components/User_SignUp/Components/Inputs/Inputs";
const styles = {
  display: "flex",
  backgroundImage: `url(${backgroundImg})`,
};

const CoffeeInfo = () => {
  const { email, code } = useParams();
  const [inputs, setInputs] = useState({
    cafename: "",
    cafephonenumber: "",
    address: "",
    location: "",
    accountNumber:""
  });
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  return (
    <div className="verify" style={styles}>
      <div className="rectanglee">
        <div class="headerText">اطلاعات کافه</div>
        <p className="createAccount">اطلاعات خواسته‌شده را بادقت تکمیل کنید</p>
        <div style={{ display: "flex", marginTop: "150px" }}>
          <div className="signup">
          <div className="input">
                <Inputs
                  type="text"
                  name="cafename"
                  value={inputs.cafename || ""}
                  onChange={handleChange}
                  placeholder="نام کافه "
                />
                <MdOutlineStorefront className="icon" />
              </div>
              <div className="input">
                <Inputs
                  type="text"
                  name="cafephonenumber"
                  value={inputs.cafephonenumber || ""}
                  onChange={handleChange}
                  placeholder="شماره تماس"
                />
                <AiOutlinePhone className="icon" />
              </div>
            <div className="input">
                <Inputs
                  type="location"
                  name="cafename"
                  value={inputs.location || ""}
                  onChange={handleChange}
                  placeholder="آدرس"
                />
                <GrLocation className="icon" />
              </div>
            <div className="input">
                <Inputs
                  type="text"
                  name="cafename"
                  value={inputs.accountNumber || ""}
                  onChange={handleChange}
                  placeholder="شماره حساب"
                />
                <BsCreditCard2Back className="icon" />
              </div>
          </div>
        </div>
        <div style={{ marginTop: "30px" }}>
          <Link to="/location" className="signup_btn">
            <Button value="تایید و ثبت اطلاعات" />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default CoffeeInfo;
