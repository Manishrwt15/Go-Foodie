import React from 'react'
import { menu_list } from '../../assets/frontend_assets/assets'
const ExploreMenu = ({category, setCategory}) => {
  return (
    <div id='explore-menu' className='flex flex-col gap-[20px]'>
      <h1 className='text-[#262626] text-[2.8vw] font-[500] text-[max(2vw,24px)]'>Explore our menu</h1>
      <p className='max-w-[80%] text-[#808080]'>Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
      <div className='flex justify-between items-center gap-[30px] text-center my-[20px] overflow-x-scroll scrollbar-hide'>
        {menu_list.map((item,index)=>{
          return (
            <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index}>
              <img src={item.menu_image} alt='item image' className={`${category===item.menu_name?'border border-[4px] border-[#DF5E11] p-[2px]':""} w-[7.5vw] min-w-[80px] cursor-pointer rounded-full transition-[0.2s]`}/>
              <p className='mt-[10px] text-[#747474] cursor-pointer' style={{fontSize:'max(1.4vw,16px)'}}>{item.menu_name}</p>
            </div>
          )
        })}
      </div>
      <hr className='my-[10px] h-[2px] bg-[#e2e2e2] border-none'/>
    </div>
  )
}

