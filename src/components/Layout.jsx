import React from "react";
import Sidebar from "./Sidebar";
import Logo from "./Logo";
import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <div className="main-layout">
            <div className="left-column">
                <Logo/>
                <Sidebar/>
            </div>
            <div className="right-column">
                <Outlet/>
            </div>
        </div>
    )
}