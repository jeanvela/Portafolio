import React from "react";
import { useState } from "react";
import style from "../styles/MenuToggle.module.css"

const MenuToggle = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const handleMenuClick = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <div className={style.menu_container}>
            <button className={style.menu_toggle} onClick={handleMenuClick}>{isMenuOpen? 
                <svg width="36" height="36" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path>
                </svg> : 
                <svg width="36" height="36" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 10H3"></path>
                    <path d="M21 6H3"></path>
                    <path d="M21 14H3"></path>
                    <path d="M21 18H3"></path>
                </svg> }</button>
            {
                isMenuOpen && <nav className={style.menu}>
                <ul>
                    <li><a href="#Home" onClick={handleMenuClick}>Home</a></li>
                    <li><a href="#About" onClick={handleMenuClick}>About</a></li>
                    <li><a href="#Skill" onClick={handleMenuClick}>Skill</a></li>
                    <li><a href="#Proyects" onClick={handleMenuClick}>Proyects</a></li>
                    <li><a href="#Contact" onClick={handleMenuClick}>Contact</a></li>
                </ul>
            </nav>
            }
        </div>
        
    )
}

export default MenuToggle