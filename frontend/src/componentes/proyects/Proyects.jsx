import React from "react";
import style from "../../styles/Proyects.module.css"
import TheCleanPlate from "../../img/the-clean-plate.png"

const Proyects = () => {
    return (
        <section className={style.section} id="Proyects">
            <div className={style.container}>
                <h2 className={style.h2}>PROYECTS</h2>
                <div className={style.container_proyects}>
                    <div className={style.proyects}>
                        <a className={style.links} href="https://frontend-pf-seven.vercel.app/" target="_blank"><img className={style.img} src={TheCleanPlate} alt="the_clean_plate"/></a>
                        <span className={style.name_proyect}>The clean plate</span>
                        <p className={style.description}>
                            E-commerce de ventas de productos saludables, aplicando pasarela de pagos, autenticacion de terceros, dashboard, borrado logico, cloudinary, notificaciones (mail), reviews/puntuacion y local storage
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Proyects