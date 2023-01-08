import { useState } from "react";
import "./estilos/SearchBar.css"


export default function SearchBar(props) {

   const [idPj, setIdPj] = useState()
   function handleChange(e){
      setIdPj(e.target.value)
   }

   return (
    <div className="Buscador">
          <input className= "Contenedor"type='search' placeholder = "  Buscar personaje" onChange={ handleChange }/>
      <button className="BotonB" onClick={() => props.onSearch(idPj) }> Añadir </button> 
      </div>
   );
}


 