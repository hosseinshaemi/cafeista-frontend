import * as React from 'react';
import CafeListForAdmin from '../../components/CafeListForAdmin/CafeListForAdmin';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const Admin = () => {
  return (
    <div>
      <div style={{ position: 'absolute', fontFamily: "IRANSansXBold" , top:50 , right:'9%'}}>
        <p style={{display:'flex' , position: 'absolute', marginTop: 22, fontSize: 20, color: '#797878' , right:80 }}>مدیر</p>
        <AccountCircleIcon style={{ fontSize: 70, color: '#C5C4C4' , right:'9%' }} />
      </div>
      <div style={{position:'revert' , top:0 , left:5 }}>
        <CafeListForAdmin />
      </div>


    </div>
  );
}

export default Admin;