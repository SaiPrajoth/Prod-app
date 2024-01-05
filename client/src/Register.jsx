// import React from 'react'
import { useState } from 'react';
import logo from './logo.png'
import { Link } from "react-router-dom";
// import './App.css'

export default function Register() {
  const [username,setUsername]=useState('');
  const [password,setPassword]=useState('');
  // const [render,setRender]=useState(false);
  async function register(ev){
    ev.preventDefault();
    await fetch('http://localhost:3000/register',{
      method:'POST',
      headers:{
        'Content-Type': 'application/json',
      },
      body:JSON.stringify({username,password}),
      // credentials: 'include'
    })
  }

  return (
    <main>
      <header>
        <img className='logo-image' src={logo} alt="ProdApp-logo"/>
      </header>
      <div className="registration-form">
        <form action="" onSubmit={register}>
        <h1>Register</h1>
        <input type="text" placeholder='username' value={username} onChange={ev=>setUsername(ev.target.value)}/>
        <input type="password" placeholder='password' value={password} onChange={ev=>setPassword(ev.target.value)}/>
        <button type='submit'>Register</button>
        <div className="login-here">already signed up,<Link className='login-text' to='/login'>login here</Link></div>
        </form>
      </div>
      {/* <form action="" className="registration-form">
        <h1>Register</h1>
        <input type="text" placeholder='username'/>
        <input type="password" placeholder='password' />
      </form> */}
    </main>
  )
}
