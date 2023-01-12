import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './estilos/Card.css';
import {useDispatch, useSelector} from 'react-redux'
import { addFavorites, deleteFavorites } from "../Redux/actions";

export default function Card(props) {

   const [Fav, setIsFav] = useState(false);
   const dispatch = useDispatch();
   const favoritos = useSelector((s) => s.favoritos);
 
   function handleFavorite(ch) {
     if (Fav) {
       setIsFav(false);
       dispatch(deleteFavorites(ch.id));
     } else {
       setIsFav(true);
       dispatch(addFavorites(ch));
     }
   }
 
   useEffect(() => {
    favoritos && favoritos.forEach((pj) => {
       if (pj.id === props.id) {
         setIsFav(true);
       }
     });
   }, [favoritos]);
   return (
      <div className="card">
         <div className='btnFavorito'>
            {Fav ? (
            <button className='btnFavorito' onClick={() => handleFavorite(props) }>❤️</button>
            ) : (
            <button className='btnFavorito' onClick={() => handleFavorite(props) }>🤍</button>    
            )}
         </div>
         <button className="BotonX" onClick={props.onClose}>X</button>

         <img className='Img' src={props.image} alt= {props.image} />
         
         
         <Link className='NombreLink' to={`/detalle/${props.id}`}> <h2 className='textoEncima'>{props.name}</h2> </Link> 
         
         <div className='contenedorTextos'>
         
         <h2 className='textoEspecies'>{props.species}</h2>
         
         <h2 className='textoGenero'>{props.gender}</h2>
         </div>
      </div>  
   );
}
