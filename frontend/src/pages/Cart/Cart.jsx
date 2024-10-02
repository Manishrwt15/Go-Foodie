import React, { useContext } from 'react'
import { StoreContext } from '../../Context/StoreContext'
import {useNavigate} from 'react-router-dom'
const Cart = () => {
  const {cartItems,food_list,removeFromCart,getTotalCartAmount, url} =  useContext(StoreContext);
  const navigate = useNavigate();
  return (
    <div className='mt-[100px]'>
        <div className='' >
          <div className='grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center text-gray-900 text-[max(1vw,12px)]' >
            <p>Items</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
          <br />
          <hr className='h-[1px] bg-[#e2e2e2] border-none'/>
          {food_list.map((item,index)=>{
              if(cartItems[item._id]>0){
                return (
                  <div key={index}>
                  <div className='grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center text-gray-900 text-[max(1vw,12px)] my-[10px] text-black'>
                  <img src={url+"/images/"+item.image+".png"} alt='' className='w-[50px]'/>
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p className='cursor-pointer' onClick={()=>removeFromCart(item._id)}>x</p>
                  </div>
                  <hr />
                  </div>
                )
              }
          })}
        </div>
        {/* cart bottom, */}
        <div className='mt-[80px] flex justify-between gap-[max(12vw,20px)] flex-col-reverse md:flex-row'>
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
            <button className='border-none bg-[#DF5E11] w-[max(15vw,200px)] py-[12px] px-[2px] rounded-[4px] cursor-pointer text-white' onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
          </div>
          <div className='justify-start'>
            <div className='flex-1'>
              <p className='text-[#555]'>If you hava a promo code, Enter it here</p>
              <div className='mt-[10px] flex justify-between items-center bg-[#eaeaea] rounded-[4px]'>
                <input type="text" placeholder='promo code' className='bg-transparent outline-none border-none pl-[10px]'/>
                <button className='bg-black w-[max(10vw,150px)] py-[12px] px-[5px] border-none text-white rounded-[4px]'>APPLY</button>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}


export default Cart