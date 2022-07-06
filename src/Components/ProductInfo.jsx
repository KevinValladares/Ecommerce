import React, { useContext, useState } from 'react'
import '../Styles/ProductInfo.css'
import { AiOutlineShopping, AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { cartContext } from '../Context/Cart';
import { post } from '../Api/Conexion'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const ProductInfo = ({ datos }) => {

    const { setItems, items } = useContext(cartContext)
    const [buttonenable,setButtonEnable] = useState()

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2

    })

    const addToCart = (id) => {
        setButtonEnable(true)
        post("/api/cart/add", {
            idProduct: id,
            amount: 1
        }).then(data => {
           
            setItems({
                type: "UPDATE",
                payload: data
            })
            Swal.fire({
            
                icon: 'success',
                title: 'Producto Agregado',
                showConfirmButton: false,
                timer: 1000
              })
              setButtonEnable(false)

        }).catch(error => {
            console.log(error);

        })
    }


    return (



        <div className="ProductItem">

            <div className="product-info" >
                <div className='ContainerImage'>
                    <img className="ImageProduct" src={datos.images[0]} alt={datos.name} />
                </div>
                <div className='ContainerInfoOffert'>
                    <span className='NombreProducto'>{datos.name}</span>
                    <span className='PrecioProducto'>{formatter.format(datos.price)}</span>
                   {/*  <div className="offerDescripcion">
                        <p>{datos.description.substring(0, 40).toLowerCase()}</p>
                    </div> */}
                </div>
                <div className='ContainerButton'>
                    <button 
                    disabled={buttonenable}
                    className='buttonAdd' 
                    onClick={() => addToCart(datos._id)}>
                        <AiOutlineShopping className='IconShop' /> Agregar al carrito
                    </button>
                    <button className='buttonFavorite'>
                        <AiOutlineHeart className='IconFavorite' />
                    </button>
                </div>
            </div>
        </div >





    )
}

export default ProductInfo



