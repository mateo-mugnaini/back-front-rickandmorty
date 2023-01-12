import React from "react";
import './estilos/About.css';

export default function LandingPage() {

    return(
        <div className="aboutContenedor">
          <div className="titulo"> 
          <h1> Rick & Morty </h1>
          </div>
          <div className="parrafo">
            <p> Rick y Morty una serie de televisión americana de animación para adultos creada por Justin Roiland y Dan Harmon en 2013 para Adult Swim, también se emitió en Cartoon Network. La serie sigue las desventuras de un científico, Rick Sanchez, y su fácilmente influenciable nieto, Morty, quienes pasan el tiempo entre la vida doméstica y los viajes espaciales, temporales e intergalácticos. <br /> Dan Harmon, el co-creador de la serie y Justin Roiland son los encargados de las voces principales de Morty y Rick, la serie también incluye las voces de Chris Parnell, Spencer Grammer y <br /> Sarah Chalke </p>
            <div className="Pj">
              <h1> Personajes </h1>
            </div>
            <div>
            <ul className="listaPj">
              <h2 className="tituloSecundario">Principales</h2>
                <li>Rick Sánchez</li>
                <li>Morty Smith</li>
                <li>Beth Smith</li>
                <li>Jerry Smith</li>
                <h2  className="tituloSecundario"> Secundarios </h2>
                <li> Meeseeks </li>
                <li> Sr. Pantalones de Popó </li>
                <li> Jessica</li>
              </ul>
            </div>
          </div>
      </div>
    )
}