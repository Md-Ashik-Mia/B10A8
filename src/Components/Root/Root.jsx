import React, { createContext, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';

export const CartContext = createContext([])
export const WishListContext = createContext([])

function Root() {
  

  const  [cartItems , setItemInCart]= useState([])
  const [cartAmount, setTotalCartAmount]=useState(0)
  const  [wishList , setWishListItem]= useState([])
  return (
    <div>
        
        <CartContext.Provider value={[cartItems, setItemInCart,cartAmount, setTotalCartAmount]}>
        <WishListContext.Provider value={[wishList, setWishListItem]}>
        <Navbar></Navbar>
        <Outlet></Outlet>
        </WishListContext.Provider>
        </CartContext.Provider>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  )
}

export default Root
