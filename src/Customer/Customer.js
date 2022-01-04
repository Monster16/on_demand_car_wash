import React from 'react'
import Dashboard from './Dashboard'
import BookOrder from './Pages/BookOrder';
import Services from './Pages/Services';

// import Cars from './Pages/Cars'
// import Services from './Pages/Services'
// import Washers from './Pages/Washers'
// import Orders from './Pages/Orders'
import { Switch, Route, Router } from "react-router-dom";
import MyOrder from './Pages/MyOrder';
import CustomerHome from './Pages/CustomerHome';
// import Home from './Pages/Home'
// import Admin_Login from '../Admin_Login'

function Customer() {
    return (
        <>
            <div>
                
                <Dashboard />
                <Switch>
                    <Route exact path="/customer_home" component={CustomerHome} />
                    <Route exact path="/customer_home/bookorders" component={BookOrder} />
                    <Route exact path="/customer_home/myorders" component={MyOrder} />
                    <Route exact path="/customer_home/services" component={Services} />
                    {/* <Route exact path="/admin_home/washers" component={Washers} /> */}
                    {/* <Route exact path="/admin_home/orders" component={Orders} /> */}
                    {/* <Route exact path="/admin_login" component={Admin_Login} /> */}
                   
                    </Switch>
              
            </div>
        </>
    );

}

export default Customer
