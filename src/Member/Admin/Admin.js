import React from 'react'
import Dashboard from './Dashboard'
// import Cars from './Pages/Cars'
// import Services from './Pages/Services'
import Washers from './Pages/Washers'
import Orders from './Pages/Orders'
import { Switch, Route, Router } from "react-router-dom";
import Home from './Pages/Home'
import Admin_Login from '../Admin_Login'
import CompletedOrders from './Pages/CompletedOrders'


function Admin() {
    return (
        <>
            <div>
                
                <Dashboard />
                <Switch>
                    <Route exact path="/admin_home" component={Home} />
                    <Route exact path="/admin_home/completedorders" component={CompletedOrders} />
                    {/* <Route exact path="/admin_home/services" component={Services} /> */}
                    <Route exact path="/admin_home/washers" component={Washers} />
                    <Route exact path="/admin_home/orders" component={Orders} />
                    <Route exact path="/admin_login" component={Admin_Login} />
                   
                   
                    </Switch>
              
            </div>
        </>
    );

}

export default Admin
