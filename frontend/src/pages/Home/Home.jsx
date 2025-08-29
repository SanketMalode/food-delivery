import React, { useState } from "react";
import Headers from "../../components/Header/Header.jsx";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu.jsx";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay.jsx";
import AppDownload from "../../components/AppDownload/AppDownload.jsx";

const Home = () => {
  const [category,setCategory]=useState("All")


  return(
  <>
    <Headers />
    <ExploreMenu category={category} setCategory={setCategory}/>
    <FoodDisplay category={category}/>
    <AppDownload/>
  </>)
};

export default Home;
