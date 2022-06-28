import React, { useState, useContext } from 'react'
import '../Styles/Login.css'
import '../Styles/Signup.css'
import { FcGoogle } from 'react-icons/fc'
import { FaFacebook } from 'react-icons/fa'
import { authContext } from '../Context/Auth'
import { useNavigate } from 'react-router-dom'
import { post } from '../Api/Conexion'


const Signup = () => {

  const {setUser} = useContext(authContext)
  const navigate = useNavigate()

  const [data, setData] = useState({
    name:"",
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


  const Methodsignup = (event)=>{
    event.preventDefault()

    post("/api/auth/signup",data).then(({user})=>{
      console.log(user)
        setUser({type:'SIGNUP',payload:user})
        navigate("/")
    })
    .catch(error=>{
        console.log(error)
      
    })

}



  return (
    <div className='signup'>
    <div className="Containerformsignup">

      <h1>Crear una cuenta</h1>
      <form onSubmit={Methodsignup} className='formsignup'>
       
      <input
          className='inputsignup inputsignup-name'
          type="text" placeholder='Nombre' name='name'
          value={data.name}
          onChange={handleFormChange}
        />
       
        <input
          className='inputsignup inputsignup-email'
          type="text" placeholder='Email' name='email'
          value={data.email}
          onChange={handleFormChange}
        />
        <input
          className='inputsignup inputsignup-password'
          type="password" placeholder='Password' name='password'
          value={data.password}
          onChange={handleFormChange}
        />
        <input
          className='buttonsignup'
          type="submit"
          value="Crear Cuenta"
        />
      </form>

      <div className='lineadivisoria'>
        <div className='textolinea'>or</div>
        <div className="line"></div>
      </div>


      <div className='linkexternos'>
        <button  className='buttonexterno buttongoogle'>
          <a href='https://backendnodejstzuzulcode.uw.r.appspot.com/api/auth/google'> <FcGoogle /> Registrarse con Google</a>
        </button>
        <button className='buttonexterno buttonfacebook'>
        <a href='https://backendnodejstzuzulcode.uw.r.appspot.com/api/auth/facebook'> <FaFacebook />Registrarse con Facebook</a>    
           </button>
      </div>



    </div>
  </div>
  )
}

export default Signup