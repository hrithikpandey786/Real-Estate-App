import React from "react"
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import "../../src/index.scss";

export default function Layout(){
    return(
        <div className="layout">
            <div className="navbar">
                <Navbar/>
            </div>
            <div className="content">
                <Outlet/>
            </div>
        </div>
    )
}