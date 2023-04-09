
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/signup/Signup";
import Login from './pages/login/Login';
import Verification from './pages/signup/Verificatonpage';
import EditEmail from './pages/signup/EditEmail';
import CoffeeInfo from './pages/signup/CoffeeInfo';

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
          <Route path="/verify/:email" exact Component={Verification} />
          <Route path="/login" exact Component={Login} />
          <Route path="/editEmail" exact Component={EditEmail} />
          <Route path="/coffeinfo" exact Component={CoffeeInfo} />
        </Routes>
      </div>
   </BrowserRouter>
    
  );
}

export default App;
