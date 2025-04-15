import React, { useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";
import { GiSelfLove } from "react-icons/gi";
import { CartContext, WishListContext } from "../Root/Root";


function Navbar() {
  const [cartItems]=useContext(CartContext)
  const [wishList]= useContext(WishListContext)


  const location = useLocation();

 const bgColor= location.pathname === "/" ? "bg-[#9538E2]" : "";
  
  const UlList = (
    <ul
  
      tabIndex={0}
      className="menu  lg:w-full lg:flex-row menu-sm dropdown-content  rounded-box z-[1] mt-3 w-52 p-2 shadow lg:shadow-none md:shadow-none  "
    >
      <li className="text-5xl">
        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active text-white" : ""
          }
          to="/"
        >
          Home{" "}
        </NavLink>
      </li>
      <li className="text-5xl">
        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active text-black" : ""
          }
          to="/statistics"
        >
          Statistics
        </NavLink>
      </li>
      <li className="text-5xl">
        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active text-black" : ""
          }
          to="/dashboard"
        >
          DashBoard
        </NavLink>
      </li>
    </ul>
  );
  return (
        <div className="mt-6">
              <div className={`${bgColor} w-11/12 mx-auto navbar rounded-t-3xl `}>
  
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </div>
      {UlList}
    </div>
    <a className={`btn btn-ghost text-xl font-bold  ${location.pathname === "/" ?"text-white":"text-black"}`}>Gadget Haven</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    {/* <ul className="menu menu-horizontal px-1">
      <li>
        <a>Item 1</a>
      </li>
      <li>
        <details>
          <summary>Parent</summary>
          <ul className="p-2">
            <li>
              <a>Submenu 1</a>
            </li>
            <li>
              <a>Submenu 2</a>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <a>Item 3</a>
      </li>
    </ul> */}
    {UlList}
  </div>
  <div className="navbar-end">
    <button className="btn rounded-full"><CiShoppingCart />
    <div className="badge">{cartItems.length}</div>
    </button>
    <button className="btn rounded-full"><GiSelfLove />
    <div className="badge">{wishList.length}</div>
    </button>
  </div>
</div>
        </div>
  );
}

export default Navbar;
