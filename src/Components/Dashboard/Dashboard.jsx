import React, { useContext, useEffect } from 'react'
import { CartContext } from '../Root/Root'
import ShowListedItem from '../ShowListedItem/ShowListedItem'
import { useState } from 'react'

function Dashboard() {

  useEffect(() => {
    document.title = "Gadget Heaven | Dashboard";
  }, []);

  const [isActive, setIsActive] = useState(true);
  const [cartItems, setItemInCart] =useContext(CartContext)
  return (
    <div>
      <section className="w-11/12 mx-auto">
      <div className="hero  bg-[#9538E2] rounded-3xl">
        <div className="hero-content flex-col text-center">
          <div className="mt-24">
            <h1 className="text-5xl font-bold text-white">
              Dashboard 
            </h1>
            <p className="py-6 text-white">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
            <div className='flex justify-center items-center gap-2'>            
            <button onClick={()=>{setIsActive(true)}}  className={`btn text-white ${isActive==true ? 'btn-active':''} btn-outline btn-secondary`}>Cart</button>
            <button onClick={()=>{setIsActive(false)}} className={`btn text-white ${isActive==false ? 'btn-active':''} btn-outline btn-secondary`}>WishList</button></div>
          </div>
        </div>
      </div>
      <ShowListedItem isActive={isActive}></ShowListedItem>
    </section>


    </div>
  )
}

export default Dashboard
