import React from "react";
import About from "../about/About";
import Skill from "../skill/Skill"
import Proyects from "../proyects/Proyects"
import Contac from "../contac/Contac";
import style from "../../styles/Home.module.css"

const Home  = () => {
    return (
        <main className={style.main}>
            <section className={style.section}>
                <div className={style.container}>
                    <span className={style.span}>Hola 👋, soy</span>
                    <h1 className={style.h1_name}>Jean Pierre</h1>
                    <h2 className={style.h2_name}>Vela Arana</h2>
                    <p className={style.parrafo}>Desarrollador Full Stack, apasionado por el desarrollo Back-End y Front-End.</p>
                </div>
                <div className={style.container_btns}>
                    <button className={style.btn}>Descarga CV</button>
                    <button className={style.btn}>Contáctame</button>
                </div>
            </section>
            <About></About>
            <Skill></Skill>
            <Proyects></Proyects>
            <Contac></Contac>
        </main>
    )
}

export default Home