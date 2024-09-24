import React from 'react'
import { assets } from '../../assets/frontend_assets/assets'

const AppDownload = () => {
  return (
    <div id='mobile-app' className='m-auto mt-[100px] text-center font-[500]' style={{fontSize:'max(3vw,20px)'}}>
      <p>For Better Experience Download <br />Go Foodie App</p>
      <div className='flex flex-col justify-center mt-[40px] gap-3 items-center md:flex-row'>
        <img src={assets.play_store} alt='' className='w-[max(30vw, 120px)] max-w-[180px] cursor-pointer transform  hover:scale-105 transition-transform duration-300' />
        <img src={assets.app_store} alt='' className='w-[max(30vw, 120px)] max-w-[180px] cursor-pointer transform  hover:scale-105 transition-transform duration-300' />
      </div>
    </div>
  )
}

export default AppDownload