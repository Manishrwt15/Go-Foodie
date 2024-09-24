import React, { useContext } from 'react'
import { StoreContext } from '../../Context/StoreContext'
import FoodItem from '../FoodItem/FoodItem';

const FoodDisplay = ({category}) => {
  const {food_list} = useContext(StoreContext);
  return (
    <div className='mt-[30px]'>
        <h2 className='font-[600]' style={{fontSize:'max(2vw,24px)'}}>Top dishes near you</h2>
        <div className='grid grid-cols-[repeat(auto-fill,_minmax(240px,_1fr))] gap-[30px] mt-[30px] row-gap-[30px]'>
          {food_list.map((item,index) =>{
            if(category==='All' || category===item.category){
              return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
            }
           
          })}
        </div>
    </div>
  )
}

export default FoodDisplay