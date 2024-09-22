import './App.css'
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home/Home"
import Cart from "./pages/Cart/Cart"
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder"
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

function App() {
 
  return (
    <>
    <div className='mx-[5vw] md:mx-[7vw] lg:mx-[10vw]'>
    <NavBar />
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/order' element={<PlaceOrder />} />
     </Routes>
     </div>
     <Footer />
    </>
  )
}

export default App
