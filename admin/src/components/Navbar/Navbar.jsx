import React from 'react'
import "./Navbar.css"
import {assets} from '../../assets/assets'
import AppLogo from "../../../../frontend/src/assets/png/GoFoodieLogo.png"
const Navbar = () => {
  return (
    <div className="navbar">
    <div className='App-logo'>
    <img className='logo' src={AppLogo} alt="" width=''/>
    <span className=''>Admin Panel</span>
    </div>
      <img className='profile' src={assets.profile_image} alt="" />
    </div>
  )
}

export default Navbar