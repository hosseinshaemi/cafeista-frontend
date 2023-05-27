
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
import Search from './pags/SearchPage/Search';
import CafeObject from './../src/pags/Components/CafeObject/CafeObject'
import Main from './pags/Main/Main';
import Navbar from './pags/Navbar/Navbar';
import Basket from './pags/Basket/Basket';
import HistoryOrder from './pags/History_Order/HistoryOrder'
import Login from "./pags/Login/Login";
import ForgotPass from "./pags/ForgotPass/ForgotPass";
import EditEmail from "./pags/Editemail/EditEmail";
import EditPass from "./pags/EditPass/EditPass";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import SignUp from "./pags/SignUp/SignUp";
import VerificationPage from "./pags/Verification1/VerificatonPage";
import VerificationPage2 from "./pags/Verification2/VerificatonPage2";
import Profile from "./pags/profile/profile";



const App=() => {
  return (
    <div className="main">
      {
       <BrowserRouter>
      <Routes>
        <Route path='/' exact Component={Login}/>
        <Route path='/Forgetpass' Component={ForgotPass}/>
        <Route path='/signup' Component={SignUp} />
        <Route path='/homepage' Component={Main}/>
        <Route path='/enterLogin' Component={Login}/>
        <Route path='/verification' Component={VerificationPage2} />
        <Route path='/Forgetpasscode' Component={VerificationPage} />
        <Route path='/Editpass' Component={EditPass} />
        <Route path='/Editemail' Component={EditEmail}/>

        <Route path='/Navbar' Component={Navbar}/>
        
        <Route path='/search' Component={Search}/>
        <Route path='/Basket' Component={Basket}/>
        <Route path='/HistoryOrder' Component={HistoryOrder}/>
        <Route path='/Profile' Component={Profile}/>
        
      </Routes>
    </BrowserRouter>
    }
    </div>
  );
}

export default App;
