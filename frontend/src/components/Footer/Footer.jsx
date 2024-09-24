import React from 'react'
import { assets } from '../../assets/frontend_assets/assets'
import GoFoodieLogo from "../../assets/png/GoFoodieLogo.png";

const Footer = () => {
  return (
    <div className='text-[#d9d9d9] bg-[#323232] flex flex-col items-center gap-[20px] pt-[80px] px-[8vw] mt-[100px]'>
        <div className='w-full flex flex-col md:grid md:grid-cols-[2fr_1fr_1fr] gap-[30px] md:gap-[80px] '>
        {/* left */}
          <div className='flex flex-col gap-[20px] items-start'>
              <img src={GoFoodieLogo} alt=''/>
              <p>Nulla labore dolore dolore veniam esse ea eu pariatur nisi et anim.</p>
              <div className='flex'>
                <img src={assets.facebook_icon} alt='' className='w-[40px] mr-[15px]'/>
                <img src={assets.twitter_icon} alt=''  className='w-[40px] mr-[15px]'/>
                <img src={assets.linkedin_icon} alt='' className='w-[40px] mr-[15px]' />
              </div>
          </div>
          {/* center */}
          <div className='flex flex-col items-start gap-[20px]'>
              <h2 className='text-white font-bold'>COMPANY</h2>
              <ul>
                <li className='mb-[10px] [list-style:none] cursor-pointer'>Home</li>
                <li className='mb-[10px] [list-style:none] cursor-pointer'>About us</li>
                <li className='mb-[10px] [list-style:none] cursor-pointer'>Delivery</li>
                <li className='mb-[10px] [list-style:none] cursor-pointer'>Privacy policy</li>
              </ul>
          </div>
             {/* right */}
             <div className='flex flex-col items-start gap-[20px]'>
              <h2 className='text-white font-bold'>GET IN TOUCH</h2>
              <ul>
                <li className='mb-[10px] [list-style:none] cursor-pointer'>+1-212-453-4342</li>
                <li className='mb-[10px] [list-style:none] cursor-pointer'>contact@GoFoodie.com</li>
              </ul>
          </div>
        </div>
        <hr className='w-full h-[2px] mt-[20px] bg-gray-600 border-none'/>
        <p className='text-center'>Copyright 2024 &copy; GoFoodie.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer