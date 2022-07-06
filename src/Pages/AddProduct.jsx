import React, { useState } from 'react'
import { get, post } from '../Api/Conexion'
import '../Styles/Addproduct.css'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const AddProduct = () => {

    const [data, setData] = useState({
        name: "",
        price: "",
        description: "",
        images: "",
        stock: ""
    })


    const handleFormChange = (event) => {

        const { name, value } = event.target
        setData({
            ...data,
            [name]: value
        })
    }
    const MethodCreateProduct = (event) => {
        event.preventDefault()
       
        const data2 = {
            name: data.name,
            description: data.description,
            price: data.price,
            stock: data.stock,
            images: [data.images.split(',').toString()]
        }
       post("/api/products", data2)
            .then((resp) => {
                console.log(resp)
                Swal.fire({
            
                    icon: 'success',
                    title: 'Producto creado con exito!!!',
                    showConfirmButton: false,
                    timer: 1500
                  })

                  setData({
                    name:'',
                    price:'',
                    stock:'',
                    description:'',
                    images:''
                })

            })
            .catch(error => {
                console.log(error)

            }) 


    }



    return (

        <div className='AddProduct'>
            <div className='ContainerAddProduct'>
                <h1>Crear Productos</h1>
                <form onSubmit={MethodCreateProduct} className='FormAddProduct'>
                    <div className='ContainerInput'>
                        <input
                            type="text"
                            placeholder='Nombre Producto'
                            className='InputAdd InputNombre'
                            name='name'
                            value={data.name}
                            onChange={handleFormChange}
                        />
                        <input
                            type="number"
                            min={0}
                            placeholder='Precio'
                            className='InputAdd InputPrecio'
                            name='price'
                            value={data.price}
                            onChange={handleFormChange}
                        />
                        <input
                            type="number"
                            min={0}
                            placeholder='Stock'
                            className='InputAdd InputStock'
                            name='stock'
                            value={data.stock}
                            onChange={handleFormChange}
                        />

                        <input
                            type="text"
                            min={0}
                            placeholder='Imagenes'
                            className='InputAdd InputImagen'
                            name='images'
                            value={data.images}
                            onChange={handleFormChange}
                        />

                        <textarea
                            type="text"
                            id="descripcion"
                            placeholder="Información del producto"
                            className="InputAdd InputDescripcion"
                            name='description'
                            value={data.description}
                            onChange={handleFormChange}
                        >

                        </textarea>

                    </div>
                    <input
                        className='BtnCreateProduct'
                        type="submit"
                        value="Crear Producto"
                    />

                </form>
            </div>
        </div>


    )
}

export default AddProduct


/*
 setUser({ type: 'SIGNUP', payload: user })
                Swal.fire({

                    icon: 'success',
                    title: 'Se ha creado con exito su cuenta!!!',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate("/") */