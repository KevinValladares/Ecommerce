import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import NavMenu from './Components/NavMenu'
import './Styles/Global.css'
import { authContext } from './Context/Auth';
import { cartContext } from './Context/Cart';
import { useContext, useEffect, lazy, Suspense } from 'react';
import { get } from './Api/Conexion';
import ListProduct from './Pages/ListProduct';
import ProductInfo from './Components/ProductInfo'
function App() {

  const { setUser } = useContext(authContext)
  const {setItems} = useContext(cartContext)

  // Recuperamos sesión del usuario
  useEffect(() => {
    get("/Api/auth/validate")
      .then(result => {
        setUser({ type: 'LOGIN', payload: result.user })
     get("/api/cart")
          .then(data => {
            setItems({
              type: "UPDATE",
              payload: data.data
            })
          })
          .catch(console.log) 
      })
      .catch(error => console.log(error))
  }, [setUser])




  return (
    <div className="App">

      <Router>
        <NavMenu />

        <Routes>
          <Route>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Login" element={<Login />} />
            <Route exact path="/Signup" element={<Signup />} />
            <Route exact path="/ListProducts" element={<ListProduct />} />
            <Route exact path="/ProductInfo" element={<ProductInfo />} />
          </Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
