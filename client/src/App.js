import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './App.css';
import Cards from './components/Cards.jsx';
import NavBar from './components/NavBar.jsx';
import About from './components/About.jsx';
import Favoritos from './components/Favorito';
import Detalle from './components/Detalle';
import Login from './components/Login';
import axios from 'axios'


function App () {

  const [acceso, setAcceso] = useState(false);
  const username = 'admin@gmail.com';
  const password = '1234Henry-';
  const navegar = useNavigate();

  function Log_In(userData){
    if (userData.password === password && userData.username === username){
      setAcceso(true);
      navegar('/home');
      alert ('Welcome');
    } else {
      alert ('The username or the password is incorrect');
    }
  }

  function LogOut(){
    setAcceso(false);
    navegar('/');
  }

  useEffect(() => {
    !acceso && navegar('/')
  }, [acceso])

  const location = useLocation();
  
  const [characters, setCharacters] = useState([]);


  function onSearch(id) {
   axios.get(`http://localhost:3001/rickandmorty/character/${id}`)
      .then((response) => response.data)
      .then((data) => {
        if (data.name) {
          let exist = characters.find((e) => e.id === data.id);
          if (exist) {
            alert("ese personaje ya existe");
          } else {
            setCharacters((oldChars) => [...oldChars, data]);
          }
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
  }
  function onClose(id) {

    setCharacters((data) => {
      return data.filter((e) => e.id !== id);
    });
  }

  return (
    <div className='App' >
      <div>
      { location.pathname === '/' ? null : <NavBar logout= { LogOut } onSearch = { onSearch }/> }
      </div>
        <hr/>
      <Routes>
      <Route path='/' element = {<Login login = { Log_In }/>} ></Route>
      <Route path="/home" element={<Cards characters={characters} onClose={onClose} />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/favoritos" element={<Favoritos characters={characters} onClose={onClose}/>}></Route>
      <Route path="/detalle/:idDetalle" element={<Detalle />}></Route>
      </Routes>
    </div>
  )
}

export default App
