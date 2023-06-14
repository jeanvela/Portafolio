import React from "react";
import style from "../../styles/Navbar.module.css"

const Navbar = () => {
    return (
        <header className={style.header}>
            <span className={style.span}>Jean Pierre</span>
            <nav className={style.navbar}>
                <ul className={style.navbar_ul}>
                    <li className={style.ul_li}><a href="#Home">Home</a></li>
                    <li className={style.ul_li}><a href="#About">About</a></li>
                    <li className={style.ul_li}><a href="#Skill">Skill</a></li>
                    <li className={style.ul_li}><a href="#Proyects">Proyects</a></li>
                    <li className={style.ul_li}><a href="#Contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar