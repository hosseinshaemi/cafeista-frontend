import React , {useState} from "react";
import './Payment.css' ; 
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
const Payment = ({setorderlist , handlemodalpay}) => {
    
    const newOrderLoadingList = [
        {
          cafename: 'لوتوس',
          date: '1402/03/03',
          tracking_code: '12345678',
          price: '79,000',
          time: '10:20'
        },
        {
          cafename: 'لوتوس',
          date: '1402/03/03',
          tracking_code: '12345678',
          price: '79,000',
          time: '10:20'
        },
        {
          cafename:'لوتوس',
          date: '1402/03/03',
          tracking_code: '12345678',
          price: '79,000',
          time: '10:20'
        }
      ];
    
    const handlepayment = () => {
        <p style={{fontFamily:'IRANSansXBold'}}>سفارشات در حال آماده سازی...</p>
        setorderlist(newOrderLoadingList)
        handlemodalpay()
    }
    
return(
    <div style={{width:'325px' , height:'300px' , borderRadius:'5px' , zIndex:'100'}}>
        <div className="Payment">
            <div style={{marginTop:'10px'}}>
                <p className="title" style={{fontFamily:'IRANSansXLight'}}>مبلغ قابل پرداخت</p>
                <p style={{direction:'rtl' , fontFamily:'IRANSansXLight' , marginTop:'-10px' }}> 141.700 تومان</p>
            </div>
            <div style={{display:'flex' , flexDirection:'row' , justifyContent:'start'}}>
                <input type="text" placeholder="کد تخفیف" style={{width:'100px', border:'none' , position:'absolute' , right:'17.5%' , marginTop:'30px'}}></input>
                <button style={{width:'56px' , height:'36px' , borderRadius:'34px',  fontSize:'15px' , position:'absolute' , right:'57%' , marginTop:'22px'}}>بررسی</button>
                
            </div>
            <div className="Payment-line" style={{display:'flex' , justifyContent:'center' , alignItems:'center' , marginTop:'80px' , marginLeft:'20px'}}></div>
            <div style={{display:'flex' , justifyContent:'center' , marginTop:'70px'}}>
            <FormControl>
                

                
                <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                >
                <FormControlLabel 
                style={{fontFamily:'IRANSansXLight'}}
                    value="online"
                    control={<Radio/>}
                    label="پرداخت آنلاین"
                    
                />
                <FormControlLabel
                style={{fontFamily:'IRANSansXLight'}}
                    value="wallet"
                    control={<Radio />}
                    label="کیف پول"
                    
                />
                </RadioGroup>
            </FormControl>
            </div>
             <button style={{width:'88px' , height:'41px' , borderRadius:'34px'  , backgroundColor:'white' , border:'1px solid #846046', color:'#846046'  }} onClick={handlepayment}>پرداخت</button>
                
        </div>
    </div>
)
}
export default Payment ; 


