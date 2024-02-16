import React from "react";
import Item from "./item";

const ItemList = ({ foodDetails, isLoading }) => {
  return (
    <div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        foodDetails.extendedIngredients.map((item) => (
          <Item key={item.id} item={item} />
        ))
      )}
    </div>
  );
};

export default ItemList;
