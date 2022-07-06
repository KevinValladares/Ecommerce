import React from 'react'
import '../Styles/NotProduct.css'
import imgNotProduct from '../Assets/empty-cart2.png'
import {useNavigate} from 'react-router-dom'

const NotProduct = () => {
  
  const navigate= useNavigate()

const RedirectListProduct=()=>{

  navigate('/ListProducts')

}

  return (

    <div className="NotProduct">

    <div className="ContainerNotProduct">
        <img className="ImagenNotProduct" src={imgNotProduct} alt="imagen"/>
        <h3>No hay productos en el carrito</h3>
        <button className="buttonNotProduct" onClick={RedirectListProduct}>
            Compras Ahora
        </button>
    </div>


</div>

  )
}

export default NotProduct