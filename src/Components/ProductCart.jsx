import React, { useContext } from 'react'
import {
    DivContainercart, DivHeadercart, DivContainterProducts, DivContainterSubtotal,
    DivProduct, DivProductdetail, DivProductimage, Productdetailname, DivProductdelete,
    ContainerFooter, PrimaryButton,ImageProductCart
} from "./ProductStyle";
import { AiOutlineClose } from 'react-icons/ai'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { cartContext } from '../Context/Cart';
import {  del } from '../Api/Conexion'


const ProductCart = ({ CerrarBox }) => {

    const { items,setItems } = useContext(cartContext)
    let Subtotal = items.reduce((total, item) => total + (item.amount * item.price), 0); 

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2

    })
   
    const deleteFromCart = (id)=>{
        del("/api/cart/remove",{
            idProduct:id
        })
        .then(data=>{
            setItems({
                type:"UPDATE",
                payload:data
            })
        })
        .catch(console.log)
    }


    return (

        <DivContainercart>
            <DivHeadercart>
                <span>{items.length} ITEM(S)</span>
                <span onClick={CerrarBox}><AiOutlineClose />  </span>
            </DivHeadercart>
            <DivContainterProducts>


                {items.map(item => (
                    <DivProduct key={item._id}>
                        <DivProductdetail>
                            <Productdetailname>{item.name}</Productdetailname>
                            <span>{`${item.amount} x ${formatter.format(item.price)}`}</span>
                        </DivProductdetail>
                        <DivProductimage>
                            <ImageProductCart src={item.images[0]} alt={items.name}/>
                        </DivProductimage>
                        <DivProductdelete>
                            <span onClick={() => deleteFromCart(item._id)}><RiDeleteBin6Line /></span>
                        </DivProductdelete>
                    </DivProduct>

                ))}





            </DivContainterProducts>


            <ContainerFooter>
                <DivContainterSubtotal>
                    <span>SUBTOTAL</span>
                    <span >{formatter.format(Subtotal)}</span>
                </DivContainterSubtotal>
                <PrimaryButton>Ver Carrito</PrimaryButton>
            </ContainerFooter>




        </DivContainercart>
    )
}

export default ProductCart