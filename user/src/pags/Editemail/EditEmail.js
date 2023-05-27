import "./EditEmail.css";
import Button from "./../Components/Button/Button";
import Inputs from "./../Components/Inputs/Inputs";
import { CiMail } from "react-icons/ci";
import "./../../Fonts/iransansX family/IRANSansX-Bold.ttf";
import "./../../Fonts/iransansX family/IRANSansX-Light.ttf";
import { Link } from "react-router-dom";

const EditEmail = () => {
  return (
    <div className="All3">
      <h1 className="t01">ویرایش ایمیل</h1>
      <p className="t02">.ایمیل خود را ویرایش کنید</p>

<<<<<<< HEAD
const EditEmail=()=> {
    return (
        <div className='main'>
        <div className='All3'>
         
          <h1 className="t01">ویرایش ایمیل</h1>
          <p className="t02">.ایمیل خود را ویرایش کنید</p>
           
          <div className='input'>
              <Inputs type='email' placeholder='ایمیل' /> 
              <CiMail className='icon'/>
          </div>
         
          
            <div className="button">
              <Link to="/verification" >
               <Button value= 'تایید' />
               </Link>
           </div> 
     
        </div> 
        </div>
    );
  }
  
  export default EditEmail;
=======
      <div className="input">
        <Inputs type="email" placeholder="ایمیل" />
        <CiMail className="icon" />
      </div>

      <div className="button">
        <Link to="/verification">
          <Button value="تایید" />
        </Link>
      </div>
    </div>
  );
};

export default EditEmail;
>>>>>>> UserProfile
