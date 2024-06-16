import "./layout.scss";
import React from "react";
import Navbar from "../../components/navbar/Navbar"
import { AuthContext } from "../../context/AuthContext";
import { Outlet, Navigate } from "react-router-dom";

function Layout() {
  return (
    <div className="layout">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <Outlet/>
      </div>
    </div>
  );
}

function RequireAuth() {
  const {currentUser} = React.useContext(AuthContext);

  if(!currentUser){
    return <Navigate to="/login"/>
  }

  return (
    currentUser && <div className="layout">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <Outlet/>
      </div>
    </div>
  );
}

export  {Layout, RequireAuth};
