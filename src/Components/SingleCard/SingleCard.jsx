import React, { useContext } from "react";
import { ImCross } from "react-icons/im";
import { CartContext } from "../Root/Root";

function SingleCard({ item }) {
  const { name, image, price ,description } = item;
  const [cartItems, setItemInCart] = useContext(CartContext)
  const removeItemFromCart = () => {
   const items = cartItems.filter((carItem)=> carItem.id !== item.id)
   setItemInCart(items)
  }
  return (
    <div>
      <div className="card card-side bg-base-100 items-center shadow-xl p-3 gap-8">
        <figure className="w-2/4 md:w-1/4">
          <img src={image} alt="Movie" />
        </figure>
        <div className="card-body ">
          <h2 className="card-title text-2xl font-bold">{name}</h2>
          <p className="text-sm ">{description}</p>
          <p className="text-xl font-bold">Price : ${price}</p>
          <div className="card-actions justify-end">
          </div>
        </div>
        <button onClick={removeItemFromCart} className="btn btn-outline btn-error"><ImCross /></button>
      </div>
    </div>
  );
}

export default SingleCard;
