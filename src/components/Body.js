import { useState } from "react";
import resList from "../utils/mockdata";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);

  const handleClick = () => {
    const filteredList = listOfRestaurants.filter(
      (res) => res.data.avgRating > 4
    );

    setListOfRestaurants(filteredList);
  };

  return (
    <div className="body">
      <button className="btn" onClick={handleClick}>
        Top Rated restaurants
      </button>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
