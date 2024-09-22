import React from 'react'
import {assets} from "../../assets/frontend_assets/assets.js";

const Header = () => {
  return (
      <div className='h-[34vw] my-[30px] mx-auto relative' style={{background: `url(${assets.headerImg}) no-repeat`, backgroundSize:'cover', animation:'fadeIn 3s'}}>
      <div className='absolute flex flex-col items-start gap-[1.5vw] max-w-[50%] bottom-[5%] left-[6vw] xs:max-w-[80%] md:max-w-[65%] lg:max-w-[45%]'>
        <h2 className='text-white font-medium text-[max(4.5vw,22px)]'>Order your favourite food here</h2>
        <p className='text-white text-[1.5vw] lg:text-[0.8vw] hidden xsl:block'>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingrediants and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
        <button className='border-none text-[#747474] font-500 px-[2.3vw] py-[1vw] bg-white rounded-[50px] cursor-pointer transition duration-300 hover:bg-gray-200 hover:scale-105' style={{fontSize: 'max(1vw,13px)'}}>View Menu</button>
      </div>
      </div>
  )
}

export default Header