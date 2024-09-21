import React, { useState } from 'react'
import './NavBar.css';
import {assets} from '../../assets/assets';
 
const NavBar = () => {
  const [menu,setMenu] = useState("Home");

  return (
    <div className='NavBar'>
        <img src={assets.logo} alt="" className="logo" />
        <ul className="NavBar-menu">
          <li onClick={()=> setMenu("Home")} className={menu === "Home" ? "active" : ""}>Home</li>
          <li onClick={()=> setMenu("Menu")} className={menu === "Menu" ? "active" : ""}>Menu</li>
          <li onClick={()=> setMenu("Mobile-App")} className={menu === "Mobile-App" ? "active" : ""}>Mobile-App</li>
          <li onClick={()=> setMenu("Contact-Us")} className={menu === "Contact-Us" ? "active" : ""}>Contact Us</li>
        </ul>
        <div className="NavBar-right">
          <img src={assets.search_icon} alt="" />
          <div className="NavBar-search-icon">
            <img src={assets.basket_icon} alt="" />
            <div className="dot"></div>
          </div>
          <button>Sign in</button>
        </div>
    </div>
  )
}

export default NavBar