// import React from 'react'
import logo from './logo.png'
import { Link } from 'react-router-dom'
// import './App.css'

export default function Login() {
  return (
    <main>
    <header>
      <img className='logo-image' src={logo} alt="ProdApp-logo"/>
    </header>
    <div className="registration-form">
      <form action="">
      <h1>Login</h1>
      <input type="text" placeholder='username'/>
      <input type="password" placeholder='password' />
      <button type='submit'>Register</button>
      <div className="register-here">did not register yet, <Link to='/register'>register here</Link></div>
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
