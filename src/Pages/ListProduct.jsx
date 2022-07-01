import React, { useState, useContext } from 'react'
import ProductInfo from '../Components/ProductInfo'
import '../Styles/ListProduct.css'
import { get } from '../Api/Conexion'
import { useEffect } from 'react'
import { cartContext } from '../Context/Cart';

const ListProduct = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {

    get("/api/products?page=1")
      .then(({ data }) => {
        setProducts(data)
      })

  }, [])


  return (

    <div className='ContainerProducts'>

      {
        products.map(product => (
          <ProductInfo datos={product} key={product._id} />
        ))
      }



    </div>

  )
}


export default ListProduct