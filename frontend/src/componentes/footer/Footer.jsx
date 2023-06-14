import React from "react";
import style from "../../styles/Footer.module.css"

const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className={style.container}>
                <span className={style.name}>Jean Pierre</span>
                <p className={style.p}>contact</p>
                <div className={style.contac}>
                    <div className={style.logo}>
                        <a className={style.links} href="https://github.com/jeanvela" target="_blank" rel="noopener noreferrer">
                            <svg width="26" height="26" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2.246c-5.525 0-10 4.475-10 10a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.475 0-.238-.013-1.025-.013-1.863C7 19.86 6.35 18.784 6.15 18.221c-.113-.287-.6-1.175-1.025-1.412-.35-.188-.85-.65-.013-.663.788-.012 1.35.725 1.538 1.025.9 1.513 2.338 1.088 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.087.387-1.987 1.025-2.687-.1-.25-.45-1.275.1-2.65 0 0 .837-.263 2.75 1.025a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.113 2.5.338 1.912-1.3 2.75-1.025 2.75-1.025.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.575.688.475A10.015 10.015 0 0 0 22 12.246c0-5.525-4.475-10-10-10Z"></path>
                            </svg>
                        </a>              
                        <span>Github</span>
                    </div>
                    <div className={style.logo}>
                        <a className={style.links} href="https://www.linkedin.com/in/jean-pierre-vela-arana-78a571253/" target="_blank" rel="noopener noreferrer">
                            <svg width="26" height="26" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 3.433C2 2.64 2.658 2 3.469 2H20.53c.813 0 1.47.641 1.47 1.433v17.134C22 21.36 21.343 22 20.531 22H3.47C2.658 22 2 21.359 2 20.567V3.433Zm6.179 15.31V9.71H5.177v9.031H8.18Zm-1.5-10.265c1.046 0 1.697-.693 1.697-1.56-.018-.887-.65-1.56-1.677-1.56C5.67 5.357 5 6.032 5 6.918c0 .867.651 1.56 1.659 1.56h.02Zm6.135 10.264V13.7c0-.27.02-.54.1-.733.216-.538.71-1.097 1.54-1.097 1.086 0 1.52.827 1.52 2.042v4.832h3.001v-5.18c0-2.776-1.48-4.066-3.455-4.066-1.592 0-2.306.876-2.706 1.492v.031h-.02l.02-.031V9.71h-3c.037.848 0 9.031 0 9.031h3Z"></path>
                            </svg>
                        </a>
                        <span>Linkdln</span>
                    </div>
                    <div className={style.logo}>
                        <a className={style.links} href="mailto:alejandrovelaarana@gmail.com" target="_blank" rel="noopener noreferrer">
                            <svg width="26" height="26" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.46 6.666A2.4 2.4 0 0 1 4.8 4.8h14.4a2.4 2.4 0 0 1 2.34 1.866L12 12.496l-9.54-5.83Zm-.06 1.37v8.525l6.964-4.27L2.4 8.037Zm8.114 4.96L2.63 17.828A2.401 2.401 0 0 0 4.8 19.2h14.4a2.4 2.4 0 0 0 2.17-1.373l-7.884-4.832-1.486.908-1.486-.908Zm4.123-.703L21.6 16.56V8.036l-6.963 4.255v.002Z"></path>
                            </svg>
                        </a>
                        <span>Gmail</span>
                    </div>
                </div>
            </div>
            <div>
                <p className={style.p}>2023</p>
            </div>
        </footer>
    )
}

export default Footer