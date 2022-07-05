import React, { useContext, useEffect, useState } from 'react'
import { cartContext } from '../Context/Cart';
import '../Styles/Checkout.css'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { del, get, put } from '../Api/Conexion'
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { stripePK } from "../Config"
import PaymentForm from './PaymentForm';
import Swal from 'sweetalert2'

const stripe = loadStripe(stripePK)

const ProductCheckout = () => {

    const [clientSecret, setClientSecret] = useState()
    const { items, setItems } = useContext(cartContext)
  
    let Subtotal = items.reduce((total, item) => total + (item.amount * item.price), 0);
   
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2

    })
    const deleteFromCart = (id) => {
        del("/api/cart/remove", {
            idProduct: id
        })
            .then(data => {
                setItems({
                    type: "UPDATE",
                    payload: data
                })
            })
            .catch(console.log)
    }
    const AumentarCantidad = (id, amount) => {
        put("/api/cart/changeAmount", {
            idProduct: id,
            amount: amount + 1
        })
            .then(data => {
                setItems({
                    type: "UPDATE",
                    payload: data
                })
            })
            .catch(console.log)
    }
    const DisminuirCantidad = (id, amount) => {

        if(amount===1){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'El minimo es uno'      
              })
              return
        }


        put("/api/cart/changeAmount", {
            idProduct: id,
            amount: amount - 1
        })
            .then(data => {
                setItems({
                    type: "UPDATE",
                    payload: data
                })
            })
            .catch(console.log)
    }

    useEffect(() => {
        get("/api/cart/pay")
            .then(data => {
                setClientSecret(data.clientSecret)
            })
            .catch(console.log)
    }, [])

    return (
        <div className="ContainerCart">
            <div className="Title">
                <h3>Detalle de productos del carrito</h3>
            </div>
            <div className="ContainerDetail">
                <section className="ContainerProductDetail">
                    <div className="Section">
                        <div className="CartHead">
                            <div className="ColOne">
                                <span className="ColEliminar"></span>
                                <span></span>
                            </div>
                            <div className="ColSecond">
                                <span className="ColProducto">Producto</span>
                                <span className="ProductColumn ColPrecio">Precio</span>
                                <span className="ProductColumn">Cantidad</span>
                                <span className="ProductColumn ColSubtotal">Subtotal</span>
                            </div>
                        </div>

                        <div className="CartBody">

                            {items.map(item => (

                                <div className="ProductInfo" key={item._id}>
                                    <div className="ColOne">
                                        <div className="btnEliminar"
                                            onClick={() => deleteFromCart(item._id)}>
                                            <RiDeleteBin6Line />
                                        </div>
                                        <div className="ProductImagen">
                                            <img
                                                className="ImagenItem"
                                                src={item.images[0]} alt={item.name}

                                            />
                                        </div>
                                    </div>
                                    <div className="ColSecond">
                                        <div className="ColNombreProducto Col">{item.name}</div>
                                        <div className="ProductColumn ColPrecio">
                                            <span>{formatter.format(item.price)}</span>
                                        </div>
                                        <div className="ProductColumn ColCantidad">
                                            <Button 
                                            aria-label="reduce"
                                            onClick={() => DisminuirCantidad(item._id, item.amount)}
                                            >
                                                <RemoveIcon fontSize="small" />
                                            </Button>

                                            <span className="ValorCantidad">{item.amount}</span>
                                            <Button
                                                aria-label="increase"
                                                onClick={() => AumentarCantidad(item._id, item.amount)}
                                            >
                                                <AddIcon fontSize="small" />
                                            </Button>

                                        </div>
                                        <div className="ProductColumn ColSubtotal">
                                            <span>{
                                                formatter.format(item.amount * item.price)
                                            }</span>
                                        </div>
                                    </div>
                                </div>

                            ))}

                        </div>
                    </div>
                    <div className="Aside">
                        <div className='ContainerSubtotal'>
                            <h3>TOTAL CARRITO</h3>
                            <div className='Resume'>
                                <article className='ArticleResume'>
                                    <span>Subtotal</span>
                                    <span className='labeltotal'>
                                        {formatter.format(Subtotal)}
                                    </span>
                                </article>
                                <article className='ArticleResume'>
                                    <span >Descuento</span>
                                    <span className='labeltotal'>0</span>
                                </article>
                                <article className='ArticleResume'>
                                    <span >Total</span>
                                    <span className='labeltotal'>
                                        {formatter.format(Subtotal)}
                                    </span>
                                </article>



                            </div>

                        </div>
                        {/* Provider */}
                        {clientSecret && <Elements options={{
                            clientSecret
                        }} stripe={stripe}>
                            <PaymentForm />
                        </Elements>}
                    </div>
                </section>
            </div>
        </div>
    )
}

export default ProductCheckout


{/*   */ }