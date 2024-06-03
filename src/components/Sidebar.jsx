import React, { useEffect, useState } from "react";
import { NavLink, Navigate, Link, useNavigate} from "react-router-dom";
import {BsFillBarChartFill} from "react-icons/bs";
import { iconStyles, activeSidebarLinkStyles } from "../random";
import {MdSettings} from "react-icons/md";
import {IoBuild} from "react-icons/io5"

export default function Sidebar() {
    const navigate = useNavigate();

    useEffect(() => {
        if (location.pathname === "/") {
            navigate("/overview");
        }
    }, []);

    return (
        <div className="sidebar-container">
            <NavLink 
                className="sidebar-selection"
                to='overview'
                style={({isActive}) => isActive ? activeSidebarLinkStyles : null}
                >
                <BsFillBarChartFill style={iconStyles}/>
                Overview
            </NavLink>
            <NavLink
            className="sidebar-selection"
            to="create"
            style={({isActive}) => isActive ? activeSidebarLinkStyles : null}
            >
                <IoBuild style={iconStyles}/>
                Create
            </NavLink>
            <NavLink
            className="sidebar-selection"
            to="ReadMe"
            style={({isActive}) => isActive ? activeSidebarLinkStyles : null}
            >
                <MdSettings style={iconStyles}/>
                Read Me
            </NavLink>
        </div>
    )
}