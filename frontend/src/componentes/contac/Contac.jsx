import React from "react";
import style from "../../styles/Contact.module.css"
import Linkdln from "../../icons/Linkdln";
import Github from "../../icons/Github";
import Gmail from "../../icons/Gmail";

const Contac = () => {
    return (
        <section className={style.section}>
            <div className={style.container}>
                <h2 className={style.h2}>CONTAC</h2>
                <div className={style.container_contac}>
                    <a href="" target="_blank"><Linkdln/></a>
                    <a href="" target="_blank"a><Github/></a>
                    <a><Gmail/></a>
                </div>
            </div>
        </section>
    )
}

export default Contac