import React from "react";
import About from "../about/About";
import Skill from "../skill/Skill"
import Proyects from "../proyects/Proyects"
import Contac from "../contac/Contac";

const Home  = () => {
    return (
        <main>
            <section>
               <h1>Hola Mundo</h1>
            </section>
            <About></About>
            <Skill></Skill>
            <Proyects></Proyects>
            <Contac></Contac>
        </main>
    )
}

export default Home