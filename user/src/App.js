import React from 'react';
import './App.css';
import EditEmail from './pags/Editemail/EditEmail';
import EditPass from './pags/EditPass/EditPass';
import { Route , Routes , BrowserRouter } from 'react-router-dom';
import SignUp from './pags/SignUp/SignUp';
import VerificationPage2 from './pags/Verification2/Verificaton';
import Search from './pags/SearchPage/Search';
import Main from './pags/Main/Main';
import Basket from './pags/Basket/Basket';
import HistoryOrder from './pags/History_Order/HistoryOrder'
import Login from "./pags/Login/Login";
import Profile from "./pags/profile/profile";
import CafePage from './pags/CafePage/CafePage';
import Home from './pags/Home/Home';
import MyMap from './pags/Map/Map';

const App=() => {
  return (
    <div >
      {
       <BrowserRouter>
      <Routes>
        <Route path='/' exact Component={Login}/>
        <Route path='/signup' Component={SignUp} />
        <Route path='/home/*' Component={Home}/>
        <Route path='/verify/:email?/:kind?' Component={VerificationPage2} />
        <Route path='/passrecovery/:email?/:code?' Component={EditPass} />
        <Route path='/editEmail/:email?' Component={EditEmail}/>
        <Route path='/search' Component={Search}/>
        <Route path='/Basket' Component={Basket}/>
        <Route path='/HistoryOrder' Component={HistoryOrder}/>
        <Route path='/Profile' Component={Profile}/>
        <Route path='/cafepage/:key?' Component={CafePage}/>

      </Routes>
    </BrowserRouter>
    }
    </div>
  );
}

export default App;
