import React, { useState } from 'react'
import '../Styles/Login.css'
import { FcGoogle } from 'react-icons/fc'
import { FaFacebook } from 'react-icons/fa'

const Login = () => {


  const [visiblepassword, setVisiblePassword] = useState(false)




  return (

    <div className='Login'>
      <div className="Containerformlogin">

        <h1>Sign in to Best buy</h1>
        <form action="/" className='formlogin'>
          <input className='inputlogin inputlogin-email' type="text" placeholder='Email' />
          <input className='inputlogin inputlogin-password' type="text" placeholder='Password' />
          <input className='buttonlogin' type="submit" value="Iniciar sesión" />
        </form>

        <div className='lineadivisoria'>
          <div className='textolinea'>or</div>
          <div className="line"></div>
        </div>

        <div className='linkexternos'>
          <button className='buttonexterno buttongoogle'> <FcGoogle /> Iniciar con Google</button>
          <button className='buttonexterno buttonfacebook'> <FaFacebook />Iniciar con Facebook</button>
        </div>
        <div className='lineadivisoria'>
          <div className="line"></div>
        </div>

        <div className='containertosignup'>
          <span>No tienes una cuenta?</span>
          <a href="#">Crear cuenta</a>
        </div>


      </div>
    </div>


  )
}

export default Login