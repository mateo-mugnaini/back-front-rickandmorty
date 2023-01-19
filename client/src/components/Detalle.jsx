import axios from "axios";
import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import './estilos/Detalle.css'


export default function Detalle(){
    const { idDetalle } = useParams();
    const [characters, setCharacters] = useState({});

    useEffect(() => {
      axios.get(`http://localhost:3001/rickandmorty/detail/${idDetalle}`) 
          .then((response) => response.data)
          .then((char) => {
            if (char.name) {
              setCharacters(char);
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            window.alert("No hay personajes con ese ID");
          });
        return setCharacters({});
      }, [idDetalle]);

return (
    <div className="contenedorDetalle">
    <div className="contenedorTextosDetalle">
      <h1 className="NombreDetalle">Nombre:  {characters.name}</h1>
      <h3>Estado:  {characters.status}</h3>
      <p>Especie:  {characters.species}</p>
      <p>Genero:  {characters.gender}</p>
      <p>Origen:  {characters.origin?.name}</p>
    </div>
    <div className="contenedorImgDetalle">
    <img className="imgDetalle" src={characters.image} alt={characters.name} />
    </div>
  </div>
);
}