import './SubmitComment.css'
import React from 'react'
const SubmitComment = () => {
    return(
        <div style={{width:'325px' , height:'300px' , borderRadius:'5px'}}>
            <p className='submitcomment-title' style={{fontFamily:'IRANSansXBold'}}>ثبت نظر</p>
            <input type='text'  placeholder='  نظر خود را وارد کنید : '   />
            <div className="SubmitComment-line" style={{marginTop:'3px' , marginLeft:'20px' , alignItems:'center'}}></div>
            <button style={{width:'88px' , height:'41px' , borderRadius:'34px' , fontSize:'20px' , marginTop:'230px' , marginLeft:'-20px'}}>ثبت</button>  
        </div>
    )
}
export default SubmitComment ; 