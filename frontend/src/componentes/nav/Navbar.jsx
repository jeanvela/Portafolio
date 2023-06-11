import React from "react";
import style from "../../styles/Navbar.module.css"

const Navbar = () => {
    return (
        <header className={style.header}>
            <span className={style.span}>Jean Pierre</span>
            <nav className={style.navbar}>
                <ul className={style.navbar_ul}>
                    <li className={style.ul_li}>Home</li>
                    <li className={style.ul_li}>About</li>
                    <li className={style.ul_li}>Skill</li>
                    <li className={style.ul_li}>Proyects</li>
                    <li className={style.ul_li}>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar