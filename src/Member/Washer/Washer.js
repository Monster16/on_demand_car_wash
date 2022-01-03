import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Washer_Login from '../Washer_Login'
import Dashboard from './Dashboard'
import Home from './Pages/Home'
import FindOrders from './Pages/FindOrders'
import MyOrders from './Pages/MyOrders'


function Washer() {
    return (
        <div>
            <Dashboard />

            <Switch>
                    <Route  path="/washer_home" component={Home} />
                    <Route  path="/washer_home/findorders" component={FindOrders} />
                    <Route  path="/washer_home/myorders" component={MyOrders} />
                    <Route  path="/washer_login" component={Washer_Login} />
                   
                   
                    </Switch>
        </div>
    )
}

export default Washer
