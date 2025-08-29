import React, { useContext } from "react";
import "./FoodDisplay.css";
import StoreContextProvider, { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  return (
    <div className="food-display" id="food-display">
      <h2>Top dishes near you</h2>

      <div className="food-display-list">
        {food_list.map((value, index) => {
          if (category === "All" || category === value.category) {
            return (
              <FoodItem
                key={index}
                id={value._id}
                description={value.description}
                name={value.name}
                price={value.price}
                image={value.image}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
