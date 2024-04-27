import { useEffect, useState } from "react";
import Shimmer from "./Shimmer.js";
import { MENU_API } from "../utils/constants";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu.jsx";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, avgRating, totalRatingsString } =
    resInfo?.cards[2]?.card?.card?.info;

  const itemCards =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards ||
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
      ?.itemCards ||
    [];

  return (
    <div className="menu bg-white shadow-lg rounded-lg p-4">
      <h1 className="text-3xl font-semibold mb-2">{name}</h1>
      <h3 className="text-lg mb-2">{cuisines.join(", ")}</h3>
      <div className="flex mb-2">
        <span className="bg-yellow-400 rounded-md py-1 px-2 text-sm mr-2">
          {avgRating} stars
        </span>
        <span className="text-gray-600">{totalRatingsString}</span>
      </div>
      <h2 className="text-xl font-semibold mb-2">Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id} className="text-gray-700">
            {item.card.info.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
