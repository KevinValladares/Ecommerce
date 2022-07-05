import React,{useState} from 'react'
import {
    PaymentElement,
    useStripe,
    useElements
} from "@stripe/react-stripe-js";
import { useContext } from 'react';
import { cartContext } from '../Context/Cart';
import { useNavigate } from 'react-router-dom'
import '../Styles/PaymentForm.css'
import Swal from 'sweetalert2'

export default function PaymentForm() {

    const stripe = useStripe();
    const elements = useElements();
    const { setItems } = useContext(cartContext)
    const [buttonenable, setButtonEnable] = useState(false)

    const navigate = useNavigate()

    const pay = async (event) => {
        event.preventDefault()
        setButtonEnable(true)

        const result = await stripe.confirmPayment({
            elements,
            redirect: "if_required"
        });

        console.log(result)



        if (result.error.type === "card_error") {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: result.error.message
            })
            setButtonEnable(false)
            return
        }

        if (result.paymentIntent.status === "succeeded") {
            setItems({
                type: "CLEAR"
            })
            Swal.fire({

                icon: 'success',
                title: 'Compra realizada Exitosamente!!!',
                showConfirmButton: false,
                timer: 1000
            })
            setButtonEnable(false)
            navigate("/")
        }
    }
    return (
        <div>
            <form onSubmit={pay} className='FormPay'>
                <PaymentElement id="payment-element"></PaymentElement>
                <button
                    className='ButtonPay'
                    
                >
                Pagar
                </button>
            </form>
        </div>
    )
}