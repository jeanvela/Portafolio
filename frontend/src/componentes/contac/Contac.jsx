import React from "react";
import style from "../../styles/Contact.module.css"
import Linkdln from "../../icons/Linkdln";
import Github from "../../icons/Github";
import Gmail from "../../icons/Gmail";

const Contac = () => {
    return (
        <section className={style.section} id="Contact">
            <div className={style.container}>
                <h2 className={style.h2}>CONTAC</h2>
                <div className={style.container_contac}>
                    <div className={style.contacs}>
                        <a href="" target="_blank"><Linkdln/></a>
                    </div>
                    <div className={style.contacs}>
                        <a href="https://github.com/jeanvela" target="_blank"a><Github/></a>
                    </div>
                    <div className={style.contacs}>
                        <a><Gmail/></a>
                        <span>alejandrovelaarana@gmail.com</span>
                    </div>                  
                </div>
            </div>
        </section>
    )
}

export default Contac