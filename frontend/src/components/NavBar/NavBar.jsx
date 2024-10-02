import React, { useContext, useState } from 'react'
import './NavBar.css';
import {assets} from "../../assets/frontend_assets/assets.js";
import GoFoodieLogo from "../../assets/png/GoFoodieLogo.png";
import {Link, useNavigate} from "react-router-dom"; 
import { StoreContext } from '../../Context/StoreContext.jsx';
const NavBar = ({setShowLogin}) => {
  const [menu,setMenu] = useState("Home");
  const {getTotalCartAmount,token,setToken} = useContext(StoreContext);
  const [isOpen, setIsOpen] = useState(false);
const navigate = useNavigate();
  const logout= ()=>{
    localStorage.removeItem("token");
    setToken('');
    navigate("/");
  }

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
          {!token ? 
            <button onClick={()=>{setShowLogin(true)}}>Sign in</button>
            :
            <div className='relative cursor-pointer' onMouseEnter={()=>setIsOpen(true)} onMouseLeave={()=>setIsOpen(false)}>
              <img src={assets.profile_icon} alt='' />
              <ul className={`${isOpen ? 'absolute right-0 z-[1] flex flex-col items-center gap-[10px] bg-[#fff2ef] py-[12px] pl-[15px] pr-[30px] rounded-[4px] border border-[#E76715] outline outline-white list-none': 'hidden'}`}>
                <li className='flex items-center gap-[10px] cursor-pointer'><img src={assets.bag_icon} alt='' className='w-[20px]'/><p className=' text-[#E76715]'>Orders</p></li>
                <hr />
                <li onClick={logout} className='flex items-center gap-[10px] cursor-pointer'> <img src={assets.logout_icon} alt='' className='w-[20px]'/><p className=' text-[#E76715]'>Logout</p></li>
              </ul>
            </div>
          }
          
        </div>
    </div>
  )
}

export default NavBar