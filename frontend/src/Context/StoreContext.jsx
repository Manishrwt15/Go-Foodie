import { createContext, useState } from "react";
import { food_list } from "../assets/frontend_assets/assets";
export const StoreContext = createContext(null);

const StoreContextProvider = (props)=>{
  const [cartItems, setCartItems]= useState({});

  const addToCart = (itemId)=>{
    if(!cartItems[itemId]){
      setCartItems((prev)=>({...prev, [itemId]:1}));
    } else {
      setCartItems((prev)=>({...prev, [itemId]:prev[itemId]+1}));
  }
}

  const removeFromCart = (itemId)=>{
      setCartItems((prev)=>({...prev, [itemId]:prev[itemId]-1}));
  }

<<<<<<< HEAD
=======
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        const itemInfo = food_list.find((product) => product._id === item);
        if (itemInfo) {
          totalAmount += itemInfo.price * cartItems[item];
        } else {
          console.warn(`Item with ID ${item} not found in food_list`);
        }
      }
    }
    return totalAmount;
  };
  
>>>>>>> upstream/main
  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
<<<<<<< HEAD
=======
    getTotalCartAmount,
>>>>>>> upstream/main
  }
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  )
}

export default StoreContextProvider;