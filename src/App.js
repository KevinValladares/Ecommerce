import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import  Menu from './Components/Menu'
import './Styles/Global.css'

function App() {
  return (
    <div className="App">

      <Router>
        <Menu />

        <Routes>
          <Route>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Login" element={<Login />} />
            <Route exact path="/Signup" element={<Signup />} />
          </Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
