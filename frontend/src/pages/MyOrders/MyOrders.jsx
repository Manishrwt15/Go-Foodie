import React, { useState,useContext,useEffect } from 'react'
import { StoreContext } from '../../Context/StoreContext';
import axios from 'axios';
import { assets } from '../../assets/frontend_assets/assets';

const MyOrder = () => {
  const {url, token} = useContext(StoreContext)
  const [data, setData] = useState([]);

  const fetchOrders = async () => {
    const response = await axios.post(url+"/api/order/userorders",{},{headers:{token}});
    setData(response.data.data);
  }

  useEffect(()=>{
if(token){
  fetchOrders();
}
  },[token])

  return (
    <div className='my-[50px]'>
      <h2>My Orders</h2>
      <div className='flex flex-col gap-[20px] mt-[30px]'>
        {data.map((order, index)=>{
            return (
              <div key={index} className='grid grid-cols-[1fr_2fr_1fr] gap-[5px] text-[12px]  md:grid-cols-[0.5fr_2fr_1fr_1fr_2fr_1fr] items-center md:gap-[30px] md:text-[14px] py-[10px] px-[20px] text-[#454545] border border-[#DF5E11]'>
                 <img src={assets.parcel_icon} alt='' className='w-[50px]'/>
                  <p>{order.items.map((item,index)=>{
                    if(index === order.items.length -1){
                      return item.name+" x "+item.quantity
                    }else{
                      return item.name+" x "+item.quantity+", "
                    }
                  })}</p>
                  <p>${order.amount}.00</p>
                  <p>Items: {order.items.length}</p>
                  <p><span className='text-[#DF5E11]'>&#x25cf;</span><b className='font-[500] text-[#454545]'> {order.status}</b></p>
                  <button onClick={fetchOrders} className='text-[10px] md:text-[14px] border-none py-[12px] px-0 rounded-[4px] bg-[#ffe1e1] cursor-pointer text-[#454545]'>Track Order</button>
              </div>
            )
        })}
      </div>
    </div>
  )
}

export default MyOrder