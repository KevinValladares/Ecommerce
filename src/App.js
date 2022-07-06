import { Routes, Route } from 'react-router-dom'
//import Home from './Pages/Home'; 
//import Login from './Pages/Login';
//import Signup from './Pages/Signup';
//import ListProduct from './Pages/ListProduct';
//import NotProduct from './Pages/NotProduct'

import NavMenu from './Components/NavMenu'

import ProductInfo from './Components/ProductInfo'

import './Styles/Global.css'
import { authContext } from './Context/Auth';
import { cartContext } from './Context/Cart';
import { useContext, useEffect, lazy, Suspense } from 'react';
import { get } from './Api/Conexion';


const Home = lazy(() => import('./Pages/Home'));
const Login = lazy(() => import('./Pages/Login'));
const Signup = lazy(() => import('./Pages/Signup'));
const ListProduct = lazy(() => import('./Pages/ListProduct'));
const NotProduct = lazy(() => import('./Pages/NotProduct'));
const ProductCheckout = lazy(() => import('./Components/ProductCheckout'));
const AddProduct = lazy (()=> import('./Pages/AddProduct') );


function App() {

  const { setUser } = useContext(authContext)
  const { setItems } = useContext(cartContext)

  // Recuperamos sesión del usuario
  useEffect(() => {
    get("/Api/auth/validate")
      .then(result => {
        
        setUser({ type: 'LOGIN', payload: result.user })

        get("/api/cart")
          .then(data => {
            setItems({
              type: "UPDATE",
              payload: data
            })
          })
          .catch(console.log)
      })
      .catch(error => console.log(error))
  }, [setUser])




  return (
    <>

      <NavMenu />
      <Suspense fallback={"cargando"}>
        <Routes>
          <Route>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Login" element={<Login />} />
            <Route exact path="/Signup" element={<Signup />} />
            <Route exact path="/ListProducts" element={<ListProduct />} />
            <Route exact path="/Checkout" element={<ProductCheckout />} />
            <Route exact path="/NotProduct" element={<NotProduct />} />
            <Route exact path="/AddProduct" element={<AddProduct/>}/>
          </Route>
        </Routes>

      </Suspense>

    </>
  );
}

export default App;
