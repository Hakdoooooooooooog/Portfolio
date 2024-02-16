import React from "react";
import styles from "./fooditem.module.css";

const FoodItem = ({ food, setFoodID }) => {
  return (
    <div className={styles.foodContainer}>
      <img className={styles.foodImage} src={food.image} alt={food.title} />
      <div className={styles.foodContent}>
        <p className={styles.foodName}>{food.title}</p>
      </div>

      <div className={styles.buttonContainer}>
        <button
          onClick={(e) => {
            console.log(food.id);
            setFoodID(food.id);
          }}
          className={styles.foodButton}
        >
          View Recipe
        </button>
      </div>
    </div>
  );
};

export default FoodItem;
