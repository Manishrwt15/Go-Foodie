import './App.css'
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home/Home"
import Cart from "./pages/Cart/Cart"
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder"

function App() {
 
  return (
    <>
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/order' element={<PlaceOrder />} />
     </Routes>
    </>
  )
}

export default App
