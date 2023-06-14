import React from "react";
import style from "../../styles/Proyects.module.css"

const Proyects = () => {
    return (
        <section className={style.section} id="Proyects">
            <div className={style.container}>
                <h2 className={style.h2}>PROYECTS</h2>
                <div className={style.container_proyects}>
                    <div className={style.proyects}>
                        <a className={style.links} href="https://frontend-pf-seven.vercel.app/" target="_blank"><img src="https://pm1.aminoapps.com/6810/24eb654157df51fc42d1b50e203d8aaf75250e8cv2_hq.jpg" alt="the_clean_plate" width="250px"/></a>
                        <span className={style.name_proyect}>The clean plate</span>
                        <p className={style.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur soluta tenetur fugiat veniam quia, libero similique tempore iure quae ratione cupiditate placeat dolorem facere quos doloremque quam at repellendus magni!</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Proyects