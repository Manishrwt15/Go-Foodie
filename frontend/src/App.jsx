import './App.css'
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home/Home"
import Cart from "./pages/Cart/Cart"
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder"
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import { useState } from 'react';
import LoginPopPup from './components/LoginPopUp/LoginPopPup';
import Verify from './pages/verify/Verify';

function App() {
  const [showLogin, setShowLogin] = useState(false);
 
  return (
    <>
    {showLogin? <LoginPopPup setShowLogin={setShowLogin} />:<></>}
    <div className='mx-[5vw] md:mx-[7vw] lg:mx-[10vw]'>
    <NavBar setShowLogin={setShowLogin}/>
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/order' element={<PlaceOrder />} />
      <Route path='/verify' element = {<Verify />} />
     </Routes>
     </div>
     <Footer />
    </>
  )
}

export default App