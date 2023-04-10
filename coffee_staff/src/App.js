
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/signup/Signup";
import Login from './pages/login/Login';
import Verification from './pages/signup/Verificatonpage';
import EditEmail from './pages/signup/EditEmail';
import CoffeeInfo from './pages/signup/CoffeeInfo';
import HomePage from './pages/Homepage';
import PassRecovery from './pages/login/PassRecovery';
import VerifyEmail from './pages/login/VerifyEmail';
import LoginEditEmail from './pages/login/LoginEditEmail';
function withProps(Component, props) {
  return function(matchProps) {
    return <Component {...props} {...matchProps} />
  }
}
function App() {
  return (
   <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" exact Component={Signup} />
          <Route path="/verify/:email?/:kind?" exact Component={Verification} />
          <Route path="/login" exact Component={Login} />
          <Route path="/editEmail/:email?" exact Component={EditEmail} />
          <Route path="/coffeinfo/:email?/:code?" exact Component={CoffeeInfo} />
          <Route path="/home" exact Component={HomePage} />
          <Route path="/passrecovery/:email?/:code?" exact Component={PassRecovery} />
          {/* <Route path="/verifyemail/:email?" exact Component={VerifyEmail} /> */}
          {/* <Route path="/logineditemail/:email?" exact Component={LoginEditEmail} /> */}
        </Routes>
      </div>
   </BrowserRouter>
    
  );
}

export default App;
