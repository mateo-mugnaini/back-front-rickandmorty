import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import './estilos/Detalle.css'


export default function Detalle(){
    const { idDetalle } = useParams();
    const [characters, setCharacters] = useState({});

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${idDetalle}`)
          .then((response) => response.json())
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
  <div>
    <div>
      <h1>{characters.name}</h1>
      <h3>{characters.status}</h3>
      <p>{characters.species}</p>
      <p>{characters.gender}</p>
      <p>{characters.origin?.name}</p>
    </div>
    <img src={characters.image} alt={characters.name} />
  </div>
);
}