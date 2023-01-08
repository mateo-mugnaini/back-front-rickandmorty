import React, { useState } from "react";
import { Link } from "react-router-dom";
import validate from './Validate'
import './estilos/Login.css'


export default function Login (props) {

  const [userData, setUserData] = useState({
    username: '',
    password: '',
  })
  const [error, setError] = useState({
    username:'',
    password: '',
  })

  function handleChange(e){
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    })
    setError(
      validate({
        ...userData,
        [e.target.name]: e.target.value,
      })
    )
    console.log(error)
  }

  function validateData(){
    if (error.hasOwnProperty('username') || error.hasOwnProperty('password') || error.username === '' || error.password === ''){
      return false
    } else {
      return true
    }

  }


  function handleSubmit(e){
    e.preventDefault();
    if (validateData()){
      props.Log_In(userData)
    }
  }

    return (
<div>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div>
          <div>
            <label>Username</label>
            <input
              className={error.username && 'warning'}
              type="text"
              name="username"
              placerholder="Enter username"
              onChange={(e) => handleChange(e)}
            ></input>
            <p>{error.username}</p>
          </div>
          <div>
            <label>Password</label>
            <input
              type="text"
              name="password"
              placerholder="Enter password"
              onChange={(e) => handleChange(e)}
            ></input>
            <p>{error.password}</p>
          </div>
         <Link to = {validateData() ? '/home' : '/' }>
          <button>LogIn</button>
          </Link> 
        </div>
      </form>
    </div>
  );
}