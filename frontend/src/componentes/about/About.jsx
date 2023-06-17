import React from "react";
import style from "../../styles/About.module.css"
import Yo from "../../img/yo.jpg"

const About = () => {
    return (
        <section className={style.section} id="About">
            <div className={style.container}>
                <div className={style.container_img}>
                    <img className={style.img} src={Yo} alt="polar" />
                    <span className={style.head}>Desarrollador Full Stack || Front-End || Back-End</span>
                </div>
                <div className={style.container_about}>
                    <h2 className={style.h2_about}>ABOUT ME</h2>
                    <p className={style.parrafo_about}>
                        ¡Hola! Soy Jean Pierre. 
                        Me apasiona el mundo de la tecnología y estoy especializado en el desarrollo web utilizando tecnologías como React, CSS, JavaScript, Redux, Node.js, Express, MongoDB, Mongoose y Tailwind CSS.
                        Desde muy joven, siempre he sentido una gran curiosidad y fascinación por la tecnología. 
                        Siempre estaba intrigado por cómo funcionaban los dispositivos electrónicos y cómo podían mejorar nuestras vidas. 
                        A medida que fui creciendo, esa pasión se transformó en un interés más profundo por la programación.
                        Recuerdo que mi primer lenguaje de programación fue JavaScript. 
                        Comencé a explorar el mundo de la programación a través de videos y tutoriales en línea. 
                        Me sorprendió la versatilidad de JavaScript y cómo podía utilizarse tanto en el lado del cliente como en el lado del servidor. 
                        Esto me motivó a profundizar mis conocimientos y a aprender más sobre el desarrollo web.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About