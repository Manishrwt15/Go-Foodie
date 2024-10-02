import React, { useContext,useState } from 'react'
import { StoreContext } from '../../Context/StoreContext'
import axios from 'axios'

const PlaceOrder = () => {

  const {getTotalCartAmount,token,food_list,cartItems,url} = useContext(StoreContext);

  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city:'',
    state: '',
    zipcode:'',
    country: '',
    phone: '',
  })

   const onChangeHandler = (event) =>{
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({...data,[name]:value}));
   }
console.log({'foodList':food_list, 'cartList':cartItems})
   const placeOrder = async (event) =>{
    event.preventDefault();
    let orderItems = [];
    food_list.forEach((item) => {
      if (cartItems[item._id] > 0) {
        let itemInfo = { ...item, quantity: cartItems[item._id] };
        orderItems.push(itemInfo);
      }
    });

    let orderData = {
      address:data,
      items:orderItems,
      amount:getTotalCartAmount()+2,
    }


    console.log({'orderData':orderData})
    let response = await axios.post(url+"/api/order/place",orderData,{headers: {token}});

    if(response.data.success){
      const {session_url} = response.data;
      window.location.replace(session_url);
    }
    else{
      alert("Failed to place order");
    }
   } 

  return (
    <form onSubmit={placeOrder} className='flex flex-col items-start justify-between gap-[50px] mt-[100px] md:flex-row'>
    {/* placeOrder left */}
      <div className='w-full max-w-[max(30%,500px)]'>
        <p className='text-[30px] font-[600] mb-[50px]'>Delivery Information</p>
        <div className='flex gap-[10px]'>
          <input required type='text' placeholder='First Name' name='firstName' onChange={onChangeHandler} value={data.firstName} className='w-full mb-[15px] p-[10px] border border-[#c5c5c5] rounded-[4px] outline-[#DF5E11]'/>
          <input required type='text' placeholder='Last Name' name='lastName' onChange={onChangeHandler} value={data.lastName} className='w-full mb-[15px] p-[10px] border border-[#c5c5c5] rounded-[4px] outline-[#DF5E11]'/>
        </div>
        <input type='text' placeholder='Email address' name='email' onChange={onChangeHandler} value={data.email} className='w-full mb-[15px] p-[10px] border border-[#c5c5c5] rounded-[4px] outline-[#DF5E11]'/>
        <input required type='text' placeholder='Street' name='street' onChange={onChangeHandler} value={data.street} className='w-full mb-[15px] p-[10px] border border-[#c5c5c5] rounded-[4px] outline-[#DF5E11]'/>
        <div className='flex gap-[10px]'>
          <input required type='text' placeholder='City' name='city' onChange={onChangeHandler} value={data.city} className='w-full mb-[15px] p-[10px] border border-[#c5c5c5] rounded-[4px] outline-[#DF5E11]'/>
          <input required type='text' placeholder='State'  name='state' onChange={onChangeHandler} value={data.state} className='w-full mb-[15px] p-[10px] border border-[#c5c5c5] rounded-[4px] outline-[#DF5E11]' />
        </div>
        <div className='flex gap-[10px]'>
          <input required type='text' placeholder='Zip code' name='zipcode' onChange={onChangeHandler} value={data.zipcode} className='w-full mb-[15px] p-[10px] border border-[#c5c5c5] rounded-[4px] outline-[#DF5E11]'/>
          <input required type='text' placeholder='Country' name='country' onChange={onChangeHandler} value={data.country} className='w-full mb-[15px] p-[10px] border border-[#c5c5c5] rounded-[4px] outline-[#DF5E11]'/>
        </div>
        <input required type='text' placeholder='Phone' name='phone' onChange={onChangeHandler} value={data.phone} className='w-full mb-[15px] p-[10px] border border-[#c5c5c5] rounded-[4px] outline-[#DF5E11]' />
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
            <button type='submit' className='border-none bg-[#DF5E11] w-[max(15vw,200px)] py-[12px] px-[2px] rounded-[4px] cursor-pointer text-white mt-[30px]'>PROCEED TO PAYMENT</button>
          </div>
      </div>
    </form>
  )
}

export default PlaceOrder