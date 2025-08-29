import React from "react";
import "./ExploreMenu.css";

import { menu_list } from "../../assets/assets.js";
function ExploreMenu({ category, setCategory }) {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore our menu</h1>

      <p className="Explore-menu-text">
       Our menu is a celebration of taste and tradition, blending timeless recipes with modern flair. Every dish is thoughtfully prepared using premium ingredients, allowing each flavor to shine. 
      </p>
      <div className="explore-menu-list">
        {menu_list.map((value, index) => (
          <div
            onClick={() =>
              setCategory(prev=>prev === value.menu_name ? "All" : value.menu_name)
            }
            className="explore-menu-list-item"
            key={index}
          >
            <img className={category===value.menu_name?"active":""} src={value.menu_image} alt="" />
            <p>{value.menu_name}</p>
          </div>
        ))}
      </div>
      <hr />
    </div>
  )
}

export default ExploreMenu
