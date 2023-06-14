import React from "react";
import style from "../../styles/About.module.css"

const About = () => {
    return (
        <section className={style.section} id="About">
            <div className={style.container}>
                <div className={style.container_img}>
                    <img className={style.img} src="https://img.wattpad.com/25bb73da534ef81e284a6a3b488dc06c41f23b11/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f72627036465866576765753134513d3d2d3938313132373030332e313634373364333831653339356238383130343836373733323937322e6a7067" alt="polar" />
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