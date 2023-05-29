import React, { useState } from "react";
import { TbEdit } from "react-icons/tb";
import { TextField } from "@mui/material";
import imagecafe from './../../img/Lotus.jpg' ; 
import {CiMail,CiWallet} from 'react-icons/ci';
import {IoPhonePortraitOutline} from 'react-icons/io5'
import {SlLocationPin , SlLock , SlPhone} from 'react-icons/sl';

const Setting = () => {

  return (
    <div>
       <div style={{flex:'1 1' , position:'fixed' , height:'85vh' , left:'30px' , right:'185px',marginBottom:"30px" , marginTop:'80px', backgroundColor:"rgb(240, 229, 212)", borderRadius:"20px"}}   >
        <div style={{display:"flex", flexDirection:"column",justifyContent:"space-between", marginTop:"30px"}}>
          
        <div style={{display:'flex' , flexDirection:'row' , justifyContent:'flex-end', alignItems:'flex-end', position:'relative' , top:'4%' , right:'4%'}}>
          <p style={{fontFamily:'IRANSansXBold',fontSize:'30px', marginRight:'30px', marginBottom:'25px' , color:'#6D523E'}}>کافه لوتوس</p>
          <img src={imagecafe} alt="image" style={{width:'120px',height:'120px' , borderRadius:'320px'}}/>
        </div>
       <div style={{display:"flex", flexDirection:"row", justifyContent:"right", margin:"30px 60px"}}>
       <div style={{width:"400px", display:"flex", flexDirection:"column", justifyContent:"space-between", gap:"20px"}}>
       <div  style={{ display:'flex',flexDirection:'row' , justifyContent:'center',alignItems:'center' , }}>
          <TextField id="standard-basic"  variant="standard" defaultValue="example@gmail.com" sx={{width:'300px'}}/>
          <CiMail style={{fontSize:'40px', color:'#6D523E', marginLeft:'30px'}}/>
        </div>

        <div  style={{ display:'flex',flexDirection:'row' , justifyContent:'center',alignItems:'center' }}>
          <TextField id="standard-basic"  variant="standard" defaultValue="09123456789" sx={{width:'300px'}} />
          <IoPhonePortraitOutline style={{fontSize:'40px', color:'#6D523E', marginLeft:'30px'}}/>
        </div>
        
        <div  style={{ display:'flex',flexDirection:'row' , justifyContent:'center',alignItems:'center'}}>
          <TextField id="standard-basic"  variant="standard" defaultValue="Hakim Nezami Street" sx={{width:'300px'}} />
          <SlLocationPin style={{fontSize:'40px', color:'#6D523E',marginLeft:'30px'}}/>
        </div>

        <div  style={{ display:'flex',flexDirection:'row' , justifyContent:'center',alignItems:'center' }}>
          <TextField id="standard-basic"  type="password" variant="standard" defaultValue="123456789" sx={{width:'300px'}} />
          <SlLock style={{fontSize:'40px', color:'#6D523E', marginLeft:'30px'}}/>
        </div>

        <div  style={{ display:'flex',flexDirection:'row' , justifyContent:'center',alignItems:'center' }}>
          <TextField id="standard-basic"  variant="standard" defaultValue="0313123456" sx={{width:'300px'}} />
          <SlPhone style={{fontSize:'40px', color:'#6D523E', marginLeft:'30px'}}/>
        </div>
      
        <div  style={{ display:'flex',flexDirection:'row' , justifyContent:'center',alignItems:'center' }}>
          <TextField id="standard-basic"  variant="standard" defaultValue="603712345678" sx={{width:'300px'}} />
          <CiWallet style={{fontSize:'40px', color:'#6D523E' , marginLeft:'30px'}}/>
        </div>
       </div>
       </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;