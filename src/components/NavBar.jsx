import React from 'react'
import SearchBar from './SearchBar.jsx'
import "./estilos/NavBar.css"
import { Link } from 'react-router-dom'

export default function NavBar(props) {

  return (
    <div className='contenedorNav'>
      <img className='icono' src="/icono.png" alt="" />
      <div className='divBtn'>
        <Link className='btnNav' to = '/home'> Home </Link>
      </div>
      <div className='divBtn'>
        <Link className='btnNav' to = '/about'> About </Link>
      </div>
      <div className='divBtn'>
        <Link className='btnNav' to = '/favoritos'> Favoritos </Link>
      </div>
      <div className='buscardor'>
        <SearchBar onSearch={props.onSearch} />
      </div>
      <Link className='btnLogOut' to="/">
        <button className='btnLogOut' onClick={props.logout}> Log Out </button>
        </Link>
    </div>
  )
}

