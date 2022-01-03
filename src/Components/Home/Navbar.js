import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";


function Navbar() {
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
  const activeStyle = { color: "#000000" };
  return (
    <nav className={`nav ${show && "nav__scroll"}`}>
      <a href="/">
        <img className="nav__logo" src="carwashlogo.png" alt="CAR WASH LOGO" />
      </a>
      <div
        className={`nav__container nav__borderXwidth ${
          show && "nav__containerscroll nav__borderXwidthscroll"
        }`}
      >
        <NavLink className={`nav__link ${show && "nav__linkscroll"}`} to="/">
          SERVICES
        </NavLink>

        <NavLink
          className={`nav__link ${show && "nav__linkscroll"}`}
          to="/whyus"
        >
          WHY US?
        </NavLink>
        <NavLink
          className={`nav__link ${show && "nav__linkscroll"}`}
          to="/working"
        >
          HOW IT WORKS
        </NavLink>
        <NavLink
          className={`nav__link ${show && "nav__linkscroll"}`}
          to="/contact"
        >
          CONTACT US
        </NavLink>
        <NavLink
          className={`nav__link ${show && "nav__linkscroll"}`}
          to="/login"
        >
         LOGIN
        </NavLink>
        <NavLink
          className={`nav__link ${show && "nav__linkscroll"}`}
          to="/washer_login"
          
        >
          WASHER
        </NavLink>
        <NavLink
          className={`nav__link ${show && "nav__linkscroll"}`}
          to="/admin_login"
        >
          ADMIN
        </NavLink>

        
      </div>
    </nav>
  );
}

export default Navbar;
