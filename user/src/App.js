import React from 'react';
import './App.css';
import Login from "./pags/Login/Login" 
import ForgotPass from './pags/ForgotPass/ForgotPass';
import EditEmail from './pags/Editemail/EditEmail';
import EditPass from './pags/EditPass/EditPass';
import { Route , Routes , BrowserRouter } from 'react-router-dom';
import SignUp from './pags/SignUp/SignUp';
import VerificationPage from './pags/Verification1/VerificatonPage';
import VerificationPage2 from './pags/Verification2/VerificatonPage2';
import Basket from './pags/Basket/Basket';
import HistoryOrder from './pags/History_Order/HistoryOrder'



const App=() => {
  return (
    <div className="main">
    {/* <Login /> 
        <ForgotPass />
        <EditEmail />
        <EditPass />
        <VerificationPage/>
        
    */}


    <BrowserRouter>
      <Routes>
        <Route path='/' exact Component={Login}/>
        <Route path='/Forgetpass' Component={ForgotPass}/>
        <Route path='/signup' Component={SignUp} />
        <Route path='/main' />
        <Route path='/enterLogin' Component={Login}/>
        <Route path='/verification' Component={VerificationPage2} />
        <Route path='/Forgetpasscode' Component={VerificationPage} />
        <Route path='/Editpass' Component={EditPass} />
        <Route path='/Editemail' Component={EditEmail}/>
        <Route path='/Basket' Component={Basket}/>
        <Route path='/HistoryOrder' Component={HistoryOrder}/>
        
      </Routes>
    </BrowserRouter>

    

       
      
    </div>
  );
}

export default App;
