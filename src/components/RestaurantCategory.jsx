import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div className="max-w-xl mx-auto m-8">
      <div
        className="border border-gray-200 rounded-lg mb-4"
        onClick={handleClick}
      >
        <div className="flex justify-between items-center cursor-pointer p-4 bg-gray-100 ">
          <h1 className="text-xl font-semibold">
            {data.title} ({data.itemCards.length})
          </h1>
          <svg
            className={`h-6 w-6 transform ${showItems ? "rotate-180" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={showItems ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}
            />
          </svg>
        </div>
        {showItems && <ItemList itemCards={data?.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
