import React from 'react'

const Header = () => {
  return (
      <div className='h-[34vw] my-[30px] mx-auto relative' style={{background: "url('/header_img.png') no-repeat", backgroundSize:'contain'}}>
      <div className='absolute flex flex-col items-start gap-[1.5vw] max-w-[50%] bottom-[10%] left-[6vw]'>
        <h2 className=''>Order your favourite food here</h2>
        <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingrediants and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
        <button>View Menu</button>
      </div>
      </div>
  )
}

export default Header