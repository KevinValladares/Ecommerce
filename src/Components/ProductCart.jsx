import React from 'react'
import {
    DivContainercart, DivHeadercart, DivContainterProducts, DivContainterSubtotal,
    DivProduct, DivProductdetail, DivProductimage, Productdetailname, DivProductdelete, ContainerFooter,
    PrimaryButton
} from "./ProductStyle";
import { AiOutlineClose } from 'react-icons/ai'
import { RiDeleteBin6Line } from 'react-icons/ri'
import Mochila from '../Assets/mochila.jfif'
const ProductCart = ({ CerrarBox }) => {

    const VerCarrito = () => {

        alert("vercarrito")

    }



    return (

        <DivContainercart>
            <DivHeadercart>
                <span>3 ITEM(S)</span>
                <span onClick={CerrarBox}><AiOutlineClose />  </span>
            </DivHeadercart>
            <DivContainterProducts>

                <DivProduct>
                    <DivProductdetail>
                        <Productdetailname>Producto 1</Productdetailname>
                        <span>1 x $5.00</span>
                    </DivProductdetail>
                    <DivProductimage>
                        <img src={Mochila} alt="mochila" />
                    </DivProductimage>
                    <DivProductdelete>
                        <span onClick={VerCarrito}><RiDeleteBin6Line />  </span>
                    </DivProductdelete>
                </DivProduct>

                <DivProduct>
                    <DivProductdetail>
                        <Productdetailname>Producto 2</Productdetailname>
                        <span>1 x $5.00</span>
                    </DivProductdetail>
                    <DivProductimage>
                        <img src={Mochila} alt="mochila" />
                    </DivProductimage>
                    <DivProductdelete>
                        <span ><RiDeleteBin6Line />  </span>
                    </DivProductdelete>
                </DivProduct>
                <DivProduct>
                    <DivProductdetail>
                        <Productdetailname>Producto 3</Productdetailname>
                        <span>1 x $5.00</span>
                    </DivProductdetail>
                    <DivProductimage>
                        <img src={Mochila} alt="mochila" />
                    </DivProductimage>
                    <DivProductdelete>
                        <span ><RiDeleteBin6Line />  </span>
                    </DivProductdelete>
                </DivProduct>
                <DivProduct>
                    <DivProductdetail>
                        <Productdetailname>Producto 4</Productdetailname>
                        <span>1 x $5.00</span>
                    </DivProductdetail>
                    <DivProductimage>
                        <img src={Mochila} alt="mochila" />
                    </DivProductimage>
                    <DivProductdelete>
                        <span ><RiDeleteBin6Line />  </span>
                    </DivProductdelete>
                </DivProduct>
                <DivProduct>
                    <DivProductdetail>
                        <Productdetailname>Producto 5</Productdetailname>
                        <span>1 x $5.00</span>
                    </DivProductdetail>
                    <DivProductimage>
                        <img src={Mochila} alt="mochila" />
                    </DivProductimage>
                    <DivProductdelete>
                        <span ><RiDeleteBin6Line />  </span>
                    </DivProductdelete>
                </DivProduct>
                <DivProduct>
                    <DivProductdetail>
                        <Productdetailname>Producto 6</Productdetailname>
                        <span>1 x $5.00</span>
                    </DivProductdetail>
                    <DivProductimage>
                        <img src={Mochila} alt="mochila" />
                    </DivProductimage>
                    <DivProductdelete>
                        <span ><RiDeleteBin6Line />  </span>
                    </DivProductdelete>
                </DivProduct>

            </DivContainterProducts>


            <ContainerFooter>
                <DivContainterSubtotal>
                    <span>SUBTOTAL</span>
                    <span >$15.00</span>
                </DivContainterSubtotal>
                <PrimaryButton>Ver Carrito</PrimaryButton>
            </ContainerFooter>




        </DivContainercart>
    )
}

export default ProductCart