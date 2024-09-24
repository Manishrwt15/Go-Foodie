import React, { useContext, useState } from 'react'
import './NavBar.css';
import {assets} from "../../assets/frontend_assets/assets.js";
import GoFoodieLogo from "../../assets/png/GoFoodieLogo.png";
import {Link} from "react-router-dom"; 
import { StoreContext } from '../../Context/StoreContext.jsx';
const NavBar = ({setShowLogin}) => {
  const [menu,setMenu] = useState("Home");
  const {getTotalCartAmount} = useContext(StoreContext);
  return (
    <div className='NavBar'>
        <Link to='/'><img src={GoFoodieLogo} alt="" className="logo h-[5.4vw] w-[15vw] min-w-[5rem] min-h-[2rem]" /></Link>
        <ul className="NavBar-menu">
          <Link to="/" onClick={()=> setMenu("Home")} className={menu === "Home" ? "active" : ""}>Home</Link>
          <a href="#explore-menu" onClick={()=> setMenu("Menu")} className={menu === "Menu" ? "active" : ""}>Menu</a>
          <a href='#mobile-app' onClick={()=> setMenu("Mobile-App")} className={menu === "Mobile-App" ? "active" : ""}>Mobile-App</a>
          <a href='#contact-us' onClick={()=> setMenu("Contact-Us")} className={menu === "Contact-Us" ? "active" : ""}>Contact Us</a>
        </ul>
        <div className="NavBar-right">
          <img src={assets.search_icon} alt="" />
          <div className="NavBar-search-icon">
            <Link to="/cart"><img src={assets.basket_icon} alt="" /></Link>
            <div className={getTotalCartAmount()===0?"":"dot"}></div>
          </div>
          <button onClick={()=>{setShowLogin(true)}}>Sign in</button>
        </div>
    </div>
  )
}

export default NavBar