import React from 'react'
import SearchBar from './SearchBar.jsx'
import "./estilos/NavBar.css"
import { Link } from 'react-router-dom'

export default function NavBar(props) {

  return (
    <div className='contenedorNav'>
      <img className='icono' src="/icono.png" alt="" />
      <div className='btnNav'>
        <Link to = '/home'> Home </Link>
      </div>
      <div className='btnNav'>
        <Link to = '/about'> About </Link>
      </div>
      <div className='btnNav'>
        <Link to = '/favoritos'> Favoritos </Link>
      </div>
      <div className='btnNav'>
        <SearchBar onSearch={props.onSearch} />
      </div>
      <Link className='btnLogOut' to="/">
        <button onClick={props.logout}> Log Out </button>
        </Link>
    </div>
  )
}

