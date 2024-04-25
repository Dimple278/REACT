import { useEffect, useState } from "react";
import Shimmer from "./Shimmer.js";
import { MENU_API } from "../utils/constants";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();
  useEffect(() => {
    fetchInfo();
  }, []);

  const fetchInfo = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  };

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, avgRating, totalRatingsString } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  return (
    <div>
      <h1>{name}</h1>
      <h3>{cuisines.join(", ")}</h3>
      <h4>Rating:{avgRating}</h4>
      <p>{totalRatingsString}</p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li>{item.card.info.name}</li>
        ))}
      </ul>
      {/* <h2>{itemCards[0].card.info.name}</h2> */}
    </div>
  );
};

export default RestaurantMenu;
