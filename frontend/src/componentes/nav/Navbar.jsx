import React from "react";
import style from "../../styles/Navbar.module.css"
import MenuToggle from "../../menutoggle/MenuToggle";

const Navbar = () => {
    return (
        <header className={style.header}>
            <span className={style.span}>Jean Pierre</span>
            <nav className={style.navbar}>
                <ul className={style.navbar_ul}>
                    <li className={style.ul_li}><a className={style.a} href="#Home">Home</a></li>
                    <li className={style.ul_li}><a className={style.a} href="#About">About</a></li>
                    <li className={style.ul_li}><a className={style.a} href="#Skill">Skill</a></li>
                    <li className={style.ul_li}><a className={style.a} href="#Proyects">Proyects</a></li>
                    <li className={style.ul_li}><a className={style.a} href="#Contact">Contact</a></li>
                </ul>
            </nav>
            <MenuToggle/>
        </header>
    )
}

export default Navbar