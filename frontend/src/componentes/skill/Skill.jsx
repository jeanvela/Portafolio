import React from "react";
import ReactJs from "../../icons/React"
import JavaScript from "../../icons/JavaScript";
import Css from "../../icons/Css";
import Express from "../../icons/Express";
import Html from "../../icons/Html";
import NodeJs from "../../icons/NodeJs";
import MongoDb from "../../icons/MongoDb";
import Mongoose from "../../icons/Mongoose";
import Redux from "../../icons/Redux";
import TailwindCss from "../../icons/TailwindCss";
import PostgreSql from "../../icons/PostgreSql";
import style from "../../styles/Skill.module.css"

const Skill = () => {
    return (
        <section className={style.section}>
            <div className={style.container}>
                <h2 className={style.h2}>SKILL</h2>
                <div className={style.container_skill}>
                    <ReactJs/>
                    <JavaScript/>
                    <Html/>
                    <Css/>
                    <Redux/>
                    <TailwindCss/>
                    <NodeJs/>
                    <Express/>
                    <MongoDb/>
                    <Mongoose/>
                    <PostgreSql/>
                </div>
            </div>
        </section>
    )
}

export default Skill