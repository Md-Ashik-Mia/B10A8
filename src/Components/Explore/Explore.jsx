import React, { useEffect, useState } from 'react'
import Product from '../Product/Product'
// import {noDataFoundImage} from "/images/no data found.jpg"

function Explore() {
  const [products, setProducts] = useState([])
    const categories = ["ALL Product", "Laptops","Phones","Accessories","Smart Watches","MacBook","Iphone","Tablet"
      ]  

useEffect(()=>{
  fetch("./data.json")
  .then(res => res.json())
  .then(data => setProducts(data))
},[])

const sortByCategory=(e)=>{
  const category = e.target.innerText
  console.log(category)
  if(category === "ALL Product"){
    fetch("./data.json")
  .then(res => res.json())
  .then(data => setProducts(data))
  }
  else{
    fetch("./data.json")
  .then(res => res.json())
  .then(data => {
    const filteredData = data.filter(product => product.category === category);
    setProducts(filteredData)
  })
  }

}





return (
    <div className='mt-96'>
      <h1 className='text-3xl font-bold text-center'>Explore Cutting-Edge Gadgets</h1>
      <div className="lg:grid lg:grid-cols-4 md:grid-cols-3  gap-4 mt-10">
        <div className='lg:col-span-1 flex lg:flex-col gap-2 flex-wrap  justify-center  items-center p-3 h-fit'>
            {categories.map((category,index) => <button onClick={sortByCategory} key={index} className="btn rounded-3xl  md:w-4/5 hover:bg-purple-800 hover:text-white ">{category}</button>)}
        </div>
        <div className='grid-cols-1 md:grid-cols-2 col-span-1 md:col-span-2 lg:col-span-3 pt-11  grid  lg:grid-cols-3 justify-center items-center '>
          {products.length>0?products.map((data)=><Product key={data.id} data={data}></Product>):
        <div className='col-span-3 flex flex-col items-center justify-center py-20 bg-purple-50 rounded-lg shadow-inner animate-fade-in'>
        <img
          src='/images/no data found.jpg'
          alt='No Data'
          className='w-40 h-40 mb-6 opacity-80'
        />
        <h1 className='animate-bounce text-4xl font-semibold text-purple-600 mb-2'>
          Oops! No Products Found
        </h1>
        <p className='text-lg text-purple-500'>
          Try selecting a different category or check back later.
        </p>
      </div>
            }
        </div>
      </div>
    </div>
  )
}

export default Explore
