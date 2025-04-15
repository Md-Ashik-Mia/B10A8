import React, { useContext } from "react";
import { HiAdjustmentsVertical } from "react-icons/hi2";
import SingleCard from "../SingleCard/SingleCard";
import { CartContext, WishListContext } from "../Root/Root";
import { useNavigate } from "react-router-dom";

function ShowListedItem({ isActive }) {

  const navigate =useNavigate()
  const goToHome=()=>{

    navigate('/')

  }




  const [cartItems, setItemInCart, cartAmount,setTotalCartAmount] = useContext(CartContext);
  const [wishList, setWishListItem] = useContext(WishListContext);
  const sortByPrice = () => {
    const sortedItems = [...cartItems].sort((a, b) => b.price - a.price);
    setItemInCart(sortedItems);
  };
const purchaseDone = () => {
  setItemInCart([]);
  setTotalCartAmount(0);
 document.getElementById("my_modal_5").showModal()


}





  return (
    <div className="mt-3">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold">
          {isActive ? "Cart" : "WishList"}
        </h1>
        {isActive && (
          <div className="flex justify-center items-center gap-2">
            <h1>Total Cost : {cartAmount}</h1>
            <button
              onClick={sortByPrice}
              className="btn btn-outline btn-secondary"
            >
              Sort By Price
            </button>
            {/* <button className="btn "></button> */}

            <button
              className="btn btn-secondary flex items-center gap-2 px-5 py-2 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300"
              onClick={purchaseDone}
              disabled={cartItems.length === 0}
            >
              Purchase <HiAdjustmentsVertical className="text-lg" />
            </button>

            <dialog
              id="my_modal_5"
              className="modal modal-bottom sm:modal-middle"
            >
              <div className="modal-box bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-2xl shadow-2xl p-8 text-center">
                <h3 className="text-3xl font-bold mb-4">🎉 Thank You!</h3>
                <p className="text-lg mb-6">
                  Your purchase was successful. We appreciate your support!
                </p>
                <div className="modal-action justify-center">
                  <form method="dialog">
                    <button onClick={goToHome} className="btn bg-white text-green-600 hover:bg-green-100 font-semibold px-6 py-2 rounded-full transition-all duration-300">
                      Close
                    </button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        )}
      </div>
      <div className="flex flex-col gap-3">
        {isActive
          ? cartItems.map((item, index) => (
              <SingleCard key={item.id} item={item}></SingleCard>
            ))
          : wishList.map((item) => (
              <SingleCard key={item.id} item={item}></SingleCard>
            ))}
      </div>
    </div>
  );
}

export default ShowListedItem;
