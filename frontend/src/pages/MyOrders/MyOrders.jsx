import React, { useState,useContext,useEffect } from 'react'
import { StoreContext } from '../../Context/StoreContext';

const MyOrder = () => {
  const {url, token} = useContext(StoreContext)
  const [data, setData] = useState([]);

  const fetchOrders = async () => {
    const response = await axios.post(url+"/api/order/userorders",{},{headers:{token}});
    setData(response.data.data);
    console.log(response.data.data);
  }

  useEffect(()=>{
if(token){
  fetchOrders();
}
  },[token])

  return (
    <div>MyOrder</div>
  )
}

export default MyOrder