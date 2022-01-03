import React from "react";
import "./Services.css";
import ContServices from "./ContServices";
import SideServices from "./SideServices";

function Services() {
  return (
    <>
    <div className="row">
    <ContServices/>
    <SideServices/>
    </div>
    </>
  );
}

export default Services;
