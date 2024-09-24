import React, { useContext } from "react";
import { assets } from "../../assets/frontend_assets/assets";
import { StoreContext } from "../../Context/StoreContext";
const FoodItem = ({ id, name, price, description, image }) => {
  const {cartItems, addToCart, removeFromCart} = useContext(StoreContext);
  return (
    <div className="w-full m-auto rounded-[15px] shadow-md transition-[0.3s] animate-[fadeIn_1s]">
      <div className="relative">
        <img
          className="w-full rounded-tl-[15px] rounded-br-[0] rounded-tr-[15px] rounded-bl-[0]"
          src={image}
          alt="food-item-img"
        />
        {
          !cartItems[id]?(
          <img
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
            alt=""
            className="w-[35px] absolute bottom-[15px] right-[15px] cursor-pointer rounded-full"
          />
        ) : (
          <div className="absolute bottom-[15px] right-[15px] flex items-center gap-[10px] p-[6px] rounded-[50px] bg-white">
            <img
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt=""
              className="w-[30px]"
            />
            <p>{cartItems[id]}</p>
            <img
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt=""
              className="w-[30px]"
            />
          </div>
        )}
      </div>
      <div className="p-[20px]">
        <div className="flex justify-between items-center mb-[10px]">
          <p className="text-[20px] font-[500]">{name}</p>
          <img src={assets.rating_starts} alt="" className="w-[70px]" />
        </div>
        <p className="text-[#676767] text-[12px]">{description}</p>
        <p className="text-[#DF5E11] text-[22px] font-[500] mt-[10px]">
          ${price}
        </p>
      </div>
    </div>
  );
};

export default FoodItem;
