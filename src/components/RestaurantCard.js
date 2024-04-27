import { IMG_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo } =
    resData?.info;

  return (
    <div className="res-card bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition duration-300 ease-in-out">
      <img
        className="res-logo w-full h-[350px] object-cover object-center rounded-md mb-4"
        alt="res-logo"
        src={IMG_URL + cloudinaryImageId}
      />
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <div className="flex flex-wrap mb-2">
        <span className="bg-gray-200 rounded-md py-1 px-2 text-sm mr-2 mb-2">
          {cuisines.join(", ")}
        </span>
        <span className="bg-yellow-400 rounded-md py-1 px-2 text-sm">
          {avgRating} stars
        </span>
      </div>
      <div className="flex justify-between items-center">
        <h4 className="text-gray-600">{costForTwo}</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
