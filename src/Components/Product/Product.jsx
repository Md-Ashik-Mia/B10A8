import React from "react";
import { Link } from "react-router-dom";

function Product({data}) {
    const {name, price, image }=data
   const id= parseInt(data.id)
  return (
    <div className="card bg-base-100 w-4/5 gap-3 shadow-xl">
      <figure className="lg:h-52 w-full">
        <img
          src={image}
          alt=""
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl">{name}</h2>
        <p className="text-xl">Price : {price}$</p>
        <div className="card-actions ">
          <Link to ={`/product/${id}`} >
         
            <button className="btn btn-primary">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Product;
