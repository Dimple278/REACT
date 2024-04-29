import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center mt-8">
      <h1 className="text-3xl font-semibold mb-4">Cart Items:</h1>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block mb-4"
        onClick={handleClick}
      >
        Clear Cart
      </button>
      <ItemList itemCards={cartItems} />
      {cartItems.length === 0 && (
        <h1 className="text-xl mt-4">Cart is empty. Please add some items.</h1>
      )}
    </div>
  );
};

export default Cart;
