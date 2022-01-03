import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
 import Home from "./Components/Home/Home";
// import Customer from "./Components/CustomerComp/Customer";

import Admin from "./Member/Admin/Admin";
import Washer from "./Member/Washer/Washer";
import Customer from "./Customer/Customer";





function App() {
  return (
    <>
    {/* <Home/> */}
    
    <Router>
        <Switch>
          <Route  exact path="/" component={Home}/>
          <Route  path="/customer_home" component={Customer}/>
          <Route  path="/admin_home" component={Admin}/>
          <Route  path="/washer_home" component={Washer}/>
         
        </Switch>
    </Router> 
    
    
    </>
  );
}

export default App;
