import React, { useState } from 'react';
import Kodigo from "../assets/kodigoLogo.png"
import Home from "../assets/home.png"
import Buscar from "../assets/buscar.svg"
import styles from "../styles/Header.module.css"
import { Link } from 'react-router-dom';

export default function Header({ setResultados }){


    return(
        <nav className={styles.header}>
            <Link to = "/">
                <img  src = {Kodigo} className={styles.logo}/>
            </Link>
            
            <section className={styles.centro}>
                 <Link to = "/"><img src = {Home} className={styles.icons}/></Link>
                <Link to = "/search" className={styles.btnbuscar}>
                <img  className={styles.icons} src = {Buscar}/>
                </Link>
            
            </section>
            <Link to="/contact"
             className={styles.sesion}>
                Iniciar sesion
             </Link>


        </nav>
    )
}