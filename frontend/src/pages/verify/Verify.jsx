import '../../App.css';

import React, { useContext, useEffect } from 'react'
import {useNavigate, useSearchParams} from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContext';
import axios from 'axios';

const Verify = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");
  const {url} = useContext(StoreContext);
  const navigate = useNavigate();

  const verifyPayment =  async () =>{
    const response = await axios.post(url+"/api/order/verify", {success,orderId});
    if(response.data.success== 'true'){
      navigate('/myorders');
    }else{
      navigate('/');
    }
  }

  useEffect(()=>{
      verifyPayment();
  },[])
  return (
    <div className='min-h-[60vh] grid'>
  <div className='w-[100px] h-[100px] place-self-center border-[5px] border-[#bdbdbd] border-t-[#DF5E11] rounded-full'style={{ animation: "rotate 1s linear infinite" }}></div>
</div>
  )
}

export default Verify