import React, {useEffect} from 'react'
import CustNavbar from './CustNavbar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Services from '../Home/Services'
import Login from '../Home/Login'
import Contact from '../Home/Contact'

import OrderPage from './OrderPage'
import Footer from './Footer'
import auth_services from '../../Services/Customer/authantication/Auth_Services'

function CustHome(props) {

    useEffect(() => {
        const user = auth_services.getCurrentCustomer();
        if (user === null) {
          props.history.push("/login");
        }
      }, []);
    return (
        <>
        <Router>
        <CustNavbar/>
        <Switch>
        <Route exact path="/cust_home/services" component={Services} />
        <Route exact path="/cust_home/services" component={Services} />
        <Route exact path="/cust_home/order_page" component={OrderPage} />
        <Route exact path="/cust_home/contact" component={Contact} />
        <Route path="/login" component={Login} />

        </Switch>
        <Footer/>
        </Router>
        
        </>
    )
}

export default CustHome
