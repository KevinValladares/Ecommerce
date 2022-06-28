import React, { useContext } from 'react'
import ProductInfo from '../Components/ProductInfo'
import '../Styles/ListProduct.css'
import { get } from '../Api/Conexion'
import { useEffect } from 'react'
import { cartContext } from '../Context/Cart';

const ListProduct = () => {

  const { setItems, items } = useContext(cartContext)


  useEffect(() => {

    get("/api/products/62ba5458d8ac19de7ff3fb77")
      .then(data => {

        setItems({
          type: "UPDATE",
          payload: data.data
        })
      })

  }, [])


  return (

    <div className='ContainerProducts'>
      <ProductInfo />
    </div>

  )
}


export default ListProduct