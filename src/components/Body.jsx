import { useEffect, useState } from "react";
import RestaurantCard, { withOpen } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredListOfRestauants, setFilteredListOfRestaurants] = useState([]);

  const [searchText, setSearchText] = useState("");

  const RestaurantCardWithOpen = withOpen(RestaurantCard);

  const handleFilter = () => {
    const filteredList = listOfRestaurants.filter(
      (res) => res.info.avgRating > 4.2
    );

    setFilteredListOfRestaurants(filteredList);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5/?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    //Optional Chaining
    setListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  console.log("list of restaurants", listOfRestaurants);

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1>
        Looks like you're offline!! Please check your internet connection;
      </h1>
    );

  //conditional rendering
  return listOfRestaurants.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter bg-gray-200 p-4 mb-4 flex items-center justify-between">
        <div className="search flex items-center">
          <input
            type="text"
            className="searchBox border border-gray-300 px-4 py-2 mr-2 rounded"
            placeholder="Search..."
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              let filteredRestaurants = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredListOfRestaurants(filteredRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="btn bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleFilter}
        >
          Top Rated restaurants
        </button>
      </div>
      <div className="res-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredListOfRestauants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            {restaurant.info.isOpen ? (
              <RestaurantCardWithOpen resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
