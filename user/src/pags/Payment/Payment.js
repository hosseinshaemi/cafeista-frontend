import React from "react";
import './Payment.css'
const Payment = () => {
return(
    <div style={{width:'325px' , height:'300px' , borderRadius:'5px'}}>
        <div className="Payment">
            <div style={{marginTop:'10px'}}>
                <p className="title" style={{fontFamily:'IRANSansXLight'}}>مبلغ قابل پرداخت</p>
                <p style={{direction:'rtl' , fontFamily:'IRANSansXLight' , marginTop:'-10px' }}> 141.700 تومان</p>
            </div>
            <div style={{ justifyContent:'center' , alignItems:"center"}}>
                <input type="text" placeholder="کد تخفیف" style={{ marginTop:'30px' , width:'120px' , marginLeft:'98px'}}></input>
                <button style={{width:'66px' , height:'36px' , borderRadius:'34px', float:'left' , marginTop:'-40px' ,marginLeft:'20px'}}>بررسی</button>
                <div className="Payment-line" style={{marginTop:'3px' , marginLeft:'20px' , alignItems:'center'}}></div>
                </div>
            
            
            <p style={{marginLeft:'130px' , fontSize:'13px' , fontFamily:'IRANSansXLight' , position:'absolute' , bottom:'285px'}}>کیف پول</p>
            <input type="radio" name="payment" className="Payment-wallet" style={{marginLeft:'250px'}}/>

            <p style={{marginLeft:'-30px' , marginRight:'100px', fontSize:'13px' , fontFamily:'IRANSansXLight' , marginBottom:'40px' , position:'absolute' , bottom:'255px'}}>پرداخت آنلاین</p>
            <input type="radio" name="payment" className="Payment-wallet" style={{marginLeft:'-10px' , marginRight:'20px'}}/>
            
        

             <button style={{width:'88px' , height:'41px' , borderRadius:'34px' , bottom:'230px' , backgroundColor:'white' , border:'1px solid #846046', color:'#846046'}}>پرداخت</button>
                  
        </div>
    </div>
)
}
export default Payment ; 
