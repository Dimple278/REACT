import { IMG_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ itemCards }) => {
  const dispatch = useDispatch();
  const handleAddItems = (itemCard) => {
    dispatch(addItem(itemCard));
  };
  return (
    <div className="p-4 bg-white">
      {itemCards.map((itemCard) => (
        <div key={itemCard.card.info.id} className="mb-4 border-b pb-4 flex">
          <div className="flex-1">
            <h1 className="text-xl font-semibold">{itemCard.card.info.name}</h1>
            <p className="text-gray-600">{itemCard.card.info.description}</p>
            <div className="text-gray-800 font-semibold">
              {itemCard.card.info.price / 100 ||
                itemCard.card.info.defaultPrice / 100}
            </div>
          </div>
          <div className="relative">
            <button
              className="bg-black hover:bg-slate-600 text-white font-semibold px-4 py-2 rounded absolute top-0 left-0"
              onClick={() => handleAddItems(itemCard)}
            >
              Add
            </button>
            <img
              src={IMG_URL + itemCard.card.info.imageId}
              alt="item image"
              className="w-32 h-32 rounded-md ml-1"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
