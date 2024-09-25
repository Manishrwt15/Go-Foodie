import React, { useContext } from 'react'
import { StoreContext } from '../../Context/StoreContext'

const PlaceOrder = () => {
  const {getTotalCartAmount} = useContext(StoreContext)
  return (
    <form className='flex flex-col items-start justify-between gap-[50px] mt-[100px] md:flex-row'>
    {/* placeOrder left */}
      <div className='w-full max-w-[max(30%,500px)]'>
        <p className='text-[30px] font-[600] mb-[50px]'>Delivery Information</p>
        <div className='flex gap-[10px]'>
          <input type='text' placeholder='First Name' className='w-full mb-[15px] p-[10px] border border-[#c5c5c5] rounded-[4px] outline-[#DF5E11]'/>
          <input type='text' placeholder='Last Name' className='w-full mb-[15px] p-[10px] border border-[#c5c5c5] rounded-[4px] outline-[#DF5E11]'/>
        </div>
        <input type='text' placeholder='Email address' className='w-full mb-[15px] p-[10px] border border-[#c5c5c5] rounded-[4px] outline-[#DF5E11]'/>
        <input type='text' placeholder='Street' className='w-full mb-[15px] p-[10px] border border-[#c5c5c5] rounded-[4px] outline-[#DF5E11]'/>
        <div className='flex gap-[10px]'>
          <input type='text' placeholder='City' className='w-full mb-[15px] p-[10px] border border-[#c5c5c5] rounded-[4px] outline-[#DF5E11]'/>
          <input type='text' placeholder='State' className='w-full mb-[15px] p-[10px] border border-[#c5c5c5] rounded-[4px] outline-[#DF5E11]' />
        </div>
        <div className='flex gap-[10px]'>
          <input type='text' placeholder='Zip code' className='w-full mb-[15px] p-[10px] border border-[#c5c5c5] rounded-[4px] outline-[#DF5E11]'/>
          <input type='text' placeholder='Country' className='w-full mb-[15px] p-[10px] border border-[#c5c5c5] rounded-[4px] outline-[#DF5E11]'/>
        </div>
        <input type='text' placeholder='Phone' className='w-full mb-[15px] p-[10px] border border-[#c5c5c5] rounded-[4px] outline-[#DF5E11]' />
      </div>
      {/* placeOrderRight */}
      <div className='w-full max-w-[max(40%, 500px)]'>
      <div className='flex-1 flex flex-col gap-[20px]'>
            <h2 className='font-bold text-xl'>Cart Total</h2>
            <div>
              <div className='flex justify-between text-[#555]'>
                <p>Subtotal</p>
                <p>${getTotalCartAmount()}</p>
              </div>
              <hr className='mt-[10px]'/>
              <div  className='flex justify-between text-[#555]'>
                <p>Delivery Fee</p>
                <p>${getTotalCartAmount()===0?0:2}</p>
              </div>
              <hr className='mt-[10px]'/>
              <div  className='flex justify-between text-[#555]'>
                <b>Total</b>
                <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
              </div>
            </div>
            <button className='border-none bg-[#DF5E11] w-[max(15vw,200px)] py-[12px] px-[2px] rounded-[4px] cursor-pointer text-white mt-[30px]'>PROCEED TO PAYMENT</button>
          </div>
      </div>
    </form>
  )
}

export default PlaceOrder