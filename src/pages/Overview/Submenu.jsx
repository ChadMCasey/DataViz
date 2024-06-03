import React from 'react'
import {IoMdArrowDropdown,IoMdDownload} from "react-icons/io";
import { useGlobalContext } from '../../context'
import { overviewSubmenus } from '../../random';



function Submenu() {
    let sub = null;

    const {
        ProductCategory, 
        region,
        shipMode,
        SetProductCategory,
        SetRegion,
        SetShipMode,
        yearOrdered,
        SetYearOrdered,
    } = useGlobalContext();

    const submenuStateValueList = [
        ProductCategory,
        region,
        shipMode,
        yearOrdered,
    ];

    const mapping = {
        "category": SetProductCategory,
        "region": SetRegion,
        "shipmode": SetShipMode,
        "year": SetYearOrdered,
    }

    const handleSubmenuClicks = (title) => {
        document.querySelectorAll(`.submenu-dropdown-list`)
        .forEach((menu) => menu.style.display = "none")

        if (document.querySelector(`.dropdown-list-item.${title}`)) {
            const setter = mapping[document.querySelector(`.dropdown-list-item.${title}`).id];
           setter(title.split("-").join(" "));
        }

        if ( document.querySelector(`.submenu-dropdown-list.${title}`) === sub) {
            sub = null;
            return;
        }

        if ( document.querySelector(`.submenu-dropdown-list.${title}`)) {
            let submenu = document.querySelector(`.submenu-dropdown-list.${title}`);
            sub = submenu;
            submenu.style.display = "block";
        } 
    } 

  return (
    <>
      <div className="overview-submenu-bar-wrapper">
            <div className="overview-dropdown-menus">
            {overviewSubmenus.map((submenu, index) => {
                const {title, dropdownOptions} = submenu;
                return (
                <button className={`overview-dropdown-menu ${title}`}
                        onClick={(e) => {e.stopPropagation(); 
                        handleSubmenuClicks(title)}} key={index}>
                    <div className="category-dropdown-text-flexbox">
                        <span 
                            className='title'>
                            {title.charAt(0).toUpperCase() + title.slice(1) + ":"} 
                        <span
                            className="dropdown-selection-text">
                            {submenuStateValueList[index]}</span></span>
                        <IoMdArrowDropdown 
                        className="dropdown-arrow-icon"/>
                    </div>
                    <div className='submenu-dropdown-list-container'>
                        <ul className={`submenu-dropdown-list ${title}`}>
                            {
                            dropdownOptions.map((dropdownItem, index) => {
                                return (
                                    <li key={index} 
                                        id={title}
                                        className={`dropdown-list-item ${dropdownItem}`} 
                                        onClick={(e) => {e.stopPropagation(); 
                                           handleSubmenuClicks(dropdownItem)}}>
                                        {dropdownItem.split("-").join(" ")}
                                    </li> 
                                    )   
                                })
                            }
                        </ul>
                    </div>
                </button>
            )})}
            </div>

        </div>
    </>
  )
}

export default Submenu
