import React, {useEffect} from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useGlobalContext } from '../../context'
import {OverviewActiveSelection} from "../../random";
import Submenu from "./Submenu";
import "./overview.css";


export default function Overview() {
    const navigate = useNavigate();

    const {SetMarketSegment,
            MarketSegment,
            yearOrdered,
            SetYearOrdered
        } = useGlobalContext();

    useEffect(() => {
        SetYearOrdered("all")
    }, [])

    return (
        <>
            <div className="overview-topbar">
                <h1>Year Ordered</h1>
                <div className="overview-topbar__selections">
                    <button className={yearOrdered === "all" ? "overview-topbar__selection--active" 
                    : "overview-topbar__selection" } onClick={(e) => SetYearOrdered("all")}>
                        All
                    </button>
                    <button className={yearOrdered === "twenty fourteen" ? "overview-topbar__selection--active" 
                    : "overview-topbar__selection" }  onClick={(e) => SetYearOrdered("twenty fourteen")}>
                        2014
                    </button>
                    <button className={yearOrdered === "twenty fifteen" ? "overview-topbar__selection--active" 
                    : "overview-topbar__selection" }  onClick={(e) => SetYearOrdered("twenty fifteen")}>
                        2015
                    </button>
                    <button className={yearOrdered === "twenty sixteen" ? "overview-topbar__selection--active" 
                    : "overview-topbar__selection" } onClick={(e) => SetYearOrdered("twenty sixteen")}>
                        2016
                    </button>
                    <button className={yearOrdered === "twenty seventeen" ? "overview-topbar__selection--active" 
                    : "overview-topbar__selection" } onClick={(e) => SetYearOrdered("twenty seventeen")}>
                        2017
                    </button>
                 
                   
                </div>
            </div>
            <Submenu/>
            <Outlet/>
        </>
    )
}