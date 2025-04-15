import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { GiSelfLove } from "react-icons/gi";
import { MdOutlineStar } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { useLoaderData, useParams } from "react-router-dom";
import { CartContext, WishListContext } from "../Root/Root";
import { toast } from "react-toastify";
import { Bounce } from "react-toastify";
import ReactStars from "react-rating-stars-component";
import FixedStarRating from "../../assets/FixedStarRating/FixedStarRating";
function ProductDetails() {


  useEffect(() => {
    document.title = `Gadget Heaven | ${name}`;
  }, []);







  const [wishList, setWishListItem] = useContext(WishListContext);
  const[disabledButton, setDisabledButton]=useState(false)
  const [cartItems, setItemInCart, cartAmount, setTotalCartAmount] =
    useContext(CartContext);
  const data = useLoaderData();
  const { productId } = useParams();
  const currentProduct = data.find(
    (product) => parseInt(product.id) === parseInt(productId)
  );
  const {
    id,
    name,
    category,
    price,
    image,
    description,
    specification,
    availability,
    rating,
  } = currentProduct;
  console.log(rating);
  const addToCart = () => {
    const newCartItems = [...cartItems];
    if (!cartItems.includes(currentProduct)) {
      const totalPrice = currentProduct.price + cartAmount;
      newCartItems.push(currentProduct);
      setItemInCart(newCartItems);
      setTotalCartAmount(totalPrice);
      toast("Item Added To The Cart", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };
  const addToWishList = (e) => {
    const newCartItems = [...wishList];
    if (!wishList.includes(currentProduct)) {
      setDisabledButton(true)
      newCartItems.push(currentProduct);
      setWishListItem(newCartItems);
      toast("Item Added To The WishList", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };







  return (
    <div>
      <div className="hero  bg-[#9538E2] rounded-b-3xl mb-32">
        <div className="hero-content flex-col text-center">
          <div className="mt-24 mb-[-9rem]">
            <h1 className="text-5xl text-white font-bold">Product Details</h1>
            <p className="py-6 text-white">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
          </div>
          <div className="w-10/12 md:w-9/12 shadow-xl  outline-8 outline-white border-white  relative top-32 border-opacity-15 rounded-xl overflow-hidden   ">
            <div className="flex flex-col md:flex-row bg-slate-50 gap-8 shadow-xl p-10
            ">
              <figure className="w-full md:w-1/3">
                <img src={image} alt="deviceimage" />
              </figure>
              <div className="flex text-left gap-2 flex-col justify-start pt-3">
                <h2 className="text-3xl font-bold">{name}</h2>
                <p className="text-xl font-bold">Price : ${price}</p>
                {availability ? (
                  <div className="badge badge-outline badge-success">
                    In Stock
                  </div>
                ) : (
                  <div className="badge badge-outline badge-error">
                    Out of stock
                  </div>
                )}
                <p className="text-xl">{description}</p>
                <p className="">
                  <span className="text-xl font-medium">Specification: </span>
                  <br />
                  {specification.map((spec, index) => (
                    <span key={index}>
                     {index} {spec} <br />{" "}
                    </span>
                  ))}
                </p>
                <p className="flex text-xl font-bold items-center">
                  Rating
                  <MdOutlineStar className="text-yellow-500" />
                  <br />
                </p>
                <FixedStarRating rating={Math.round(rating)}></FixedStarRating>

                <div className="">
                  <button
                    onClick={addToCart}
                    className="btn btn-primary text-sm font-bold"
                  >
                    Add to Cart
                    <IoCartOutline />
                  </button>
                  <button onClick={addToWishList} disabled={disabledButton} className="btn rounded-full">
                    <GiSelfLove />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
