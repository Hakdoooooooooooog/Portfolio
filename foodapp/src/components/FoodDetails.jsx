import React, { useEffect, useState } from "react";
import styles from "./fooddetails.module.css";
import ItemList from "./ItemList";

const FoodDetails = ({ foodID }) => {
  const [foodDetails, setFoodDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${foodID}/information`;
  const API_KEY = "9a3d1b59b2e54ec3a3168bc2614b70a7";

  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      setFoodDetails(data);
      setIsLoading(false);
    }
    fetchFood();
  }, [foodID]);

  return (
    <div>
      <div className={styles.recipeCard}>
        <h1 className={styles.recipeName}>{foodDetails.title} </h1>
        <img
          className={styles.recipeImage}
          src={foodDetails.image}
          alt={foodDetails.title}
        />
        <div className={styles.recipeDetails}>
          <span>
            <strong>⏱️{foodDetails.readyInMinutes} Minutes</strong>
          </span>
          <span>
            <strong>🍽️{foodDetails.servings} Servings</strong>
          </span>
          <span>
            <strong>
              {foodDetails.vegetarian ? "🥕Vegetarian" : "🍖Non-Vegetarian"}
            </strong>
          </span>
          <span>
            <strong>{foodDetails.vegan ? "🐮 Vegan" : ""}</strong>
          </span>
        </div>
        <div>
          <span>
            <strong>💲{foodDetails.pricePerServing / 100} Per Serving</strong>
          </span>
        </div>

        <h2>Ingredients</h2>
        <ItemList foodDetails={foodDetails} isLoading={isLoading} />

        <h2>Instructions</h2>
        <div className={styles.recipeInstructions}>
          <ol>
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              foodDetails.analyzedInstructions[0].steps.map((step) => (
                <li>{step.step}</li>
              ))
            )}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
