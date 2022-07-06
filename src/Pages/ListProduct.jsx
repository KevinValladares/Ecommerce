import React, { useState, useContext, useDeferredValue } from 'react'
import ProductInfo from '../Components/ProductInfo'
import '../Styles/ListProduct.css'
import { get } from '../Api/Conexion'
import { useEffect, useRef } from 'react'
import Paginacion from '../Components/Paginacion'

const ListProduct = () => {

  const [products, setProducts] = useState([])
  const search = useRef()
  const [numeropaginas, setNumeroPaginas] = useState(5)
  const [paginaactual, setPaginaActual] = useState()
  const [searchvalue, setSearchValue] = useState("")

  const deferredCharacter = useDeferredValue(products)

  const filterProductbyName =
    products.filter((item) => {
      return item.name.toLowerCase().includes(searchvalue);
    });


  /*   const NextPage = () => {
      get("/api/products/?page=2")
        .then((resp) => {
          setProducts(resp.data)
        })
  
    } */



  useEffect(() => {
    get(`/api/products/?page=${paginaactual}&limit=10`)
      .then((resp) => {

        setProducts(resp.data)
        setNumeroPaginas(resp.totalPages)
      })
  }, [paginaactual])




  return (

    <>

      {!deferredCharacter || Object.entries(filterProductbyName).length === 0 ?
        <p>CARGANDO DATOS, POR FAVOR ESPERE</p> :
        <div className='ListProduct'>
          <div className="SearchComponent">
            <input
              type="text"
              placeholder='Search...'
              className='SearchInput'
              onChange={(e) => setSearchValue(e.target.value)}
              value={searchvalue}
            />
          </div>
          <div className='ContainerProducts'>
            {
              filterProductbyName.map(product => (
                <ProductInfo datos={product} key={product._id} />
              ))}
          </div>
          <div className='Paginacion'>
            <Paginacion setPages={setPaginaActual} page={numeropaginas} />
          </div>


        </div>
      }
    </>


  )
}


export default ListProduct