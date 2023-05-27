import './SubmitComment.css'
import React from 'react'
import TextField from '@mui/material/TextField' ;
const SubmitComment = () => {
    return(
        <div style={{width:'325px' , height:'300px' , borderRadius:'5px'}}>
            <p className='submitcomment-title' style={{fontFamily:'IRANSansXBold'}}>ثبت نظر</p>
             {/* <input type='text'  placeholder='  نظر خود را وارد کنید : '   /> */}
            {/* <div className="SubmitComment-line" style={{marginTop:'3px' , marginLeft:'20px' , alignItems:'center'}}></div> */}
            {/* <TextField style={{position:'absolute' , top:'40%' , right:'25%' }}/> */}
            <textarea style={{position:'absolute' , top:'38%' , right:'19%' , direction:'rtl' , width:'250px' , height:'100px' , fontFamily:'IRANSansXLight'}}   placeholder=' لطفا نظر خود را وارد کنید :'/>
            <button style={{width:'88px' , height:'41px' , borderRadius:'34px' , fontSize:'20px' , marginTop:'290px' , marginLeft:'-20px'}}>ثبت</button>  
        </div>
    )
}
export default SubmitComment ; 