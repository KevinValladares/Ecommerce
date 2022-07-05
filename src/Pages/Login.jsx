import React, { useState, useContext } from 'react'
import '../Styles/Login.css'
import { FcGoogle } from 'react-icons/fc'
import { FaFacebook } from 'react-icons/fa'
import { authContext } from '../Context/Auth'
import { useNavigate } from 'react-router-dom'
import { post } from '../Api/Conexion'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const Login = () => {


  const { setUser } = useContext(authContext)
  const navigate = useNavigate()


  const [data, setData] = useState({
    email: "",
    password: ""
  })

  const handleFormChange = (event) => {

    const { name, value } = event.target
    setData({
      ...data,
      [name]: value
    })
  }

  const Methodlogin = (event) => {
    event.preventDefault();

    post("/api/auth/login", data).then(({ user }) => {
      setUser({ type: 'LOGIN', payload: user }) //dispatch
      navigate("/")
    })
      .catch(error => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.errors[0]      
        })
      })

  }

  const RedirectSignup = () => {
    navigate('/Signup')
  }


  return (

    <div className='Login'>
      <div className="Containerformlogin">

        <h1>Iniciar sesión</h1>
        <form onSubmit={Methodlogin} className='formlogin'>
          <div>
            <input
              className='inputlogin inputlogin-email'
              type="text" placeholder='Email' name='email'
              value={data.email}
              onChange={handleFormChange}
            />
            <input
              className='inputlogin inputlogin-password'
              type="password" placeholder='Password' name='password'
              value={data.password}
              onChange={handleFormChange}
            />
            <input
              className='buttonlogin'
              type="submit"
              value="Iniciar sesión"
            />
          </div>
        </form>

        <div>
          <div className='lineadivisoria'>
            <div className='textolinea'>or</div>
            <div className="line"></div>
          </div>


          <div className='linkexternos'>
            <button className='buttonexterno buttongoogle'>
              <a href='https://backendnodejstzuzulcode.uw.r.appspot.com/api/auth/google' > <FcGoogle /> Registrarse con Google</a>
            </button>
            <button className='buttonexterno buttonfacebook'>
              <a href='https://backendnodejstzuzulcode.uw.r.appspot.com/api/auth/facebook'> <FaFacebook />Registrarse con Facebook</a>
            </button>



          </div>

        </div>


        <div className='controlbajo'>

          <div className='lineadivisoria'>
            <div className="line"></div>
          </div>


          <div className='containertosignup'>
            <span>No tienes una cuenta?</span>
            <a onClick={RedirectSignup}>Crear cuenta</a>
          </div>

        </div>


      </div>
    </div>


  )
}

export default Login