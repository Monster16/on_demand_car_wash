import React, { useEffect, useState } from "react";
import "./CustNav.css";
import {NavLink} from "react-router-dom";
import Auth_Services from "../../Services/Customer/authantication/Auth_Services";

function CustNavbar()  {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else setShow(false);
    });
    return () => {
      window.removeEventListener("scroll", () => {
        console.log("");
      });
    };
  }, []);
  
  const logout = () => {
    Auth_Services.logout();
  };

  return (
    <nav className={`nav ${show && "nav__scroll"}`}>
      <a href="/">
        <img
          className="nav__logo"
          src="carwashlogo.png"
          alt="CAR WASH LOGO"
        />
      </a>
      <div
        className={`nav__container nav__borderXwidth ${
          show && "nav__containerscroll nav__borderXwidthscroll"
        }`}
      >
        <NavLink
          className={`nav__link ${show && "nav__linkscroll"}`}
          to="/"
        >
          SERVICES
        </NavLink>
        <NavLink
          className={`nav__link ${show && "nav__linkscroll"}`}
          to="/orderpage"
        >
          PLACE YOUR ORDER
        </NavLink>
        <NavLink
          className={`nav__link ${show && "nav__linkscroll"}`}
          to="/my_orders"
        >
         MY ORDERS
        </NavLink>
        
        <NavLink
          className={`nav__link ${show && "nav__linkscroll"}`}
          to="/contact"
        >
          CONTACT US
        </NavLink>
        <NavLink
          onClick={logout}
          className={`nav__link ${show && "nav__linkscroll"}`}
          to="/login"
        >
          LOGOUT
        </NavLink>

        
      </div>
    </nav>
  );
}

export default CustNavbar;
