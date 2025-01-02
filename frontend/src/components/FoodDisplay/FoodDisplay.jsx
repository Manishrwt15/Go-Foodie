import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../../Context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  const [foodList, setFoodList] = useState(food_list);

  useEffect(() => {
    setFoodList(food_list);
  }, [food_list]);
  return (
    <div className="mt-[30px]">
      <h2 className="font-[600]" style={{ fontSize: "max(2vw,24px)" }}>
        Top dishes near you
      </h2>
      {foodList.length == 0 ? (
        <div className="min-h-[60vh] grid">
          <div
            className="w-[100px] h-[100px] place-self-center border-[5px] border-[#bdbdbd] border-t-[#DF5E11] rounded-full"
            style={{ animation: "rotate 1s linear infinite" }}
          ></div>
        </div>
      ) : null}
      <div className="grid grid-cols-[repeat(auto-fill,_minmax(240px,_1fr))] gap-[30px] mt-[30px] row-gap-[30px]">
        {foodList &&
          food_list
            .filter((item) => category === "All" || category === item.category)
            .map((item) => (
              <FoodItem
                key={item._id}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            ))}
      </div>
    </div>
  );
};

export default FoodDisplay;
