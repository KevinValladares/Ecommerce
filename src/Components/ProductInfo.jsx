import React, { useContext } from 'react'
import '../Styles/ProductInfo.css'
import { AiOutlineShopping, AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { cartContext } from '../Context/Cart';


const ProductInfo = () => {

    const { items } = useContext(cartContext)

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2

    })

    return (

        <div className='ContainerProducts2'>

            {items.map(item => (
                <div className="ProductItem" key={item._id}>
                    <div className="product-info" >
                        <div className='ContainerImage'>
                            <img className="ImageProduct" src={item.images[0]} alt={item.name} />
                        </div>
                        <div className='ContainerInfoOffert'>
                            <span className='NombreProducto'>{item.name}</span>
                            <span className='PrecioProducto'>{formatter.format(item.price)}</span>
                            <div className="offerDescripcion">
                                <p>{item.description}</p>
                            </div>
                        </div>
                        <div className='ContainerButton'>
                            <button className='buttonAdd'>
                                <AiOutlineShopping className='IconShop' /> Agregar al carrito
                            </button>
                            <button className='buttonFavorite'>
                                <AiOutlineHeart className='IconFavorite' />
                            </button>
                        </div>
                    </div>
                </div >
            ))}
        </div>




    )
}

export default ProductInfo


{/* <div className="ProductItem">
{items.map(item => (
    <div className="product-info" key={item._id}>
        <div className='ContainerImage'>
            <img className="ImageProduct" src={item.images[0]} alt={item.name} />
        </div>
        <div className='ContainerInfoOffert'>
            <span className='NombreProducto'>{item.name}</span>
            <span className='PrecioProducto'>{formatter.format(item.price)}</span>
            <div className="offerDescripcion">
                <p>{item.description}</p>
            </div>
        </div>
        <div className='ContainerButton'>
            <button className='buttonAdd'>
                <AiOutlineShopping className='IconShop' /> Agregar al carrito
            </button>
            <button className='buttonFavorite'>
                <AiOutlineHeart className='IconFavorite' />
            </button>
        </div>
    </div> 
))}
</div >
 */}

