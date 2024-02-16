import React from "react";
import FoodItem from "./FoodItem";

const FoodList = ({ foodData, setFoodID }) => {
  return (
    <div>
      {foodData.map((food) => (
        <FoodItem key={food.id} food={food} setFoodID={setFoodID} />
      ))}
    </div>
  );
};

export default FoodList;
